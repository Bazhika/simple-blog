import React from 'react';
import './BlogPage.css';

import { blogPosts } from '../../shared/projectData'
import { isArrayEmpty } from '../../shared/projectLogic';
import { BlogCard } from './components/BlogCard/BlogCard';

console.log(new React.Component())

export class BlogPage extends React.Component {

  state = {
    blogArr: [...blogPosts],
    blogCardsVisible: true,
  }

  onlikeBtnClick = pos => {

    const updatedBlogList = this.state.blogArr;
    updatedBlogList[pos].likeCount++;

    this.setState({
      blogArr: updatedBlogList
    })
    
  }

  onToggleBlogCards = () => {
    this.setState((state, props) => ({
      blogCardsVisible: !state.blogCardsVisible
    }))
  }

  componentDidMount() {
    console.log('mount')
  }

  componentDidUpdate() {
    console.log('update')
  }

  componentWillUnmount() {
    console.log('Unmounted')
  }

  render() {

    console.log('render')

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

        <button onClick={this.onToggleBlogCards} className="blackBtn">
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
      </>
    )
  }
}