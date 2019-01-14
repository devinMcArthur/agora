import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { clearDuplicateSourceAndSubtopics } from "../../../Node/NodeActions";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {}
    };

    this.onDuplicatePress = this.onDuplicatePress.bind(this);
  }

  onDuplicatePress() {
    console.log("hello");
    this.props.clearDuplicateSourceAndSubtopics();
  }

  render() {
    return (
      <div>
        <Helmet title="Admin" />
        <Paper>
          <Button onClick={this.onDuplicatePress}>Remove Duplicates</Button>
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
  clearDuplicateSourceAndSubtopics: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { clearDuplicateSourceAndSubtopics }
)(Admin);
