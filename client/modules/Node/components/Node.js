import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router";
import { browserHistory } from "react-router";
import _ from "lodash";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import EditNodeForm from "./EditNodeForm";
import NodeForm from "./NodeForm";
import Spinner from "../../App/components/Common/Spinner";

import ShareButton from "../../../components/ShareButton";

import {
  getNodeByID,
  getSubtopics,
  getSources,
  clearSubtopics,
  clearSources,
  clearNodes,
  clearNode,
  nodeFullClear,
  deleteNode,
  retrieveNodeFiles,
  clearFiles
} from "../NodeActions";
import { getUniverse, clearUniverse } from "../../Universe/UniverseActions";

class Node extends Component {
  constructor(props) {
    super(props);

    let subtopicToggle;
    this.props.subtopicToggle !== undefined
      ? (subtopicToggle = this.props.subtopicToggle)
      : (subtopicToggle = true);

    this.state = {
      node: this.props.singleNode || null,
      editFormToggle: false,
      toggleNodeForm: false,
      subtopicToggle,
      subtopics: null,
      sources: null,
      files: null,
      universe: null
    };

    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.toggleNodeForm = this.toggleNodeForm.bind(this);
    this.toggleSubtopics = this.toggleSubtopics.bind(this);
    this.handleLineOutput = this.handleLineOutput.bind(this);
  }

  componentDidMount() {
    // Handle component loading
    let { node } = this.state;
    if (node) {
      if (node.originUniverse) {
        this.props.getUniverse(node.originUniverse);
      }
      if (node.files && node.files.length > 0) {
        this.props.retrieveNodeFiles(node._id);
      }
      if (node.subtopicConnections && node.subtopicConnections.length > 0) {
        this.props.getSubtopics(node._id);
      }
      if (node.sourceConnections && node.sourceConnections.length > 0) {
        this.props.getSources(node._id);
      }
    }
    // Handle loading node through url
    if (
      this.props.singleNode === null &&
      this.props.node.node === null &&
      !this.props.node.loading
    ) {
      this.props.getNodeByID(this.props.params.nodeID);
    }
  }

  toggleEditForm() {
    this.setState({ editFormToggle: !this.state.editFormToggle });
  }

  componentWillUnmount() {
    this.props.clearNodes();
    this.props.clearUniverse();
  }

  toggleSubtopics() {
    this.setState({ subtopicToggle: !this.state.subtopicToggle });
  }

  copyNodeAddressToClipboard() {
    let textField = document.createElement("textarea");
    textField.innerText = ``;
  }

  componentDidUpdate(prevProps) {
    console.log("update", this);

    // Handle Node Navigation
    if (
      this.state.node !== null &&
      this.props.params.nodeID !== this.state.node._id.toString()
    ) {
      this.setState(
        {
          node: null,
          editFormToggle: false,
          toggleNodeForm: false,
          subtopicToggle: false,
          subtopics: null,
          sources: null,
          files: null,
          universe: null
        },
        () => {
          this.props.nodeFullClear();
          this.props.getNodeByID(this.props.params.nodeID);
        }
      );
    }

    // Handle loaded Universe
    if (this.props.universe.universe !== null && this.state.universe === null) {
      this.setState({ universe: this.props.universe.universe });
    }
    // Put loaded Files into State
    if (
      this.state.node &&
      this.state.node.files.length > 0 &&
      this.props.node.files !== null &&
      this.state.files === null
    ) {
      this.setState({ files: this.props.node.files });
      this.props.clearFiles();
    }
    // Grab appropriate subtopics for this node
    if (
      this.props.node.subtopics !== null &&
      (this.state.subtopics === null ||
        !_.isEqual(this.state.subtopics, this.props.node.subtopics)) &&
      this.state.node !== null &&
      this.state.node._id.toString() ===
        this.props.node.subtopics[0].connection.sourceNode.toString()
    ) {
      this.setState({ subtopics: this.props.node.subtopics });
      this.props.clearSubtopics();
    }
    // Grab appropriate sources for this node
    if (
      this.props.node.sources !== null &&
      (this.state.sources === null ||
        !_.isEqual(this.state.sources, this.props.node.sources)) &&
      this.state.node &&
      this.state.node._id.toString() ===
        this.props.node.sources[0].connection.subtopicNode.toString()
    ) {
      this.setState({ sources: this.props.node.sources });
      this.props.clearSources();
    }
    // Grab loaded node if necessary
    if (this.props.node.node !== null && this.state.node === null) {
      this.setState({
        node: this.props.node.node
      });
      this.props.getUniverse(this.props.node.node.originUniverse);
      if (
        this.props.node.node.subtopicConnections &&
        this.props.node.node.subtopicConnections.length > 0
      ) {
        this.props.getSubtopics(this.props.node.node._id);
      }
      if (
        this.props.node.node.sourceConnections &&
        this.props.node.node.sourceConnections.length > 0
      ) {
        this.props.getSources(this.props.node.node._id);
      }
      if (this.props.node.node.files && this.props.node.node.files.length > 0) {
        this.props.retrieveNodeFiles(this.props.node.node._id);
      }
    }
    // Update subtopicToggle
    if (this.props.subtopicToggle !== prevProps.subtopicToggle) {
      this.setState({ subtopicToggle: this.props.subtopicToggle });
    }
    // Update state node on update (edit or add)
    if (
      !_.isEqual(this.state.node, this.props.node.node) &&
      this.props.node.node !== null &&
      this.state.node !== null
    ) {
      this.setState({
        node: this.props.node.node,
        editFormToggle: false,
        toggleNodeForm: false
      });
      if (
        this.props.node.node.subtopicConnections &&
        this.props.node.node.subtopicConnections.length > 0
      ) {
        this.props.getSubtopics(this.props.node.node._id);
      } else {
        this.props.clearSubtopics();
      }
      if (
        this.props.node.node.sourceConnections &&
        this.props.node.node.sourceConnections.length > 0
      ) {
        this.props.getSources(this.props.node.node._id);
      } else {
        this.props.clearSources();
      }
    }
  }

  toggleNodeForm() {
    this.setState({ toggleNodeForm: !this.state.toggleNodeForm });
  }

  handleLineOutput() {
    // render new lines
    let count = 0,
      lineArray = [],
      { node } = this.state;

    let imageStyle = {
      maxHeight: "5em",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    };

    // Split content into paragraphs
    node.content.string.split("\n").forEach(line => {
      if (line !== "") {
        // Find Input Tags "<>"
        let regex = /<.*?>/g;
        let match = line.match(regex);
        if (match) {
          let rawLine = line;
          line = [];
          for (var i = 0; i < match.length; i++) {
            line.push(<p>{rawLine.substring(0, rawLine.search(match[i]))}</p>);
            if (match[i].includes("Image")) {
              if (this.state.files) {
                match[i].split(" ").forEach(section => {
                  if (section.includes("img=")) {
                    let quoteRegex = /"(?:[^"\\]|\\.)*"/;
                    let fileName = section
                      .match(quoteRegex)[0]
                      .replace(/"/g, "");
                    for (var i = 0; i < this.state.files.length; i++) {
                      if (this.state.files[i].title === fileName) {
                        line.push(
                          <img
                            style={imageStyle}
                            src={this.state.files[i].content}
                            alt={this.state.files[i].title}
                          />
                        );
                        line.push(
                          <p>
                            {rawLine.substring(
                              rawLine.search(section) + section.length,
                              rawLine.length
                            )}
                          </p>
                        );
                      }
                    }
                  }
                });
              }
            } else if (match[i].includes("Node")) {
              let nodeArray = [];
              if (this.state.subtopics && this.state.sources) {
                nodeArray = this.state.subtopics.concat(this.state.sources);
              } else if (this.state.subtopics) {
                nodeArray = this.state.subtopics;
              } else if (this.state.sources) {
                nodeArray = this.state.sources;
              }
              let string = match[i];
              match[i].split(" ").forEach(section => {
                if (section.includes("id=")) {
                  let quoteRegex = /"(?:[^"\\]|\\.)*"/;
                  let nodeID = section.match(quoteRegex)[0].replace(/"/g, "");
                  let text = string
                    .substring(
                      string.search(nodeID) + nodeID.length + 1,
                      string.length
                    )
                    .match(quoteRegex)
                    .toString()
                    .replace(/"/g, "");
                  for (var i = 0; i < nodeArray.length; i++) {
                    let node = nodeArray[i][Object.keys(nodeArray[i])[1]];
                    if (node._id.toString() === nodeID) {
                      line.push(
                        <Link to={`/node/${nodeID}`}>
                          {text} ({node.title})
                        </Link>
                      );
                      line.push(
                        <p>
                          {rawLine.substring(
                            rawLine.search(string) + string.length,
                            rawLine.length
                          )}
                        </p>
                      );
                    }
                  }
                }
              });
            }
          }
        }

        lineArray.push(
          <p style={{ color: "white" }} key={`line-${count}`}>
            {line}
          </p>
        );
      } else {
        lineArray.push(<br />);
      }
      count++;
    });
    return lineArray;
  }

  render() {
    let { editFormToggle, toggleNodeForm, universe } = this.state;
    let content;
    if (this.state.node !== null) {
      let sourceJSX = [],
        subtopicJSX = [],
        editForm,
        nodeForm,
        subtopicToggleButtonText;
      let node = this.state.node;

      let fileArray = [];
      if (this.state.files && this.state.files.length > 0) {
        for (var i = 0; i < this.state.files.length; i++) {
          if (this.state.files[i].content.includes("image")) {
            fileArray.push(
              <img
                alt={this.state.files[i].title}
                style={{ maxWidth: "80%" }}
                src={this.state.files[i].content}
              />
            );
          } else {
            fileArray.push(<p>This file is invalid</p>);
          }
        }
      } else if (this.props.node.filesLoading) {
        fileArray = <Spinner />;
      }

      if (editFormToggle) {
        editForm = (
          <div>
            <EditNodeForm
              singleNode={node}
              files={this.state.files}
              subtopics={this.state.subtopics}
              sources={this.state.sources}
              private={!this.props.universe.universe.public}
            />
          </div>
        );
      } else {
        editForm = "";
      }

      if (toggleNodeForm) {
        nodeForm = (
          <NodeForm
            private={!this.props.universe.universe.public}
            sourceNode={this.state.node}
          />
        );
      }

      let { subtopics, sources } = this.state;

      // Sources
      if (sources && sources.length > 0) {
        sources.forEach(source => {
          source = source.source;
          sourceJSX.push(
            <span key={source._id}>
              <Button
                onClick={() => {
                  this.props.onNavigation(source._id);
                }}
              >
                #{source.title}
              </Button>{" "}
            </span>
          );
        });
      } else {
        if (this.props.universe.universe !== null) {
          sourceJSX.push(
            <span key={"root-link"}>
              <Button
                onClick={() => {
                  this.props.onNavigation(
                    `root-${this.props.universe.universe._id}`
                  );
                }}
              >
                #root
              </Button>
            </span>
          );
        } else {
          sourceJSX.push("Loading . . .");
        }
      }

      // Subtopics
      if (subtopics && subtopics.length > 0 && this.state.subtopicToggle) {
        subtopicToggleButtonText = "Hide Subtopics";
        subtopics.forEach(subtopic => {
          subtopic = subtopic.subtopic;
          subtopicJSX.push(
            <Paper
              style={{
                padding: "0.5em",
                marginTop: "0.5em",
                border: "solid black 1px"
              }}
              key={subtopic._id}
            >
              <h3
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.props.onNavigation(subtopic._id);
                }}
              >
                {subtopic.title}
              </h3>
              {subtopic.content.string === "" ? (
                "No Content"
              ) : (
                <p>{subtopic.content.string}</p>
              )}
            </Paper>
          );
        });
      } else if (
        this.props.node.loading &&
        this.state.node.subtopicConnections.length > 0
      ) {
        subtopicToggleButtonText = "Subtopics Loading . . .";
        subtopicJSX = <Spinner />;
      } else {
        subtopicToggleButtonText = "Show Subtopics";
        subtopicJSX = "";
      }

      let subtopicToggleJSX;
      if (subtopics && subtopics.length > 0) {
        subtopicToggleJSX = (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Button onClick={this.toggleSubtopics}>
              {subtopicToggleButtonText}
            </Button>
          </Grid>
        );
      }

      let nodeContent;
      if (node.content.string) {
        let lineArray = this.handleLineOutput();

        nodeContent = (
          <Paper
            style={{
              padding: "0.5em",
              marginTop: "0.5em",
              backgroundColor: "gray"
            }}
            square={true}
            key={"node-content"}
          >
            {lineArray}
          </Paper>
        );
      } else {
        nodeContent = "";
      }

      let deleteButton;
      if (this.props.auth.user && this.props.auth.user.admin) {
        deleteButton = (
          <span>
            {" | "}
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                if (
                  window.confirm("Are you sure you want to delete this Node?")
                )
                  this.props.deleteNode(node._id);
              }}
            >
              Delete Node
            </Button>
          </span>
        );
      }

      // FINAL CONTENT THAT WILL BE LOADED
      content = (
        <div key={node._id}>
          <Paper
            style={{
              padding: "0.5em",
              margin: "1em",
              border: "solid black 1px"
            }}
          >
            <Grid justify="space-between" container spacing={24}>
              <Grid item>
                {" "}
                <h1
                  style={{ cursor: "pointer" }}
                  className="link-text"
                  onClick={() => {
                    this.props.onNavigation(node._id);
                  }}
                >
                  {node.title}
                </h1>
              </Grid>
              <Grid item>
                <ShareButton link={`${location.origin}/node/${node._id}`} />
              </Grid>
            </Grid>
            {universe ? (
              <Button
                variant="contained"
                onClick={() => {
                  browserHistory.push(
                    `/universe/${this.props.universe.universe._id}`
                  );
                }}
                style={{ margin: "0.5em 0" }}
              >
                Universe: {this.props.universe.universe.title}
              </Button>
            ) : (
              <span>This Node has no Home :(</span>
            )}
            <div className="row">
              <div className="col">
                {this.props.auth.isAuthenticated ? (
                  <span>
                    <Button
                      variant="outlined"
                      color="primary"
                      style={{ marginRight: "0.5em" }}
                      onClick={this.toggleEditForm}
                    >
                      Edit Node
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={this.toggleNodeForm}
                    >
                      Add Node
                    </Button>
                    {deleteButton}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            {nodeForm}
            {editForm}
            {sourceJSX}
            {nodeContent}
            <div>{subtopicJSX}</div>
            {subtopicToggleJSX}
            {fileArray}
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

Node.defaultProps = {
  onNavigation: e => {
    if (e.includes("root")) {
      browserHistory.push(`/universe/${e.split("-")[1]}`);
    } else {
      browserHistory.push(`/node/${e}`);
      location.reload();
    }
  },
  singleNode: null
};

Node.propTypes = {
  auth: PropTypes.object.isRequired,
  onNavigation: PropTypes.func,
  singleNode: PropTypes.object,
  subtopicToggle: PropTypes.bool
};

export default connect(
  mapStateToProps,
  {
    getNodeByID,
    getSubtopics,
    getSources,
    nodeFullClear,
    getUniverse,
    clearUniverse,
    clearSources,
    clearSubtopics,
    clearNodes,
    clearNode,
    deleteNode,
    retrieveNodeFiles,
    clearFiles
  }
)(Node);
