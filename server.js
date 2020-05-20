const express = require('express')
const connectDB = require ('./config/mongodb')
const path = require ('path')

connectDB()

const app = express()
const PORT = process.env.PORT;
app.use(express.json( {extended: false}))

app.use( express.static( path.join( __dirname, 'client', 'public' ) ) )
app.use('/api/projects', require('./routes/api/projects'))


app.get('/', (req, res)=>{
    res.send('API is up running')
})

app.listen(PORT, ()=>{
    console.log(`server start on ${PORT}`)
})