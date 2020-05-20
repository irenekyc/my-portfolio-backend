import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ProjectCard from './ProjectCard'
import {fetchData} from '../actions/data'

const PortfolioMain = ({open})=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchData())
    }, [])
    const projects = useSelector(state=> state.data.all)
    return(
        <section className="portfolio-container">
            {projects !== null && projects.map(p=>{
                return <ProjectCard key={p._id} data={p} click={(e)=>open(e)}/>
            })}

        </section>

    )
}

export default PortfolioMain