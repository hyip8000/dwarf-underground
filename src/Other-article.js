import React, { Component } from 'react';

class Footer extends Component {
  constructor(){
    super()
    this.state={
      title: [
        {name: 'orc', title: "Single Orcs in Indianapolis", link: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif"},
        {name: 'mountain', title: "You won't believe what's under this mountain", link: "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg"},
        {name: 'gold', title: "Mine 20% more gold with One Weird Trick", link: "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg"},
        {name: 'hobbit', title: "Surprise for Indiana Hobbits born before 1999", link: "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg"},
      ]
    }
  }

  addTitle(newAdd, index){
    return (
        <div key={index} className="small-6 medium-3 columns other-article">
          <a href="#">
            <img src={newAdd.link} alt={newAdd.name} />
            <p>{newAdd.title}</p>
          </a>  
        </div>
    );
  }

  render() {
    return (
        <div className="small-12 columns other-articles">
          <h2>From around the Realm</h2>
          {this.state.title.map(this.addTitle)}
        </div>
    );
}}

export default Footer;