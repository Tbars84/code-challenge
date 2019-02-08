import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class PostsItem extends Component {
  render() {
    return (
      <div className="wildcard">
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.content}</p>
      </div>
    )
  }
}
PostsItem.propTypes = {
  post: PropTypes.object.isRequired
}
export default PostsItem
