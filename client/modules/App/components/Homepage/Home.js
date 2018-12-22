import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { browserHistory } from "react-router";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import NodeForm from "../../../Node/components/NodeForm";
import NodeList from "../../../Node/components/NodeList";

import { getRootNodes } from "../../../Node/NodeActions";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      nodeFormToggle: false,
      errors: {}
    };

    this.nodeFormToggle = this.nodeFormToggle.bind(this);
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      browserHistory.push("/login");
    }
    this.props.getRootNodes();
  }

  nodeFormToggle() {
    this.setState({ nodeFormToggle: !this.state.nodeFormToggle });
  }

  render() {
    let nodeForm;
    if (this.state.nodeFormToggle) {
      nodeForm = <NodeForm />;
    } else {
      nodeForm = "";
    }

    let rootNodeList;
    if (this.props.node.nodes !== null && this.props.node.nodes.length > 0) {
      rootNodeList = <NodeList nodes={this.props.node.nodes} />;
    }

    return (
      <div>
        <h1>Welcome to the Homepage!</h1>
        <Button variant="contained" onClick={this.nodeFormToggle}>
          Add an Idea
        </Button>
        {nodeForm}
        {rootNodeList}
      </div>
    );
  }
}

// Retrieve data from store as props
const mapStateToProps = state => ({
  auth: state.auth,
  node: state.node
});

Home.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { getRootNodes }
)(Home);
