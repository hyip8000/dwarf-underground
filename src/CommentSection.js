import React, { Component } from 'react';
import './CommentSection.css'

class CommentSection extends Component {
    constructor(props){
      super(props)
      this.updateComment = this.updateComment.bind(this)
      this.addComment = this.addComment.bind(this)
      this.state = {
        comments:'',
        comment: [],
      }    
  }

    updateComment(ev){
        ev.preventDefault()
       
        this.setState({
            comments: ev.target.value
        }, () => console.log(this.state))      
    }

    addComment(ev){
        const state = {...this.state} //updating every time
        const comment ={
            time: new Date(),
            text: this.state.comments,
        }
        state.comment.push(comment)
        state.comments = ''
        this.setState(state, () => console.log(this.state))

    }

    render() {
    return (
        <div className="comments">
            <textarea
                    value={this.state.comments}
                    onChange={this.updateComment}
                    placeholder="Enter Comment Here"
                    >
                </textarea>
                <button 
                    className="button"
                    onClick={this.addComment}                
                >Add Comments</button>
                {this.state.comment.map((comment, i) => <Comment key={i} comment={comment} />)}
        </div>
       
    )
}}

function Comment (props){
    return(
        <div className="comment">
            <div>{props.comment.text}</div>
        </div>
    )
}

export default CommentSection;