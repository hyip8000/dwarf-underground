import React, { Component } from 'react';
import './CommentSection.css'

class CommentSection extends Component {
    constructor(props){
      super(props)
     // this.comments = []
      this.addComment = this.addComment.bind(this)
      this.state = {
        comments:''
      }    
  }

    addComment(ev){
        ev.preventDefault()
        const f = ev.target
        
        this.setState({
            comments = f.value
        }, () => console.log(this.state))
       // this.comments.push(f.comments.value)
        
    }

    render() {
    return (
        <div className="comments">
            <textarea
                    value={this.state.comments}
                    onChange={this.addComment}
                    placeholder="Enter Comment Here"
                    >
                </textarea>
                <button className="button">Add Comments</button>
        </div>
        <form id="comments-form">
                <ul className="nobullet" id="comments-list">
                    <li className="comments template">
                        <span className="comments"></span>
                        </li>
                    </ul>
            </form>
    )
}}

export default CommentSection;