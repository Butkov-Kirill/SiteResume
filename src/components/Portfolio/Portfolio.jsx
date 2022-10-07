import React from 'react'
import TitlePage from '../TitlePage/TitlePage'
import './Portfolio.style.scss'
import '../../assets/images/black_bg2.jpg'
import CardProject from './CardProject/CardProject'
import projects from './ProjectsData'

const Portfolio = () => {
  return (
    <div className="portfolio" id='portfolio'>
        <div className="background-blure"></div>
        <TitlePage pageStyle='dark'>Портфолио</TitlePage>
        <div className="wrapper">
            <div className="projects">
                {projects.map((project, index)=>
                    <CardProject project={project} key={`card_project_index_${index}`}></CardProject>
                )}
            </div>
        </div>
    </div>
  )
}

export default Portfolio
