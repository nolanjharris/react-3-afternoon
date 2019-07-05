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
    this.searchPosts = this.searchPosts.bind(this);
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
        this.setState({ posts: response.data })
      })
  }

  deletePost(postId) {
    axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${postId}`).then(response => {
      this.setState({ posts: response.data })
    })
  }

  createPost(text) {
    axios.post(`https://practiceapi.devmountain.com/api/posts`, { text }).then(response => {
      this.setState({ posts: response.data })
    })
  }

  searchPosts(input) {
    let uriInput = encodeURI(input);
    axios.get(`https://practiceapi.devmountain.com/api/posts/filter?text=${uriInput}`).then(response => {
      this.setState({ posts: response.data })
    })
  }

  render() {
    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose createPostFn={this.createPost} />
          {this.state.posts.map(e => {

            return <Post
              key={e.id}
              text={e.text}
              date={e.date}
              id={e.id}
              updatePostFn={this.updatePost}
              deletePostFn={this.deletePost} />

          })}
        </section>
      </div>
    );
  }
}

export default App;
