const express = require('express')
const router = express.Router()
const Project = require('../../models/Projects')

//@route GET api/projects
//@desc read all projects
//@access PUBLIC
// router.get('/', async (req, res)=>{
//     const allProjects = await Project.find().sort({projectDate: "desc"})
//     console.log(allProjects)
//     try{
//         res.json(allProjects)
//     }
//     catch(error){
//         res.send(error)
//     }
    
// })
//@route GET api/projects/:id
//@desc read project by id
//@access PUBLIC

router.get('/projectId=:id', async (req, res)=>{
    const projectId = req.params.id
    const project = await Project.findById(projectId)
    try{
        res.json(project)
    }
    catch(error){
        res.send(error)
    }
    
})

//@route GET api/projects/filters (e.g scss / css)
//@desc read project by filter categories (maintag)
//@access PUBLIC

router.get('/filter/:filter', async (req, res)=>{
    const filter = req.params.filter
    console.log(filter)
    const projects = await Project.find({mainTag:filter}).sort({projectDate: "desc"})
    try{
        res.json(projects)
    }
    catch(error){
        res.send(error)
    }
    
})

//@route GET api/projects/filters (e.g scss / css)
//@desc read project by filter categories (maintag)
//@access PUBLIC

router.get('/sort=:sort&filter=:filter&page=:page', async (req, res)=>{
    const filter = req.params.filter
    const sort = req.params.sort
    const page = parseInt(req.params.page)*9 
    let projects, numProjects
    if(filter === "none"){
        numProjects = await Project.countDocuments()
        projects = await Project.find().limit(9).skip(page).sort({projectDate: sort})
    } else {
        numProjects = await Project.countDocuments({tools: { $regex: filter , $options: "i"}})
        projects = await Project.find({tools: { $regex: filter , $options: "i"}}).limit(9).skip(page).sort({projectDate: sort})
    }
   
    try{
        res.json({data:projects, pages: Math.ceil(numProjects / 9)})
    }
    catch(error){
        res.send(error)
    } 
})

//@route POST api/projects/create
//@desc create new project
//@access PRIVATE
router.post('/create', async (req, res)=>{
    const newProject = new Project(req.body)
    await newProject.save()
    try{
        res.json(newProject)
    } catch(err){
        res.send(err)
    }
    
})



module.exports = router;