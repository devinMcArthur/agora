import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import {
  editNode,
  getAllPublicNodesForSelect,
  getAllPrivateNodesForSelect
} from "../NodeActions";

import Spinner from "../../App/components/Common/Spinner";

import SelectMultiple from "../../../components/SelectMultiple";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class EditNodeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      node: this.props.singleNode,
      title: this.props.singleNode.title,
      content: this.props.singleNode.content.string,
      sources: this.props.singleNode.sources,
      subtopics: this.props.singleNode.subtopics,
      sourceOptions: [],
      subtopicOptions: [],
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSourceSelect = this.onSourceSelect.bind(this);
    this.onSubtopicSelect = this.onSubtopicSelect.bind(this);
    this.createDefaultConnections = this.createDefaultConnections.bind(this);
  }

  componentDidMount() {
    if (this.props.node.formNodes === null && !this.props.node.loading) {
      if (this.props.private) {
        this.props.getAllPrivateNodesForSelect(
          this.props.universe.universe._id
        );
      } else {
        this.props.getAllPublicNodesForSelect();
      }
    }
    // if (
    //   (this.state.subtopicOptions.length === 0 && this.props.node.subtopics) ||
    //   (this.state.sourceOptions.length === 0 && this.props.node.sources)
    // ) {
    //   this.createDefaultConnections();
    // }
  }

  componentDidUpdate(prevProps) {
    // Setup existing connections
    if (
      this.props.node.formNodes !== null &&
      prevProps.node.formNodes === null
    ) {
      this.createDefaultConnections();
    }
  }

  createDefaultConnections() {
    let { subtopicOptions, sourceOptions } = this.state,
      existingSuptopicConnections = [],
      existingSourceConnections = [];
    for (var i in this.props.node.formNodes) {
      // Find existing subtopic connections
      if (this.state.node.subtopics) {
        this.state.node.subtopics.forEach(subtopicObject => {
          existingSuptopicConnections.push(subtopicObject.subtopic._id);
        });
        if (
          existingSuptopicConnections.includes(
            this.props.node.formNodes[i].value
          )
        ) {
          subtopicOptions.push(this.props.node.formNodes[i]);
        }
      }

      // Find existing source connections
      if (this.state.node.sources) {
        this.state.node.sources.forEach(sourceObject => {
          existingSourceConnections.push(sourceObject.source._id);
        });
        if (
          existingSourceConnections.includes(this.props.node.formNodes[i].value)
        ) {
          sourceOptions.push(this.props.node.formNodes[i]);
        }
      }
    }
    this.setState({ subtopicOptions, sourceOptions });
  }

  onSubmit(e) {
    e.preventDefault();
    let newData = {
      id: this.state.node._id,
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
    console.log(this.state.subtopicOptions);
    let content;
    if (
      this.state.node !== null &&
      this.state.node.formNodes !== null &&
      ((this.state.node.sources && this.state.sourceOptions.length > 0) ||
        this.state.node.sources === null) &&
      ((this.state.node.subtopics && this.state.subtopicOptions.length > 0) ||
        this.state.node.subtopics === null)
    ) {
      const { subtopicOptions, sourceOptions } = this.state;

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
              <br />
              <TextField
                id="content"
                label="Description of Idea"
                name="content"
                onChange={this.onChange}
                value={this.state.content}
                margin="normal"
                variant="outlined"
                fullWidth
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
      content = <Spinner />;
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

EditNodeForm.defaultProps = {
  private: false
};

EditNodeForm.propTypes = {
  auth: PropTypes.object.isRequired,
  singleNode: PropTypes.object.isRequired,
  private: PropTypes.bool
};

export default connect(
  mapStateToProps,
  { editNode, getAllPublicNodesForSelect, getAllPrivateNodesForSelect }
)(EditNodeForm);
