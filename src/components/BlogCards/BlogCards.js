import React from 'react';
import './BlogCards.css';

import { posts } from '../../shared/projectData'
import { isArrayEmpty } from '../../shared/projectLogic';
import { Card } from './components/Card/Card';

export class BlogCards extends React.Component {

  state = {
    localPosts: [...posts],
    postsVisible: true
  }

  like = pos => {

    const obj = {...this.state.localPosts[pos]}
    obj.likes++;

    this.setState((state) => {
      const temp = [...state.localPosts];
      temp[pos].likes++;

      return {
        localPosts: [temp[pos], ...state.localPosts]
      }
    })
    
  }

  blogCards = isArrayEmpty(posts) ? 'Array is empty' : this.state.localPosts.map((item,pos) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        description={item.description}
        likes={item.likes}
        like={()=>this.like(pos)}
      />
    )
  })

  getAmountOfPosts = arr => {
    console.log(`Количество постов: ${arr.length}`)
  }

  dataIsComing = false;

  onTogglePosts = () => {
    this.setState((state, props) => ({
      postsVisible: !state.postsVisible
    }))
  }

  render() {

    if (this.dataIsComing) return <h1>Data is coming...</h1>

    return (
      <>
        <h1>Simple Blog</h1>

        <button onClick={this.onTogglePosts} className="blackBtn">
          {this.state.postsVisible ? 'Hide posts -' : 'Show posts +'}
        </button>
  
        { 
          this.state.postsVisible ?
            <>
              <div className="posts">
                {this.blogCards}
              </div>
              
              <div className="count">
                <button className="blackBtn" onClick={()=>this.getAmountOfPosts(posts)}>Get amount of posts</button>
              </div>
            </>
          : null
        }
      </>
    )
  }
}