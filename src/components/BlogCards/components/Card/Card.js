import React from 'react'
import './Card.css'

import heart from '../../../../assets/images/heart.svg';

export class Card extends React.Component {

  componentDidUpdate() {
    console.log('Updates')
  }

  render() {

    const {title, description, like, likes} = this.props

    return (
      <div className="post">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="likes">
          <button onClick={like}>
            <img src={heart} alt="heart" />
          </button>
          <span className="count">{likes}</span>
        </div>
      </div>
    )
  }
}