import React from 'react'
import {useDispatch} from 'react-redux'
import {openProject} from '../actions/data'
import {openPortfolio} from '../actions/modal'
import MainTagIcon from './MainTagIcon'


const ProjectCard = ({ data})=>{
    const dispatch = useDispatch()

    const openProjectDetails = ()=>{
        dispatch(openProject(data._id))
        dispatch(openPortfolio())
    }
    return(
        <div className="portfolio-card">
        <div className="portfolio-card-heading">
            <div className="portfolio-card-heading-main">
                <MainTagIcon tag={data.mainTag} />
                
            </div>
            <div className="portfolio-card-heading-links">
                <a href={data.projectUrl} rel="noopener noreferrer" target="_blank"><i className="fas fa-globe"></i></a>
                <a href={data.github} rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
            </div>
        </div>
        <div className="portfolio-card-title">
            <h1>{data.title}</h1>
        </div>
        <div className="portoflio-card-image">
            <img src={`images/${data.image}`} alt="" />
        </div>
        <div className="portoflio-card-content">
            <p>{data.excerpt} 
                </p>
    
            
        </div>
        <div className="portfolio-card-learn-more">
            <button onClick={openProjectDetails} id={data._id}> Learn more</button>
        </div>

    </div>

    )
}

export default ProjectCard