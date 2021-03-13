import React from 'react'
import './BlogCard.css'

import heart from '../../../../assets/images/heart.svg';

export const BlogCard = (
  { title, description, onlikeBtnClick, likeCount }
) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="likes">
        <button onClick={onlikeBtnClick}>
          <img src={heart} alt="heart" />
        </button>
        <span className="count">{likeCount}</span>
      </div>
    </div>
  )
}
