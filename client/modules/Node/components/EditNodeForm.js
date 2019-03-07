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

    this.state = {
      node: this.props.singleNode,
      title: this.props.singleNode.title,
      content: this.props.singleNode.content.string,
      sources: null,
      subtopics: null,
      sourceObjects: null,
      subtopicObjects: null,
      sourceOptions: [],
      subtopicOptions: [],
      file: null,
      imageTitle: "",
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
  }

  componentDidMount() {
    if (this.props.node.formNodes === null && !this.props.node.loading) {
      if (this.props.private) {
        this.props.getAllPrivateNodesForSelect(
          this.props.universe.universe._id
        );
      } else {
        this.props.getAllPublicNodesForSelect();
      }
      if (this.state.node.sourceConnections.length > 0) {
        this.props.getSources(this.state.node._id);
      }
      if (this.state.node.subtopicConnections.length > 0) {
        this.props.getSubtopics(this.state.node._id);
      }
    } else if (this.props.node.formNodes !== null) {
      if (this.state.node.sourceConnections.length > 0) {
        this.props.getSources(this.state.node._id);
      }
      if (this.state.node.subtopicConnections.length > 0) {
        this.props.getSubtopics(this.state.node._id);
      }
    }
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
      this.props.clearSubtopics();
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
    }
  }

  createDefaultSubtopicConnections() {
    let { subtopicOptions } = this.state;
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
    console.log(this.state.node.subtopicConnections.length);
    console.log(
      (this.state.node.subtopicConnections &&
        this.state.node.subtopicConnections.length > 0 &&
        this.state.subtopicOptions.length > 0) ||
        this.state.node.subtopicConnections.length === 0
    );
    let content,
      { errors } = this.state;
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
                onChange={this.onChange}
                value={this.state.content}
                margin="normal"
                variant="outlined"
                fullWidth
                multiline
              />
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
  private: PropTypes.bool
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
