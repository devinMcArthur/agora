import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { browserHistory } from "react-router";

import UniverseRoot from "../components/UniverseRoot";

import { clearNodes } from "../../Node/NodeActions";
import {
  createPersonalUniverse,
  getUniverse,
  clearUniverse
} from "../UniverseActions";

class Personal extends Component {
  constructor() {
    super();

    this.state = {
      nodeFormToggle: false,
      universe: null,
      title: "",
      content: "",
      subtopics: [],
      sources: [],
      errors: {}
    };

    this.nodeFormToggle = this.nodeFormToggle.bind(this);
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      browserHistory.push("/login");
    }
    if (this.props.auth.user.personalUniverse) {
      this.props.getUniverse(this.props.auth.user.personalUniverse);
    } else {
      this.props.createPersonalUniverse(this.props.auth.user.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.universe.universe !== null &&
      prevProps.universe.universe === null
    ) {
      this.setState({ universe: this.props.universe.universe });
    }
  }

  componentWillUnmount() {
    this.props.clearUniverse();
    this.props.clearNodes();
  }

  nodeFormToggle() {
    this.setState({ nodeFormToggle: !this.state.nodeFormToggle });
  }

  render() {
    let content;
    if (this.state.universe !== null) {
      content = <UniverseRoot universe={this.state.universe} />;
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

Personal.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  {
    clearNodes,
    createPersonalUniverse,
    getUniverse,
    clearUniverse
  }
)(Personal);
