import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router";
import { browserHistory } from "react-router";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

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
  nodeFullClear
} from "../NodeActions";
import { getUniverse, clearUniverse } from "../../Universe/UniverseActions";

class Node extends Component {
  constructor(props) {
    super(props);

    this.state = {
      node: this.props.singleNode || null,
      editFormToggle: false,
      nodeFormToggle: false,
      subtopics: null,
      sources: null
    };

    this.toggleEditForm = this.toggleEditForm.bind(this);
    // this.nodeFormToggle = this.nodeFormToggle.bind(this);
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
      this.setState({ node: this.props.node.node });
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
  }

  // nodeFormToggle() {
  //   this.setState({ nodeFormToggle: !this.state.nodeFormToggle });
  // }

  render() {
    let { editFormToggle, nodeFormToggle } = this.state;
    let content;
    if (this.state.node !== null) {
      let sourceJSX = [],
        subtopicJSX = [],
        editForm,
        nodeForm;
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

      if (nodeFormToggle) {
        nodeForm = <NodeForm />;
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
      if (subtopics && subtopics.length > 0) {
        subtopics.forEach(subtopic => {
          subtopic = subtopic.subtopic;
          subtopicJSX.push(
            <Paper
              style={{ padding: "0.5em", marginTop: "0.5em" }}
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
        subtopicJSX = <Spinner />;
      } else {
        subtopicJSX = "";
      }

      let nodeContent;
      if (node.content.string) {
        // render new lines
        let count = 0;
        nodeContent = [];
        node.content.string.split("\n").forEach(line => {
          nodeContent.push(<p key={`line-${count}`}>{line}</p>);
          count++;
        });
      } else {
        nodeContent = "";
      }

      // FINAL CONTENT THAT WILL BE LOADED
      content = (
        <div key={node._id}>
          <Paper style={{ padding: "0.5em", margin: "1em" }}>
            <div className="row">
              {/* <Button variant="contained" onClick={this.nodeFormToggle}>
              Add an Idea
            </Button> */}
              <Button variant="contained" onClick={this.toggleEditForm}>
                Edit Node
              </Button>
            </div>
            {nodeForm}
            {editForm}
            <h1
              onClick={() => {
                this.props.onNavigation(node._id);
              }}
            >
              {node.title}
            </h1>
            {sourceJSX}
            <br />
            {nodeContent}
            <div>{subtopicJSX}</div>
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
  singleNode: PropTypes.object
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
    clearNode
  }
)(Node);
