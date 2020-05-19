const mongoose = require ('mongoose')
const db = process.env.DB_URL

const connectDB = async ()=>{
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true ,
            useUnifiedTopology: true ,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log("Mongo DB connected...")
    }
    catch(err){
        console.error(err.message)
        //Exit process with failure
        process.exit(1)
    }

}

module.exports = connectDB