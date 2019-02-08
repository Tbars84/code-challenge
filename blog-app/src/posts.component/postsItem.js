import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class PostsItem extends Component {
  isPublish = () => {
    return {
      padding : '10px',
      margin : '1% 0%',
      maxWidth : '460px',
      border : this.props.post.publish ? '1px solid lime' : '1px solid #b5b5b5',
      opacity : this.props.post.publish ? '1' : '0.4'
    }
  } 
  render() {
    const { title , content } = this.props.post
    return (
      <div className="wildcard" style={this.isPublish()} >
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    )
  }
}
PostsItem.propTypes = {
  post: PropTypes.object.isRequired
}
export default PostsItem
