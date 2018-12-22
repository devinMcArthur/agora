import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { FormattedMessage } from "react-intl";
import { browserHistory } from "react-router";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { registerUser } from "../AuthActions";

// Import Style
// import styles from "../../components/PostListItem/PostListItem.css";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      browserHistory.push("/");
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    };
    this.props.registerUser(newUser, browserHistory);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onToggle(e) {
    this.setState({ [e.target.name]: e.target.checked });
  }

  render() {
    return (
      <div>
        <Helmet title="Login" />
        <Paper>
          <Typography variant="h3">Signup</Typography>
          <form
            className={styles.container}
            noValidate
            autoComplete="off"
            onSubmit={this.onSubmit}
          >
            <TextField
              id="name"
              label="Name"
              name="name"
              className={styles.textField}
              value={this.state.name}
              onChange={this.onChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="email"
              label="Email"
              name="email"
              className={styles.textField}
              value={this.state.email}
              onChange={this.onChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              type="password"
              id="password"
              label="Password"
              name="password"
              className={styles.textField}
              value={this.state.password}
              onChange={this.onChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              type="password"
              id="passwordConfirm"
              label="Password"
              name="passwordConfirm"
              className={styles.textField}
              value={this.state.passwordConfirm}
              onChange={this.onChange}
              margin="normal"
              variant="outlined"
            />
            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </Paper>
      </div>
    );
  }
}

// Retrieve data from store as props
const mapStateToProps = state => ({
  auth: state.auth
});

SignupPage.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { registerUser }
)(SignupPage);
