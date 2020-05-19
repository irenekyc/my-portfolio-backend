const mongoose = require('mongoose')

const ProjectSchema  = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    excerpt: {
        type: String,
        required:true,
    },
    fullDescription:{
        type: String,
        required: true
    },
    projectDate :{
        type: Date,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    tools:{
        type: String,
        required:true,
    },
    mainTag:{
        type:String,
        required: true,
    },
    github:{
        type: String,
        required: true,
    },
    projectUrl:{
        type: String,
        required: true
    },
    areaOfImprovement:{
        type:String,
    },
    futureDevelopment:{
        type:String
    }

})

module.exports = Project = mongoose.model("projects", ProjectSchema)