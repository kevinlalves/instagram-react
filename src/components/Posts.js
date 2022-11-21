import "./App.css";
import { imagePath } from "./App";
import Post from "./Post";
import React from "react";

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        { id: 0, saved: false, liked: false, numLikes: 101523, text: "meu textão", image: imagePath("cute-cat"), userId: 0 },
        { id: 1, saved: false, liked: false, numLikes: 823543, text: "influencer text.. tabum", image: imagePath("dog"), userId: 8 },
        { id: 2, saved: false, liked: false, numLikes: 382, text: "also a influencer...", image: imagePath("phone-cat"), userId: 1 }
      ]
    }
  }
  toggleProp(id, type) {
    let likesDiff = 1;
    const newState = Object.assign({}, this.state);
    if (type === "liked") {
      if (this.state.posts[id][type]) {
        likesDiff *= -1;
      }
      newState.posts[id].numLikes += likesDiff;
    }
    newState.posts[id][type] = !this.state.posts[id][type];
    this.setState(newState);
  }
  render() {
    return (
      <ul className="posts">
        {this.state.posts.map(post => <Post
          onClick={type => this.toggleProp(post.id, type)}
          key={post.id}
          post={post} />)}
      </ul>
    );
  }
}
