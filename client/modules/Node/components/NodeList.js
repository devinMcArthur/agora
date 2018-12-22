import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Link } from "react-router";

import Select from "react-select";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class NodeForm extends Component {
  render() {
    let nodeArray = [];
    if (this.props.nodes.length > 0) {
      nodeArray.push(<h4 key="title">Root Subjects</h4>);
      this.props.nodes.forEach(node => {
        nodeArray.push(
          <div key={node._id}>
            <Paper style={{ margin: "1em", padding: "1em" }}>
              <Link to={`/node/${node._id}`} style={{ textDecoration: "none" }}>
                <h5>{node.title}</h5>
              </Link>
              <p>{node.content.string}</p>
            </Paper>
          </div>
        );
      });
    }
    return <div>{nodeArray}</div>;
  }
}

// Retrieve data from store as props
const mapStateToProps = state => ({});

NodeForm.propTypes = {
  nodes: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  {}
)(NodeForm);
