import React, { Component } from 'react';
import './Reaction.css'
import Comments from './Comment.js'
import Share from './Share.js'

class Reaction extends Component {
  render() {
    return (
        <div className="article-links">
            <Comments />
            <Share />
            <div className="input-group">
                <textarea
                    type="text"
                    rows="4"
                    cols="50"
                    className="input-group-field"
                    name="comments"
                    placeholder="Write a comment" 
                    >
                    </textarea>
                </div>
            </div>
    );
}}

export default Reaction;