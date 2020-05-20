import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchData} from '../actions/data'


const FilterBar = ()=>{
    const dispatch = useDispatch()
    const {curPage, sort, filter}= useSelector(state=>state.status)
    return(
        <section className="filter-session">
        <div className="filter-session-inner">
            <div className="filter">
                <span> Filter by</span>
                <button onClick={()=>dispatch(fetchData(0, sort, "SCSS"))}> Scss</button>
                <button onClick={()=>dispatch(fetchData(0, sort, "JS"))}> JS</button>
                <button onClick={()=>dispatch(fetchData(0, sort, "API"))}> API</button>
                <button onClick={()=>dispatch(fetchData(0, sort, "react"))}> React js</button>
                <button onClick={()=>dispatch(fetchData(0, sort, "MongoDB"))}> MongoDB </button>
                <button onClick={()=>dispatch(fetchData(0, sort, "none"))}> Clear</button>
            </div>

            <div className="sort">
                <span> Sort by</span>
            <button onClick={()=>dispatch(fetchData(0, "desc", filter))}> Latest</button>
            <button onClick={()=>dispatch(fetchData(0, "asc", filter))}> Earliest</button>
            </div>
          
        </div>

      

    </section>
    )
}

export default FilterBar