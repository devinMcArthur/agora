import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import EditNodeForm from "../components/EditNodeForm";

import NodeForm from "../components/NodeForm";

import {
  getNodeByID,
  getSubtopics,
  getSources,
  nodeFullClear
} from "../NodeActions";

class Node extends Component {
  constructor() {
    super();

    this.state = {
      editFormToggle: false,
      nodeFormToggle: false
    };

    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.nodeFormToggle = this.nodeFormToggle.bind(this);
  }

  componentDidMount() {
    if (this.props.node.node === null && !this.props.node.loading) {
      this.props.getNodeByID(this.props.params.nodeID);
    }
  }

  toggleEditForm() {
    this.setState({ editFormToggle: !this.state.editFormToggle });
  }

  componentWillUnmount() {
    this.props.nodeFullClear();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.node.node !== null &&
      this.props.node.node.subtopics &&
      this.props.node.node.subtopics.length > 0 &&
      this.props.node.subtopics === null &&
      !this.props.node.loading
    ) {
      this.props.getSubtopics(this.props.params.nodeID);
    }
    if (
      this.props.node.node !== null &&
      this.props.node.node.sources &&
      this.props.node.node.sources.length > 0 &&
      this.props.node.sources === null &&
      !this.props.node.loading
    ) {
      this.props.getSources(this.props.params.nodeID);
    }
    // Check for redirect to other Node
    if (this.props.params.nodeID !== prevProps.params.nodeID) {
      this.props.nodeFullClear();
      this.props.getNodeByID(this.props.params.nodeID);
    }
  }

  nodeFormToggle() {
    this.setState({ nodeFormToggle: !this.state.nodeFormToggle });
  }

  render() {
    let { editFormToggle, nodeFormToggle } = this.state;
    let content;
    if (this.props.node.node !== null) {
      let sourceJSX = [],
        subtopicJSX = [],
        editForm,
        nodeForm;
      let node = this.props.node.node;

      if (editFormToggle) {
        editForm = (
          <div>
            <EditNodeForm node={node} />
          </div>
        );
      } else {
        console.log("hi");
        editForm = "";
      }

      if (nodeFormToggle) {
        nodeForm = <NodeForm />;
      }

      let { subtopics, sources } = this.props.node;

      // Sources
      if (sources && sources.length > 0) {
        sources.forEach(source => {
          sourceJSX.push(
            <span>
              <Link
                to={`/node/${source._id}`}
                style={{ textDecoration: "none" }}
              >
                #{source.title}
              </Link>{" "}
            </span>
          );
        });
      } else {
        sourceJSX.push(
          <span>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              #root
            </Link>{" "}
          </span>
        );
      }

      // Subtopics
      if (subtopics && subtopics.length > 0) {
        subtopics.forEach(subtopic => {
          subtopicJSX.push(
            <Paper style={{ padding: "0.5em", marginTop: "0.5em" }}>
              <Link
                to={`/node/${subtopic._id}`}
                style={{ textDecoration: "none" }}
              >
                <h3>{subtopic.title}</h3>
              </Link>
              {subtopic.content.string === "" ? (
                "No Content"
              ) : (
                <p>{subtopic.content.string}</p>
              )}
            </Paper>
          );
        });
      } else {
        subtopicJSX = <p>This Subject does not have any subtopics!</p>;
      }

      // FINAL CONTENT THAT WILL BE LOADED
      content = (
        <div>
          <div className="row">
            <Button variant="contained" onClick={this.nodeFormToggle}>
              Add an Idea
            </Button>
            <Button variant="contained" onClick={this.toggleEditForm}>
              Edit Node
            </Button>
          </div>
          {nodeForm}
          {editForm}
          <h1>{node.title}</h1>
          {sourceJSX}
          <br />
          <Paper style={{ padding: "0.5em" }}>
            <p>{node.content.string}</p>
            <div>{subtopicJSX}</div>
          </Paper>
        </div>
      );
    } else {
      content = <p>Loading . . . </p>;
    }

    return <div>{content}</div>;
  }
}

// Retrieve data from store as props
const mapStateToProps = state => ({
  auth: state.auth,
  node: state.node
});

Node.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { getNodeByID, getSubtopics, getSources, nodeFullClear }
)(Node);
