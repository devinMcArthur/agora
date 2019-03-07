import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { logoutUser } from "../../../Auth/AuthActions";

// Import Style
import styles from "./Header.css";

const matStyles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    let { classes } = this.props,
      buttons;

    if (this.props.auth.isAuthenticated) {
      buttons = (
        <div>
          <Button color="inherit">
            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </Button>
          <Button color="inherit" onClick={this.onLogoutClick.bind(this)}>
            Logout
          </Button>
        </div>
      );
    } else {
      buttons = (
        <div>
          <Button color="inherit">
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Signup
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Login
            </Link>
          </Button>
        </div>
      );
    }

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Agora
              </Link>
            </Typography>
            {buttons}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.contextTypes = {
  router: PropTypes.object
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { logoutUser }
)(withStyles(matStyles)(Header));
