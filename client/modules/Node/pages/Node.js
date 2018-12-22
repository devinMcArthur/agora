import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router";

import Paper from "@material-ui/core/Paper";

import { getNodeByID } from "../NodeActions";

class Node extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (this.props.node.node === null && !this.props.node.loading) {
      this.props.getNodeByID(this.props.params.nodeID);
    }
  }

  render() {
    console.log("Props:", this.props);
    console.log("State:", this.state);

    let content;
    if (this.props.node.node !== null) {
      let node,
        sources = [],
        subtopics = [];
      node = this.props.node.node;

      // Sources
      if (node.sources.length > 0) {
        node.sources.forEach(source => {
          sources.push(<span>#{source}</span>);
        });
      } else {
        sources = "This is a root subject, is has no sources";
      }

      // Subtopics
      if (node.subtopics.length > 0) {
        node.subtopics.forEach(subtopic => {
          subtopics.push(<h3>{subtopic}</h3>);
        });
      } else {
        subtopics = <p>This Subject does not have any subtopics!</p>;
      }

      // FINAL CONTENT THAT WILL BE LOADED
      content = (
        <div>
          <h1>{node.title}</h1>
          <p>{sources}</p>
          <br />
          <Paper style={{ padding: "1em" }}>{node.content.string}</Paper>
          <br />
          {subtopics}
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
  { getNodeByID }
)(Node);
