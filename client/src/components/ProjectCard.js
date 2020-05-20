import React from 'react'

const ProjectCard = ()=>{
    return(
        <div className="portfolio-card">
        <div className="portfolio-card-heading">
            <div className="portfolio-card-heading-main">
                <i className="fab fa-css3-alt"></i>
            </div>
            <div className="portfolio-card-heading-links">
                <a href="https://irenekyc.github.io/bg-animated-landing-page/" rel="noopener noreferrer" target="_blank"><i className="fas fa-globe"></i></a>
                <a href="https://github.com/irenekyc/bg-animated-landing-page" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
            </div>
        </div>
        <div className="portfolio-card-title">
            <h1>Animated Page with Pure CSS</h1>
        </div>
        <div className="portoflio-card-image">
            <img src="images/bg-animated.png" alt="" />
        </div>
        <div className="portoflio-card-content">
            <p>This is a simple ladning page with animated background, persudo classNamees for background overlay pattern. 
                </p>
    
            
        </div>
        <div className="portfolio-card-learn-more">
            <button id="open-portfolio-details"> Learn more</button>
        </div>

    </div>

    )
}

export default ProjectCard