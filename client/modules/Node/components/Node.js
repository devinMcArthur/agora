import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router";
import { browserHistory } from "react-router";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import EditNodeForm from "./EditNodeForm";
import NodeForm from "./NodeForm";
import Spinner from "../../App/components/Common/Spinner";

import {
  getNodeByID,
  getSubtopics,
  getSources,
  clearSubtopics,
  clearSources,
  clearNodes,
  clearNode,
  nodeFullClear,
  deleteNode
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
      sources: null
    };

    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.toggleNodeForm = this.toggleNodeForm.bind(this);
    this.toggleSubtopics = this.toggleSubtopics.bind(this);
  }

  componentDidMount() {
    // Handle component loading
    let { node } = this.state;
    if (node) {
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
  }

  toggleSubtopics() {
    this.setState({ subtopicToggle: !this.state.subtopicToggle });
  }

  componentDidUpdate(prevProps) {
    // Grab appropriate subtopics for this node
    if (
      this.props.node.subtopics !== null &&
      this.state.subtopics === null &&
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
      this.state.sources === null &&
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
    }
    // Update subtopicToggle
    if (this.props.subtopicToggle !== prevProps.subtopicToggle) {
      this.setState({ subtopicToggle: this.props.subtopicToggle });
    }
  }

  toggleNodeForm() {
    this.setState({ toggleNodeForm: !this.state.toggleNodeForm });
  }

  render() {
    let { editFormToggle, toggleNodeForm } = this.state;
    let content;
    if (this.state.node !== null) {
      let sourceJSX = [],
        subtopicJSX = [],
        editForm,
        nodeForm,
        subtopicToggleButtonText;
      let node = this.state.node;

      if (editFormToggle) {
        editForm = (
          <div>
            <EditNodeForm
              singleNode={node}
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

      let lineArray, nodeContent;
      if (node.content.string) {
        // render new lines
        let count = 0;
        lineArray = [];
        node.content.string.split("\n").forEach(line => {
          lineArray.push(
            <p style={{ color: "white" }} key={`line-${count}`}>
              {line}
            </p>
          );
          count++;
        });
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
            <h1
              onClick={() => {
                this.props.onNavigation(node._id);
              }}
            >
              {node.title}
            </h1>
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
    deleteNode
  }
)(Node);
