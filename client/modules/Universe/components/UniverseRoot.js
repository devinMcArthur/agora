import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { browserHistory } from "react-router";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import NodeForm from "../../Node/components/NodeForm";
import RootNodeList from "../../Node/components/RootNodeList";

import {
  getUniverseRootNodes,
  clearNodes,
  clearNode,
  setNode,
  getNodeByID,
  nodeFullClear
} from "../../Node/NodeActions";
import { clearUniverse } from "../UniverseActions";

class UniverseRoot extends Component {
  constructor() {
    super();

    this.state = {
      nodeFormToggle: false,
      universe: null,
      content: "",
      subtopics: [],
      sources: [],
      errors: {}
    };

    this.nodeFormToggle = this.nodeFormToggle.bind(this);
    this.onNavigation = this.onNavigation.bind(this);
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      browserHistory.push("/login");
    }
    if (this.props.universe.universe._id !== null) {
      this.props.clearNodes();
      this.props.clearNode();
      this.props.getUniverseRootNodes(this.props.universe.universe._id);
    }
    if (this.props.universe.universe.public === true) {
      browserHistory.push("/");
    }
  }

  componentWillUnmount() {
    this.props.clearUniverse();
    this.props.nodeFullClear();
  }

  nodeFormToggle() {
    this.setState({ nodeFormToggle: !this.state.nodeFormToggle });
  }

  onNavigation(id) {
    if (id.includes("root")) {
      return browserHistory.push(
        `/universe/${this.props.universe.universe._id}`
      );
    }
    let newNode;
    if (this.props.node.nodes !== null) {
      newNode = this.props.node.nodes.filter(node => {
        return node._id.toString() === id;
      });
      if (newNode.length === 1) {
        this.props.setNode(newNode[0]);
      } else {
        this.props.getNodeByID(id);
      }
    } else {
      this.props.getNodeByID(id);
    }
  }

  universeNavigation(id) {
    browserHistory.push(`/universe/${id}`);
  }

  render() {
    let nodeForm,
      nodeFormComp = (
        <NodeForm private={!this.props.universe.universe.public} />
      );

    if (this.state.nodeFormToggle) {
      nodeForm = nodeFormComp;
    } else {
      nodeForm = "";
    }

    let content;
    if (
      this.props.node.nodes !== null &&
      this.props.node.nodes.length > 0 &&
      this.props.node.node === null
    ) {
      content = (
        <RootNodeList
          nodes={this.props.node.nodes}
          onNavigation={this.onNavigation}
        />
      );
    } else if (this.props.node.node !== null) {
      content = (
        <RootNodeList
          nodes={new Array(this.props.node.node)}
          onNavigation={this.onNavigation}
        />
      );
    }

    let title;
    this.props.title
      ? (title = this.props.title)
      : (title = this.props.universe.universe.title);

    return (
      <div>
        <h1
          onClick={() => {
            this.universeNavigation(this.props.universe.universe._id);
          }}
        >
          {title}
        </h1>
        <Button variant="contained" onClick={this.nodeFormToggle}>
          Add an Idea
        </Button>
        {nodeForm}
        {content}
      </div>
    );
  }
}

// Retrieve data from store as props
const mapStateToProps = state => ({
  auth: state.auth,
  node: state.node,
  universe: state.universe
});

UniverseRoot.propTypes = {
  universe: PropTypes.object.isRequired,
  title: PropTypes.string
};

export default connect(
  mapStateToProps,
  {
    getUniverseRootNodes,
    clearNodes,
    clearNode,
    setNode,
    getNodeByID,
    nodeFullClear,
    clearUniverse
  }
)(UniverseRoot);
