import React from 'react'

const NavBar = ()=>{
    return(
            <nav>
                <h1> Irene K. </h1>
                <div className="btn-hamburger-outer" >
                    <label for="toggle-menu" className="btn-hamburger">
                        <input type="checkbox" value="open" id="toggle-menu" />
                        <div className="btn-line"></div>
                        <div className="btn-line"></div>
                        <div className="btn-line"></div>
                    </label>
                </div>
            </nav>

)
}


export default NavBar