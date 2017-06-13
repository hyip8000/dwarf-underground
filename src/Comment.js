import React, { Component } from 'react';
import Share from './Share.js'

class Comment extends Component {
  constructor(){
      super()
      this.handleClick = this.handleClick.bind(this)
      this.state = {
        active: false,
      }    
      
  }

  handleClick(ev){
    ev.preventDefault()
    const currentState = this.state.active
    if (currentState){
        //hide
        document.getElementById("comments").style.display = 'none'
        this.setState({active: !currentState})
    }else{
        //show
        document.getElementById("comments").style.display = 'block'
        this.setState({active: !currentState})
    } 
  }

  render() {
    return (
        <div>
        <a className="article-link" href="#" onClick={this.handleClick}>
                <i className="fa fa-comments-o"></i>
                <span className="article-link-text">Comments</span>
            </a>
            <Share />
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
                </div>
    );
}}

export default Comment;