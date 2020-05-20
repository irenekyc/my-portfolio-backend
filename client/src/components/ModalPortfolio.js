import React from 'react'

const ModalPortfolio =()=>{
    return(

        <div className="portfolio-modal">
            <div className="portfolio-details">
                <div id="close-portfolio"> <span id="close-portfolio-btn">X </span></div>
                <div className="portfolio-details-title">
                    <h1>JS Form Validation</h1>
                </div>
                <div className="portfolio-details-image">
                    <img src="images/profile-thumbnail-2.jpg" alt="Irene K JS developer" />
                </div>
                <div className="portfolio-details-descriptions">
                    <p>This is a simple HTML form validation using javascript to check validity between definted pattern (regular expression) and user input. 
                        Validation includes email format, strict password (min length 8 characters with at least one uppercase and one special character)</p>
                </div>
                <div className="portfolio-details-tools">
                    <h4> Tools & Libraries </h4>
                    <li>Vanillia Javascript</li>
                    <li> HTML5</li>
                    <li> CSS </li>
                    <li> Regular Expression</li>
                </div>
                <div className="links">
                <a href="https://irenekyc.github.io/form-validation-advanced/" rel="noopener noreferrer" target="_blank">  <i className="fas fa-globe"></i> - Live Site</a>
                <a href="https://github.com/irenekyc/form-validation-advanced/" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i> - Code</a>
            </div>
            </div>

        </div>
    )
}

export default ModalPortfolio