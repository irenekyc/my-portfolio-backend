import React from 'react'

const Featured = ()=>{
    return(
        <section className="featured-session">
            <div className="featured-inner">
                <div className="featured-heading">
                    <i className="fab fa-react"></i>
                    <i className="fab fa-node-js"></i>
                    
                </div>
                <div className="featured-title">
                    <h5> <span>FEATURED </span></h5>
                    <h1>MERN project - This portfolio</h1>
                </div>
                
                <div className="featured-image">
                    <img src="images/01-JS Quiz.png" alt="portfolio" />
                </div>
                <div className="featured-content">
                    <h4> MERN stands for MongoDB, Express, React and Node js.  </h4>
                    <p> Firstly, I code the front end staic site with SCSS, it is completely responsive. Once the static website is ready, 
                        I start developing the backend. I use Express for firing up the backend server and routing, mongoose to design and set up the database for projects.
                        Then I set up the backend api fetching route to fetch corresponding data. Last but not least, I use react to combine front end and backend server.
                    </p>
                    <p> Next step, the admin login panel and updating projects form are under construction. This will apply CRUD method</p>
                </div>
            </div>
        </section>

    )
}
export default Featured