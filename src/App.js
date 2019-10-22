import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BlogCard from "./BlogCard";
import {isArrayEmpty} from "./Utils";

class App extends Component {
  state = {
    showBlogs: true
};

  blogArr = [
    {
      id: 1,
      title: 'Blog Title 1',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
    },
    {
      id: 2,
      title: 'Blog Title 2',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
    },
    {
      id: 3,
      title: 'Blog Title 3',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
    }
  ];

  blogCards = isArrayEmpty(this.blogArr) ? [] : this.blogArr.map((item) => {
    return <BlogCard key={item.id} title={item.title} description={item.description}/>
  });

  onHideBtnClick = () => {
    this.setState((prevState, prevProps) => {
      return {showBlogs: !prevState.showBlogs}
    });
  };

  render() {
    return (
        <div className="App">
          <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
          <br/>
          {this.state.showBlogs ? this.blogCards : null}
        </div>
    )
  }
}

export default App;
