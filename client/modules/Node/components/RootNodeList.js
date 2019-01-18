import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Link } from "react-router";

import Select from "react-select";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Node from "./Node";

class RootNodeList extends Component {
  render() {
    let nodeArray = [];
    if (this.props.nodes.length > 0) {
      this.props.nodes.forEach(node => {
        nodeArray.push(
          <div key={node._id}>
            <Node onNavigation={this.props.onNavigation} singleNode={node} />
          </div>
        );
      });
    }
    return <div>{nodeArray}</div>;
  }
}

// Retrieve data from store as props
const mapStateToProps = state => ({});

RootNodeList.propTypes = {
  nodes: PropTypes.array.isRequired,
  onNavigation: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  {}
)(RootNodeList);
