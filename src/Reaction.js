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
            </div>
    );
}}

export default Reaction;