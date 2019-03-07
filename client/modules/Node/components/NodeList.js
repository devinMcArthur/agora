import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import NodePreview from "./NodePreview";

class RootNodeList extends Component {
  render() {
    let nodeArray = [],
      subtopicToggle;
    this.props.nodes.length > 1
      ? (subtopicToggle = false)
      : (subtopicToggle = true);
    if (this.props.nodes.length > 0) {
      this.props.nodes.forEach(node => {
        nodeArray.push(
          <div key={node._id}>
            <NodePreview
              onNavigation={this.props.onNavigation}
              singleNode={node}
              subtopicToggle={subtopicToggle}
            />
          </div>
        );
      });
    }
    return <div>{nodeArray}</div>;
  }
}

// Retrieve data from store as props
const mapStateToProps = state => ({});

RootNodeList.propTypes = {
  nodes: PropTypes.array.isRequired,
  onNavigation: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  {}
)(RootNodeList);
