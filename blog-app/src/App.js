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
        imgSrc: 'path/to/img.jpg',
        publish: false
      },
      {
        id: 2,
        title: 'Lorem Title',
        content: 'Lorem Title Lorem Title Lorem Title Lorem Title Lorem Title Lorem Title ',
        imgSrc: 'path/to/img.jpg',
        publish: true
      },
      {
        id: 3,
        title: 'Lorem Title',
        content: 'Lorem Title Lorem Title Lorem Title Lorem Title Lorem Title Lorem Title ',
        imgSrc: 'path/to/img.jpg',
        publish: false
      },            
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Blog msco.</h1>
        <div className="app-wildcard">
          <Posts postsList={this.state.postsList} />
        </div>
      </div>
    );
  }
}

export default App;
