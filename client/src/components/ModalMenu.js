import React from 'react'

const ModalMenu = ()=>{
    return(
        <div className="modal-menu">
        <div className="modal-menu-about">
            <div className="modal-menu-about-image">
                <img src="images/profile-thumbnail-2.jpg" alt="Irene K web developer"/>
            </div>
            <h1> Irene K.</h1>
            <p> Web Developer</p>

        </div>
        <div className="modal-menu-contact">
            <ul>
                <li><a href="#">My Website</a></li>
                <li><a href="#"> Github</a></li>
                <li><a href="#"> Resume</a></li>
                <li><a href="#"> LinkedIn </a></li>
            </ul>
        </div>
        </div>
    )
}

export default ModalMenu