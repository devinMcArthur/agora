import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import { editNode, getAllNodesForSelect } from "../NodeActions";

import SelectMultiple from "../../../components/SelectMultiple";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class EditNodeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.node.node.title,
      content: this.props.node.node.content.string,
      sources: this.props.node.node.sources,
      subtopics: this.props.node.node.subtopics,
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSourceSelect = this.onSourceSelect.bind(this);
    this.onSubtopicSelect = this.onSubtopicSelect.bind(this);
  }

  componentDidMount() {
    if (this.props.node.formNodes === null && !this.props.node.loading) {
      this.props.getAllNodesForSelect();
    }
  }

  onSubmit(e) {
    e.preventDefault();
    let newData = {
      id: this.props.node.node._id,
      title: this.state.title,
      content: this.state.content,
      sources: this.state.sources,
      subtopics: this.state.subtopics,
      author: this.props.auth.user.id
    };
    this.props.editNode(newData);
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
    let content;
    if (this.props.node !== null && this.props.node.formNodes !== null) {
      let subtopicOptions = [],
        sourceOptions = [];

      for (var i in this.props.node.formNodes) {
        if (
          this.props.node.node.subtopics.includes(
            this.props.node.formNodes[i].value
          )
        ) {
          subtopicOptions.push(this.props.node.formNodes[i]);
        }
        if (
          this.props.node.node.sources.includes(
            this.props.node.formNodes[i].value
          )
        ) {
          sourceOptions.push(this.props.node.formNodes[i]);
        }
      }

      content = (
        <div>
          <Paper>
            <h4>Edit this Node</h4>
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
                defaultValue={sourceOptions}
              />
              <SelectMultiple
                placeholder="Select subtopics that belong to this subject"
                onChange={this.onSubtopicSelect}
                options={this.props.node.formNodes}
                defaultValue={subtopicOptions}
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

    content =
      "This feature is currently is development, sorry for any inconvenience";

    return <div>{content}</div>;
  }
}

// Retrieve data from store as props
const mapStateToProps = state => ({
  auth: state.auth,
  node: state.node
});

EditNodeForm.propTypes = {
  auth: PropTypes.object.isRequired,
  node: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { editNode, getAllNodesForSelect }
)(EditNodeForm);
