import React, { Component } from 'react';
import Posts from './posts.component/posts'
import './App.css';
// import  
class App extends Component {
  state = {
    postsList: [
      {
        id: 1,
        title: 'Lorem Title',
        content: 'Lorem Title Lorem Title Lorem Title Lorem Title Lorem Title Lorem Title ',
        imgSrc: 'path/to/img.jpg'
      },
      {
        id: 2,
        title: 'Lorem Title',
        content: 'Lorem Title Lorem Title Lorem Title Lorem Title Lorem Title Lorem Title ',
        imgSrc: 'path/to/img.jpg'
      },
      {
        id: 3,
        title: 'Lorem Title',
        content: 'Lorem Title Lorem Title Lorem Title Lorem Title Lorem Title Lorem Title ',
        imgSrc: 'path/to/img.jpg'
      },            
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Blog msco.</h1>
        <Posts postsList={this.state.postsList} />
      </div>
    );
  }
}

export default App;
