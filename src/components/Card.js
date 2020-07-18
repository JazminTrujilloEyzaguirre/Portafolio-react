import React from 'react'
import '../css/components/Card.css'

export const Card = ({ title, desc, url }) => {
  return (
    <a href={url} target="_blank">
      <div className="card">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </a>
  )
}
