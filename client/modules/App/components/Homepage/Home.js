import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import NodeForm from "../../../Node/components/NodeForm";
import UniverseRoot from "../../../Universe/components/UniverseRoot";

import { clearNodes } from "../../../Node/NodeActions";
import {
  clearUniverse,
  getPublicUniverse
} from "../../../Universe/UniverseActions";

class Home extends Component {
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
    this.props.getPublicUniverse();
  }

  componentDidUpdate(prevProps) {
    if (this.props.universe.universe !== null && prevProps.universe.loading) {
      this.setState({ universe: this.props.universe.universe });
    }
  }

  componentWillUnmount() {
    this.props.clearNodes();
    this.props.clearUniverse();
  }

  nodeFormToggle() {
    this.setState({ nodeFormToggle: !this.state.nodeFormToggle });
  }

  render() {
    let nodeForm,
      universeList,
      rootNodeList,
      nodeFormComp = <NodeForm />;

    if (this.state.nodeFormToggle) {
      nodeForm = nodeFormComp;
    } else {
      nodeForm = "";
    }

    if (this.state.universe !== null) {
      rootNodeList = (
        <UniverseRoot
          universe={this.state.universe}
          onNavigation={this.onNavigation}
          title="Welcome to Agora!"
        />
      );
    }

    return <div>{rootNodeList}</div>;
  }
}

// Retrieve data from store as props
const mapStateToProps = state => ({
  auth: state.auth,
  node: state.node,
  universe: state.universe
});

Home.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { clearNodes, clearUniverse, getPublicUniverse }
)(Home);
