const express = require('express')
const router = express.Router()
const Project = require('../../models/Projects')

//@route GET api/projects
//@desc read all projects
//@access PUBLIC
router.get('/', async (req, res)=>{
    const allProjects = await Project.find()
    try{
        res.json(allProjects)
    }
    catch(error){
        res.send(error)
    }
    
})
//@route GET api/projects/:id
//@desc read project by id
//@access PUBLIC

router.get('/:id', async (req, res)=>{
    const projectId = req.params.id
    const project = await Project.findById(projectId)
    try{
        res.json(project)
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