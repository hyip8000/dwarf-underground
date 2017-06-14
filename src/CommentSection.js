import React, { Component } from 'react';
import './CommentSection.css'

class CommentSection extends Component {
    constructor(){
      super()
      this.comments = []
      this.addComment = this.addComment.bind(this)
      this.state = {
        active: false,
      }    
  }

    addComment(ev){
        ev.preventDefault()
        const f = ev.target
        
       // this.comments.push(f.comments.value)
        console.log(f.querySelector("#comments"))
    }

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
                            id="commentButton"
                            onClick={this.addComment.bind(this)}
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