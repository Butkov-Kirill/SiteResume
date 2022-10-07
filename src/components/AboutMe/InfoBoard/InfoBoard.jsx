import React from 'react'
import './InfoBoard.style.scss'

const InfoBoard = ({children, ...props}) => {
  return (
    <div className="info-board">
        <h1 className="title">{props.title}</h1>
        <div className="text">{children}</div>
    </div>
  )
}

export default InfoBoard
