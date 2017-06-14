import React, { Component } from 'react';
import './CommentSection.css'

class CommentSection extends Component {
    render() {
    return (
        <form id="comments-form">
                <textarea
                    type="text"
                    rows="4"
                    cols="50"
                    id="comments"
                    className="input-group-field"
                    name="comments"
                    placeholder="Write a comment" 
                    style={{display: 'none'}}
                    >
                    </textarea>
                    <div className="input-group-button">
                        <button 
                            className="success button"
                            type="submit"
                            >Add Comments
                        </button>
                    </div>
                    <ul className="nobullet" id="comments-list">
                        <li className="comments template">
                            <span className="comments"></span>
                            </li>
                        </ul>
                    </form>
    )
}}

export default CommentSection;