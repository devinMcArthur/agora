import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { browserHistory } from "react-router";

import UniverseRoot from "../components/UniverseRoot";

import { getUniverseRootNodes, clearNodes } from "../../Node/NodeActions";
import {
  createPersonalUniverse,
  getUniverse,
  clearUniverse
} from "../UniverseActions";

class Universe extends Component {
  constructor() {
    super();

    this.state = {
      nodeFormToggle: false,
      title: "",
      content: "",
      subtopics: [],
      sources: [],
      errors: {}
    };

    this.nodeFormToggle = this.nodeFormToggle.bind(this);
  }

  componentDidMount() {
    this.props.getUniverse(this.props.routeParams.universeID);
  }

  componentWillUnmount() {
    this.props.clearNodes();
    this.props.clearUniverse();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.universe.universe !== null &&
      prevProps.universe.universe === null &&
      !this.props.universe.loading
    ) {
      // Redirect if public Universe
      if (this.props.universe.universe.public) {
        browserHistory.push("/");
      } else {
        // If not a public universe, and user is not logged in, redirect
        if (!this.props.auth.isAuthenticated) {
          browserHistory.push("/login");
        }
      }
      // Redirect if this is your personal Universe
      if (
        this.props.universe.universe._id ===
        this.props.auth.user.personalUniverse
      ) {
        browserHistory.push("/home");
      }
    }
  }

  nodeFormToggle() {
    this.setState({ nodeFormToggle: !this.state.nodeFormToggle });
  }

  render() {
    let content;
    if (this.props.universe.universe !== null) {
      content = <UniverseRoot universe={this.props.universe.universe} />;
    } else {
      content = "Loading . . . ";
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

Universe.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  {
    getUniverseRootNodes,
    clearNodes,
    createPersonalUniverse,
    getUniverse,
    clearUniverse
  }
)(Universe);
