import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import { createNode, getAllNodesForSelect } from "../NodeActions";

import SelectMultiple from "../../../components/SelectMultiple";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class NodeForm extends Component {
  constructor(props) {
    super(props);

    let defaultSources = [],
      sources = [];
    if (this.props.node.node !== null) {
      sources.push(this.props.node.node._id);
      defaultSources.push({
        label: this.props.node.node.title,
        value: this.props.node.node._id.toString()
      });
    }

    this.state = {
      title: "",
      content: "",
      subtopics: [],
      sources,
      defaultSources,
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSourceSelect = this.onSourceSelect.bind(this);
    this.onSubtopicSelect = this.onSubtopicSelect.bind(this);
  }

  componentDidMount() {
    if (this.props.node.allNodes == null && !this.props.node.loading) {
      this.props.getAllNodesForSelect();
    }
  }

  onSubmit(e) {
    e.preventDefault();
    let newData = {
      title: this.state.title,
      content: this.state.content,
      subtopics: this.state.subtopics,
      sources: this.state.sources,
      author: this.props.auth.user.id
    };
    this.props.createNode(newData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSourceSelect(selection) {
    let sources = [];
    for (var i in selection) {
      sources[i] = selection[i].value;
    }
    this.setState({ sources });
  }

  onSubtopicSelect(selection) {
    let subtopics = [];
    for (var i in selection) {
      subtopics[i] = selection[i].value;
    }
    this.setState({ subtopics });
  }

  onSubtopicOfSelect(selection) {
    let subtopicOf = [];
    for (var i in selection) {
      subtopicOf[i] = selection[i].value;
    }
    this.setState({ subtopicOf });
  }

  render() {
    console.log(this.state);
    let content;
    if (this.props.node.formNodes !== null) {
      content = (
        <div>
          <Paper>
            <h4>Add a New Idea (Node)</h4>
            <form onSubmit={this.onSubmit}>
              <TextField
                id="title"
                label="Title of Idea"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="content"
                label="Description of Idea"
                name="content"
                onChange={this.onChange}
                value={this.state.content}
                margin="normal"
                variant="outlined"
                multiline
              />
              <SelectMultiple
                placeholder="Select sources for this subject"
                onChange={this.onSourceSelect}
                options={this.props.node.formNodes}
                defaultValue={this.state.defaultSources}
              />
              <SelectMultiple
                placeholder="Select subtopics that belong to this subject"
                onChange={this.onSubtopicSelect}
                options={this.props.node.formNodes}
              />
              <Button type="submit" color="primary">
                Submit
              </Button>
            </form>
          </Paper>
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

NodeForm.propTypes = {
  auth: PropTypes.object.isRequired,
  createNode: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { createNode, getAllNodesForSelect }
)(NodeForm);
