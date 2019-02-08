import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostsItem from './postsItem';

class Posts extends Component{
    render(){
        return this.props.postsList.map((post)=> (
            <PostsItem key={post.id} post={post} />
        ));
    }
}
Posts.propTypes = {
    postsList: PropTypes.array.isRequired
}
export default Posts;