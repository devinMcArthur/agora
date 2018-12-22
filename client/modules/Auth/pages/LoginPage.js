import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { browserHistory } from "react-router";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { loginUser } from "../AuthActions";

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

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      browserHistory.push("/");
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
      rememberMe: this.state.rememberMe
    };

    this.props.loginUser(userData);
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
          <Typography variant="h3">Login</Typography>
          <form
            className={styles.container}
            noValidate
            onSubmit={this.onSubmit}
          >
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
            <FormControlLabel
              control={
                <Switch
                  name="rememberMe"
                  checked={this.state.rememberMe}
                  onChange={this.onToggle}
                  value="rememberMe"
                />
              }
              label="Remember Me"
            />
            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
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

LoginPage.propTypes = {};

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginPage);
