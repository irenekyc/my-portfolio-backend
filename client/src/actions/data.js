import axios from 'axios'

export const fetchData =  ()=> async dispatch=>{
    const projects = await axios.get('/api/projects/')
    console.log("fetching")
    dispatch({
        type: "ALLDATA",
        payload: projects.data
    })
}

export const openProject =  (id)=> async dispatch=>{
    const project = await axios.get(`/api/projects/${id}`)

    dispatch({
        type: "PROJECTDETAILS",
        payload: project.data
    })
}