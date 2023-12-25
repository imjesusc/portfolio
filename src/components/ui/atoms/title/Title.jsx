import classNames from 'classnames'
import React from 'react'
import './Title.css'

export const Title = ({ tagTitle = '', title = '', className = '', style = '' }) => {
  const Tag = tagTitle || 'h2'
  return (
    <Tag
      className={classNames(Tag === 'h1' ? 'title' : Tag === 'h2' ? 'title--secondary' : 'title--tertiary', className)}
      style={{ style }}
    >
      {title}
    </Tag>
  )
}
