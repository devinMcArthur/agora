import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import {
  clearDuplicateSourceAndSubtopics,
  updateNodeConnections
} from "../../../Node/NodeActions";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {}
    };

    this.onDuplicatePress = this.onDuplicatePress.bind(this);
    this.updateConnectionPress = this.updateConnectionPress.bind(this);
  }

  onDuplicatePress() {
    this.props.clearDuplicateSourceAndSubtopics();
  }

  updateConnectionPress() {
    this.props.updateNodeConnections();
  }

  render() {
    return (
      <div>
        <Helmet title="Admin" />
        <Paper>
          <Button onClick={this.onDuplicatePress}>Remove Duplicates</Button>
          <Button onClick={this.updateConnectionPress}>
            Update Connections
          </Button>
        </Paper>
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

Admin.propTypes = {
  clearDuplicateSourceAndSubtopics: PropTypes.func.isRequired,
  updateNodeConnections: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { clearDuplicateSourceAndSubtopics, updateNodeConnections }
)(Admin);
