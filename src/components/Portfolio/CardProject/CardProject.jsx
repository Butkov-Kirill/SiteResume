import React from 'react'
import './CardProject.style.scss'
import goToHref from '../../../GoToHref'


const CardProject = ({children, ...props}) => {
  return (
    <div className="card-project">
        <div className="header-card">
            <img src={props.project.icon} alt="icon" />
            <h1 className="name">{props.project.name}</h1>
        </div>
        <p className="text">{props.project.description}</p>
        <button onClick={()=>goToHref(props.project.href)}>Перейти</button>
    </div>
  )
}

export default CardProject
