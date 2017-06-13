import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
        <a className="article-link" href="#">
                <i className="fa fa-comments-o"></i>
                <span className="article-link-text">Comments</span>
            </a>
    );
}}

export default Comment;