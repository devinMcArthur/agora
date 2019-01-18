import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import {
  editNode,
  getAllPublicNodesForSelect,
  getAllPrivateNodesForSelect,
  getSources,
  getSubtopics,
  clearSources,
  clearSubtopics
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
      sources: null,
      subtopics: null,
      sourceOptions: [],
      subtopicOptions: [],
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSourceSelect = this.onSourceSelect.bind(this);
    this.onSubtopicSelect = this.onSubtopicSelect.bind(this);
    this.createDefaultSubtopicConnections = this.createDefaultSubtopicConnections.bind(
      this
    );
    this.createDefaultSourceConnections = this.createDefaultSourceConnections.bind(
      this
    );
  }

  componentDidMount() {
    console.log("mount");
    if (this.props.node.formNodes === null && !this.props.node.loading) {
      if (this.props.private) {
        this.props.getAllPrivateNodesForSelect(
          this.props.universe.universe._id
        );
      } else {
        this.props.getAllPublicNodesForSelect();
      }
      if (this.state.node.sourceConnections.length > 0) {
        this.props.getSources(this.state.node._id);
      }
      if (this.state.node.subtopicConnections.length > 0) {
        this.props.getSubtopics(this.state.node._id);
      }
    } else if (this.props.node.formNodes !== null) {
      if (this.state.node.sourceConnections.length > 0) {
        this.props.getSources(this.state.node._id);
      }
      if (this.state.node.subtopicConnections.length > 0) {
        this.props.getSubtopics(this.state.node._id);
      }
    }
  }

  componentDidUpdate(prevProps) {
    // Place source and subtopic connections into state
    if (this.props.node.subtopics !== null && this.state.subtopics === null) {
      this.setState({ subtopics: this.props.node.subtopics }, () => {
        this.createDefaultSubtopicConnections();
      });
      this.props.clearSubtopics();
    }
    if (this.props.node.sources !== null && this.state.sources === null) {
      this.setState({ sources: this.props.node.sources }, () => {
        this.createDefaultSourceConnections();
      });
      this.props.clearSources();
    }
  }

  createDefaultSubtopicConnections() {
    let { subtopicOptions } = this.state;
    for (var i in this.props.node.formNodes) {
      // Find existing subtopic connections
      if (this.state.subtopics) {
        this.state.subtopics.forEach(connectionObject => {
          if (
            connectionObject.subtopic._id.toString() ===
            this.props.node.formNodes[i].value
          ) {
            subtopicOptions.push(this.props.node.formNodes[i]);
          }
        });
      }
    }
    this.setState({ subtopicOptions });
  }

  createDefaultSourceConnections() {
    let { sourceOptions } = this.state;
    for (var i in this.props.node.formNodes) {
      // Find existing source connections
      if (this.state.sources) {
        this.state.sources.forEach(connectionObject => {
          if (
            connectionObject.source._id.toString() ===
            this.props.node.formNodes[i].value
          ) {
            sourceOptions.push(this.props.node.formNodes[i]);
          }
        });
      }
    }
    this.setState({ sourceOptions });
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
    let content;
    console.log(this.state);
    if (
      this.state.node !== null &&
      this.props.node.formNodes !== null &&
      ((this.state.node.sourceConnections &&
        this.state.sourceOptions.length > 0) ||
        this.state.node.sourceConnections.length === 0) &&
      ((this.state.node.subtopicConnections &&
        this.state.subtopicOptions.length > 0) ||
        this.state.node.subtopicConnections.length === 0)
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
  {
    editNode,
    getAllPublicNodesForSelect,
    getAllPrivateNodesForSelect,
    getSources,
    getSubtopics,
    clearSources,
    clearSubtopics
  }
)(EditNodeForm);
