import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import SelectMultiple from "../../../../components/SelectMultiple";
import Spinner from "../Common/Spinner";

import {
  clearDuplicateSourceAndSubtopics,
  updateNodeConnections
} from "../../../Node/NodeActions";

import {
  createPublicUniverse,
  createUniverse
} from "../../../Universe/UniverseActions";

import { getAllUsers, clearUsers } from "../../../User/UserActions";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      users: [],
      usersOptions: null,
      errors: {}
    };

    this.onDuplicatePress = this.onDuplicatePress.bind(this);
    this.updateConnectionPress = this.updateConnectionPress.bind(this);
    this.createPublicUniverse = this.createPublicUniverse.bind(this);
    this.submitUniverseForm = this.submitUniverseForm.bind(this);
    this.onUserSelect = this.onUserSelect.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.getAllUsers();
  }

  componentWillUnmount() {
    this.props.clearUsers();
  }

  componentDidUpdate(prevProps) {
    if (this.props.user.users !== null && prevProps.user.users === null) {
      let options = [];
      this.props.user.users.forEach(user => {
        options.push({
          label: user.name,
          value: user._id
        });
      });
      this.setState({ usersOptions: options });
    }
  }

  submitUniverseForm(e) {
    e.preventDefault();
    let data = {
      title: this.state.title,
      users: this.state.users
    };
    this.props.createUniverse(data);
  }

  onDuplicatePress() {
    this.props.clearDuplicateSourceAndSubtopics();
  }

  updateConnectionPress() {
    this.props.updateNodeConnections();
  }

  createPublicUniverse() {
    this.props.createPublicUniverse();
  }

  onUserSelect(selection) {
    let users = [];
    for (var i in selection) {
      users[i] = selection[i].value;
    }
    this.setState({ users });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let universeForm;
    if (this.state.usersOptions !== null) {
      console.log(this.state.usersOptions);
      universeForm = (
        <Paper>
          <h4>Add a New Universe</h4>
          <form onSubmit={this.submitUniverseForm}>
            <TextField
              id="title"
              label="Title of Universe"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
              margin="normal"
              variant="outlined"
            />
            <SelectMultiple
              label="Users"
              placeholder="Select Users to Join"
              onChange={this.onUserSelect}
              options={this.state.usersOptions}
            />
            <Button type="submit" color="primary">
              Submit
            </Button>
          </form>
        </Paper>
      );
    } else {
      universeForm = <Spinner />;
    }

    return (
      <div>
        <Helmet title="Admin" />

        {universeForm}

        {/* <Paper>
          <Button onClick={this.onDuplicatePress}>Remove Duplicates</Button>
          <Button onClick={this.updateConnectionPress}>
            Update Connections
          </Button>
          <Button onClick={this.createPublicUniverse}>
            Create Public Universe
          </Button>
        </Paper> */}
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    auth: state.auth,
    user: state.user
  };
}

Admin.propTypes = {
  clearDuplicateSourceAndSubtopics: PropTypes.func.isRequired,
  updateNodeConnections: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  {
    clearDuplicateSourceAndSubtopics,
    updateNodeConnections,
    createPublicUniverse,
    createUniverse,
    getAllUsers,
    clearUsers
  }
)(Admin);
