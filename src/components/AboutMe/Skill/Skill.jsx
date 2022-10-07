import React, {useEffect, useState} from 'react'
import './Skill.style.scss'

const Skill = ({children, ...props}) => {

  return (
    <div className="skill">
        <div className="circle" style={{'--c':props.SkillInfo.color, '--p':props.SkillInfo.procentages+'%'}}>
            <h1>{`${props.SkillInfo.procentages}%`}</h1>
        </div>
        <div className="info">
            <h1 className="name-skill">{props.SkillInfo.name}</h1>
            <p className="description-skill">{props.SkillInfo.description}</p>
        </div>
    </div>
  )
}

export default Skill
