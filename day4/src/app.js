// server create karna
// server ko config karn

const express = require('express')

const app = express() // server created 
app.use(express.json())
const notes = []

app.get('/',(req,res)=>{
    res.send('hello world')
})


//  POST /notes
app.post('/notes',(req,res)=>{
    // console.log(req.body);
    notes.push(req.body)

    console.log(notes);
    
    res.send('note created')
})
// GET /notes
app.get('/notes',(req , res)=>{
    res.send(notes)
})

// DELETE /notes
// param
// delete /notes/2(index) 
app.delete('/notes/:index',(req,res)=>{
    delete notes[req.params.index]
    res.send('note deleted successfully')
    
})
module.exports = app