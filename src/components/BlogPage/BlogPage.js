import React from 'react';
import './BlogPage.css';

import { blogPosts } from '../../shared/projectData'
import { isArrayEmpty } from '../../shared/projectLogic';
import { BlogCard } from './components/BlogCard/BlogCard';
import { AddNewPostForm } from './components/AddNewPostForm/AddNewPostForm';

export class BlogPage extends React.Component {

  blogArrfromLocal = localStorage['blogPosts'] ? JSON.parse(localStorage['blogPosts']) : null

  state = {
    blogArr: this.blogArrfromLocal || [...blogPosts],
    blogCardsVisible: true,
    isFormVisible: false
  }

  onlikeBtnClick = pos => {

    const updatedBlogList = this.state.blogArr;
    updatedBlogList[pos].likeCount++;

    this.setState({
      blogArr: updatedBlogList
    })

    localStorage.setItem('blogPosts', JSON.stringify(updatedBlogList))
    
  }

  handleBlogCardsShow = () => {
    this.setState((state, props) => ({
      blogCardsVisible: !state.blogCardsVisible
    }))
  }

  handleFormShow = () => {
    this.setState({
      isFormVisible: true
    })
  }

  handleFormClose = () => {
    this.setState({
      isFormVisible: false
    })
  }

  handleFormCloseOnEscape = (e) => {
    if (this.state.isFormVisible && e.key === 'Escape') {
      this.handleFormClose()
    }
  }

  addNewPost = (obj) => {

    const updatedBlogList = this.state.blogArr;
    updatedBlogList.push(obj)

    this.setState({
      blogArr: updatedBlogList
    })
    
    localStorage.setItem('blogPosts', JSON.stringify(updatedBlogList))
    this.handleFormClose()
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleFormCloseOnEscape)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleFormCloseOnEscape)
  }

  render() {
    const blogCards = isArrayEmpty(this.state.blogArr) ? 'Array is empty' : this.state.blogArr.map((item,pos) => {
      return (
        <BlogCard
          key={item.id}
          title={item.title}
          description={item.description}
          likeCount={item.likeCount}
          onlikeBtnClick={()=>this.onlikeBtnClick(pos)}
        />
      )
    })

    return (
      <>
        <h1>Simple Blog</h1>

        <div className="addPostBlock">
          <button onClick={this.handleFormShow} className="blackBtn">Add new post</button>
        </div>

        <button onClick={this.handleBlogCardsShow} className="blackBtn">
          {this.state.blogCardsVisible ? 'Hide posts -' : 'Show posts +'}
        </button>
  
        { 
          this.state.blogCardsVisible ?
            <>
              <div className="posts">
                {blogCards}
              </div>
            </>
          : null
        }

        {
          this.state.isFormVisible
          ? 
          <>
            <AddNewPostForm
              handleFormClose={this.handleFormClose}
              addNewPost={this.addNewPost}
            />
            <div onClick={this.handleFormClose} className='overlay'></div>
          </>
          : null
        }
      </>
    )
  }
}