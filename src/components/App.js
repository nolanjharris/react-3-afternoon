import React, { Component } from 'react';
import Post from './Post/Post';
import axios from 'axios';

import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/api/posts').then(response => {
      this.setState({ posts: response.data })
    }).catch(error => {
      console.log(error);
    })
  }

  updatePost(postId, newText) {
    axios.put(`https://practiceapi.devmountain.com/api/posts?id=${postId}`, { newText })
      .then(response => {
        this.setState({ posts: response.data }).catch(error => console.log(error));
      })
  }

  deletePost() {

  }

  createPost() {

  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />
          {this.state.posts.map(e => {

            return <Post
              key={e.id}
              text={e.text}
              date={e.date}
              id={e.id}
              updatePostFn={this.updatePost} />

          })}
        </section>
      </div>
    );
  }
}

export default App;
