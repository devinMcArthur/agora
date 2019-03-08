import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  editNode,
  getAllPublicNodesForSelect,
  getAllPrivateNodesForSelect,
  getSources,
  getSubtopics,
  clearSources,
  clearSubtopics,
  uploadNodeFile,
  retrieveNodeFiles
} from "../NodeActions";

import Spinner from "../../App/components/Common/Spinner";

import SelectMultiple from "../../../components/SelectMultiple";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class EditNodeForm extends Component {
  constructor(props) {
    super(props);

    let sourceObjects = null,
      subtopicObjects = null;
    if (this.props.sources) sourceObjects = this.props.sources;
    if (this.props.subtopics) subtopicObjects = this.props.subtopics;

    this.state = {
      node: this.props.singleNode,
      title: this.props.singleNode.title,
      content: this.props.singleNode.content.string,
      sources: null,
      subtopics: null,
      sourceObjects,
      subtopicObjects,
      sourceOptions: [],
      subtopicOptions: [],
      file: null,
      imageTitle: "",
      inputMenuToggle: false,
      inputType: null,
      variableMenuToggle: false,
      variableSelected: null,
      cursorLocation: null,
      cursorWithinInput: false,
      inputMenuArray: [
        {
          title: "Image",
          variables: ["name"]
        },
        {
          title: "Node",
          variables: ["id", "text"]
        }
      ],
      inputLocations: null,
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSourceSelect = this.onSourceSelect.bind(this);
    this.onSubtopicSelect = this.onSubtopicSelect.bind(this);
    this.createDefaultSubtopicConnections = this.createDefaultSubtopicConnections.bind(
      this
    );
    this.createDefaultSourceConnections = this.createDefaultSourceConnections.bind(
      this
    );
    this.fileChosen = this.fileChosen.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.contentUpdate = this.contentUpdate.bind(this);
    this.contentKeyDown = this.contentKeyDown.bind(this);
    this.contentClick = this.contentClick.bind(this);
    this.inputTypeSelection = this.inputTypeSelection.bind(this);
    this.handleContentNavigation = this.handleContentNavigation.bind(this);
    this.findInputLocations = this.findInputLocations.bind(this);
    this.checkCursorLocation = this.checkCursorLocation.bind(this);
    this.imageSelection = this.imageSelection.bind(this);
    this.nodeSelection = this.nodeSelection.bind(this);
  }

  componentDidMount() {
    // See if you already have all Public nodes
    if (this.props.node.formNodes === null && !this.props.node.loading) {
      if (this.props.private) {
        // Get all Nodes for this private universe
        this.props.getAllPrivateNodesForSelect(
          this.props.universe.universe._id
        );
      } else {
        this.props.getAllPublicNodesForSelect();
      }
    }
    if (
      this.state.node.sourceConnections.length > 0 &&
      this.state.sourceObjects === null
    ) {
      this.props.getSources(this.state.node._id);
    }
    if (
      this.state.node.subtopicConnections.length > 0 &&
      this.state.subtopicObjects === null
    ) {
      this.props.getSubtopics(this.state.node._id);
    }
    this.findInputLocations();
  }

  componentDidUpdate() {
    // Place source and subtopic connections into state
    if (
      this.props.node.subtopics !== null &&
      this.state.subtopics === null &&
      this.props.node.formNodes !== null
    ) {
      let subtopics = [];
      this.props.node.subtopics.forEach(subtopicObject => {
        subtopics.push(subtopicObject.connection._id);
      });
      this.setState(
        { subtopics, subtopicObjects: this.props.node.subtopics },
        () => {
          this.createDefaultSubtopicConnections();
        }
      );
      // this.props.clearSubtopics();
    } else if (
      this.state.subtopicObjects !== null &&
      this.state.subtopicObjects.length > 0 &&
      this.props.node.formNodes !== null &&
      this.state.subtopicOptions.length === 0
    ) {
      this.createDefaultSubtopicConnections();
    }

    if (
      this.props.node.sources !== null &&
      this.state.sources === null &&
      this.props.node.formNodes !== null
    ) {
      let sources = [];
      this.props.node.sources.forEach(sourceObject => {
        sources.push(sourceObject.connection._id);
      });
      this.setState({ sources, sourceObjects: this.props.node.sources }, () => {
        this.createDefaultSourceConnections();
      });
      this.props.clearSources();
    } else if (
      this.state.sourceObjects !== null &&
      this.state.sourceObjects.length > 0 &&
      this.props.node.formNodes !== null &&
      this.state.sourceOptions.length === 0
    ) {
      this.createDefaultSourceConnections();
    }
  }

  createDefaultSubtopicConnections() {
    let { subtopicOptions } = this.state;
    console.log("hi", this.props.node.formNodes);
    for (var i in this.props.node.formNodes) {
      // Find existing subtopic connections
      if (this.state.subtopicObjects) {
        this.state.subtopicObjects.forEach(connectionObject => {
          if (
            connectionObject.subtopic._id.toString() ===
            this.props.node.formNodes[i].value
          ) {
            subtopicOptions.push(this.props.node.formNodes[i]);
          }
        });
      }
    }
    this.setState({ subtopicOptions });
  }

  createDefaultSourceConnections() {
    let { sourceOptions } = this.state;
    for (var i in this.props.node.formNodes) {
      // Find existing source connections
      if (this.state.sourceObjects) {
        this.state.sourceObjects.forEach(connectionObject => {
          if (
            connectionObject.source._id.toString() ===
            this.props.node.formNodes[i].value
          ) {
            sourceOptions.push(this.props.node.formNodes[i]);
          }
        });
      }
    }
    this.setState({ sourceOptions });
  }

  onSubmit(e) {
    e.preventDefault();
    let newData = {
      id: this.state.node._id,
      title: this.state.title,
      content: this.state.content,
      sources: this.state.sources,
      subtopics: this.state.subtopics,
      author: this.props.auth.user.id
    };
    this.props.editNode(newData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  contentUpdate(e) {
    this.setState(
      {
        content: e.target.value,
        cursorLocation: e.target.selectionStart - 1
      },
      () => {
        this.handleContentNavigation();
        this.findInputLocations();
      }
    );
  }

  contentKeyDown(e) {
    // Appropriate cursor position to have the character left of the cursor
    this.setState({ cursorLocation: e.target.selectionStart }, () =>
      this.handleContentNavigation()
    );
  }

  contentClick(e) {
    // Appropriate cursor position to have the character left of the cursor
    this.setState({ cursorLocation: e.target.selectionStart - 1 }, () =>
      this.handleContentNavigation()
    );
  }

  handleContentNavigation() {
    let { cursorLocation, content } = this.state;

    // See if character to the left of cursor is "<"
    if (content[cursorLocation] === "<") {
      this.setState({
        inputMenuToggle: true,
        cursorLocation: cursorLocation
      });
    } else {
      this.setState({
        inputMenuToggle: false,
        cursorLocation: cursorLocation
      });
    }

    // See if cursor is between "<" and ">"
    if (this.state.inputLocations === null) {
      this.findInputLocations();
      this.checkCursorLocation();
    } else {
      this.checkCursorLocation();
    }
  }

  inputTypeSelection(type) {
    let value = this.state.content,
      content = "";
    if (type === "Image") {
      content = `${value.substring(
        0,
        this.state.cursorLocation + 1
      )}Image img="">${value.substring(
        this.state.cursorLocation + 13,
        value.length
      )}`;
    } else if (type === "Node") {
      content = `${value.substring(
        0,
        this.state.cursorLocation + 1
      )}Node id="" text="">${value.substring(
        this.state.cursorLocation + 19,
        value.length
      )}`;
    }
    this.setState({ content }, () => {
      this.findInputLocations();
    });
  }

  imageSelection(fileName) {
    let value = this.state.content;
    this.setState(
      {
        content: `${value.substring(
          0,
          this.state.cursorLocation + 1
        )}${fileName}${value.substring(
          this.state.cursorLocation + 1,
          value.length
        )}`
      },
      () => {
        this.findInputLocations();
      }
    );
  }

  nodeSelection(id) {
    let value = this.state.content;
    this.setState(
      {
        content: `${value.substring(
          0,
          this.state.cursorLocation + 1
        )}${id}${value.substring(this.state.cursorLocation + 1, value.length)}`
      },
      () => {
        this.findInputLocations();
      }
    );
  }

  checkCursorLocation() {
    const { cursorLocation, inputLocations, content } = this.state;
    if (inputLocations) {
      let toggleFlag = false,
        inputType;
      inputLocations.forEach(location => {
        // See if cursor is within "<" and ">"
        if (
          cursorLocation >= location.startIndex &&
          cursorLocation < location.endIndex - 1
        ) {
          if (
            content[cursorLocation] === '"' &&
            content[cursorLocation + 1] === '"'
          ) {
            if (location.content.split(" ")[0].includes("Image")) {
              inputType = "image";
              toggleFlag = true;
            } else if (location.content.split(" ")[0].includes("Node")) {
              if (location.content.includes("id")) {
                if (
                  cursorLocation ===
                  location.startIndex + location.content.search("id") + 3
                ) {
                  inputType = "node";
                  toggleFlag = true;
                }
              }
            }
          }
        }
      });
      this.setState({
        variableMenuToggle: toggleFlag,
        inputType
      });
    }
  }

  findInputLocations() {
    const { content } = this.state,
      regex = /<.*?>/g;
    let newLocations = [],
      start = 0,
      end = content.length,
      matches;
    matches = content.match(regex);
    let searchedIndex = 0,
      result;
    if (matches) {
      matches.forEach(match => {
        result = content.substring(start + searchedIndex, end).search(match);
        newLocations.push({
          startIndex: result + searchedIndex,
          endIndex: result + searchedIndex + match.length,
          content: content.substring(
            result + searchedIndex,
            result + searchedIndex + match.length
          )
        });
        searchedIndex = result + 1;
      });
    }
    this.setState({ inputLocations: newLocations });
  }

  onSourceSelect(selection) {
    let sources = [];
    for (var i in selection) {
      sources[i] = selection[i].value;
    }
    this.setState({ sources });
  }

  onSubtopicSelect(selection) {
    let subtopics = [];
    for (var i in selection) {
      subtopics[i] = selection[i].value;
    }
    this.setState({ subtopics });
  }

  onSubtopicOfSelect(selection) {
    let subtopicOf = [];
    for (var i in selection) {
      subtopicOf[i] = selection[i].value;
    }
    this.setState({ subtopicOf });
  }

  fileChosen(e) {
    // Validate file type
    if (
      e.target.files[0].type.includes("image/png") ||
      e.target.files[0].type.includes("image/jpeg") ||
      e.target.files[0].type.includes("image/gif")
    ) {
      // Reset file error
      let errors = {
        ...this.state.errors
      };
      if (errors.file) {
        delete errors.file;
      }

      this.setState({ file: e.target.files[0], errors });
    } else {
      let errors = {
        file:
          "This file type is not accepted, can only submit image files that are either PNG, JPEG, or GIF"
      };
      e.target.value = null;
      this.setState({ errors });
    }
  }

  uploadImage(e) {
    e.preventDefault();
    let file = this.state.file;
    this.props.uploadNodeFile(file, this.state.node._id);
  }

  render() {
    console.log(this.state);
    console.log(this.props.files);
    let content,
      {
        errors,
        inputMenuToggle,
        inputMenuArray,
        variableMenuToggle,
        variableSelected,
        inputType
      } = this.state;
    if (
      this.state.node !== null &&
      this.props.node.formNodes !== null &&
      ((this.state.node.sourceConnections &&
        this.state.node.sourceConnections.length > 0 &&
        this.state.sourceOptions.length > 0) ||
        this.state.node.sourceConnections.length === 0) &&
      ((this.state.node.subtopicConnections &&
        this.state.node.subtopicConnections.length > 0 &&
        this.state.subtopicOptions.length > 0) ||
        this.state.node.subtopicConnections.length === 0)
    ) {
      const { subtopicOptions, sourceOptions } = this.state;

      let inputMenuJSX = [];
      if (inputMenuToggle) {
        inputMenuArray.forEach(inputType => {
          inputMenuJSX.push(
            <Paper
              onClick={() => {
                this.inputTypeSelection(inputType.title);
              }}
            >
              <h4>{inputType.title}</h4>
            </Paper>
          );
        });
      }

      let variableMenuJSX = [];
      if (variableMenuToggle) {
        if (this.state.inputType === "image") {
          if (this.props.files) {
            for (let i = 0; i < this.props.files.length; i++) {
              variableMenuJSX.push(
                <Paper
                  onClick={() => {
                    this.imageSelection(this.props.files[i].title);
                  }}
                >
                  <img
                    src={this.props.files[i].content}
                    alt={this.props.files[i].title}
                    style={{ maxHeight: "2em" }}
                  />
                </Paper>
              );
            }
          } else {
            variableMenuJSX.push(<p>No Images have been added</p>);
          }
        } else if (this.state.inputType === "node") {
          let nodeArray = [];
          if (this.state.sourceObjects && this.state.subtopicObjects) {
            nodeArray = this.state.sourceObjects.concat(
              this.state.subtopicObjects
            );
          } else if (this.state.sourceObjects) {
            nodeArray = this.state.sourceObjects;
          } else if (this.state.subtopicObjects) {
            nodeArray = this.state.subtopicObjects;
          }
          for (var i = 0; i < nodeArray.length; i++) {
            let node = nodeArray[i][Object.keys(nodeArray[i])[1]];
            variableMenuJSX.push(
              <Paper
                onClick={() => {
                  this.nodeSelection(node._id);
                }}
              >
                <p>{node.title}</p>
              </Paper>
            );
          }
        }
      }

      content = (
        <div>
          <Paper>
            <h4>Edit this Node</h4>
            <form onSubmit={this.onSubmit}>
              <TextField
                id="title"
                label="Title of Idea"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
                margin="normal"
                variant="outlined"
              />
              <br />
              <TextField
                id="content"
                label="Description of Idea"
                name="content"
                onChange={this.contentUpdate}
                onKeyDown={this.contentKeyDown}
                onClick={this.contentClick}
                ref="content"
                value={this.state.content}
                margin="normal"
                variant="outlined"
                fullWidth
                multiline
              />
              {inputMenuJSX}
              {variableMenuJSX}
              <SelectMultiple
                placeholder="Select sources for this subject"
                onChange={this.onSourceSelect}
                options={this.props.node.formNodes}
                defaultValue={sourceOptions}
              />
              <SelectMultiple
                placeholder="Select subtopics that belong to this subject"
                onChange={this.onSubtopicSelect}
                options={this.props.node.formNodes}
                defaultValue={subtopicOptions}
              />
              <Button type="submit" color="primary">
                Submit
              </Button>
            </form>
            <br />
            <form onSubmit={this.uploadImage}>
              {/* <TextField
                id="image-title"
                label="Title of Photo"
                name="imageTitle"
                onChange={this.onChange}
                value={this.state.imageTitle}
                margin="normal"
                variant="outlined"
              /> */}
              <input type="file" name="file" onChange={this.fileChosen} />
              {errors.file ? errors.file : ""}
              <Button type="submit" color="primary">
                Submit
              </Button>
            </form>
          </Paper>
        </div>
      );
    } else {
      content = <Spinner />;
    }

    return <div>{content}</div>;
  }
}

// Retrieve data from store as props
const mapStateToProps = state => ({
  auth: state.auth,
  node: state.node,
  universe: state.universe
});

EditNodeForm.defaultProps = {
  private: false
};

EditNodeForm.propTypes = {
  auth: PropTypes.object.isRequired,
  singleNode: PropTypes.object.isRequired,
  subtopics: PropTypes.array,
  sources: PropTypes.array,
  private: PropTypes.bool,
  files: PropTypes.array
};

export default connect(
  mapStateToProps,
  {
    editNode,
    getAllPublicNodesForSelect,
    getAllPrivateNodesForSelect,
    getSources,
    getSubtopics,
    clearSources,
    clearSubtopics,
    uploadNodeFile,
    retrieveNodeFiles
  }
)(EditNodeForm);
