import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ShareIcon from "@material-ui/icons/Share";
import Popover from "@material-ui/core/Popover";

class ShareButton extends React.Component {
  constructor() {
    super();

    this.state = {
      anchorEl: null
    };

    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  copyToClipboard = e => {
    var textField = document.createElement("textarea");
    textField.innerText = this.props.link;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    this.handleClick(e);
  };

  handleClick = e => {
    this.setState({ anchorEl: e.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        {/* Logical shortcut for only displaying the 
            button if the copy command exists */
        document.queryCommandSupported("copy") && (
          <div>
            <ShareIcon onClick={this.copyToClipboard} />
          </div>
        )}
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          styles={{ margin: "1em" }}
        >
          Copied to Clipboard!
        </Popover>
      </div>
    );
  }
}

ShareButton.propTypes = {
  link: PropTypes.string.isRequired
};

export default connect(
  null,
  {}
)(ShareButton);
