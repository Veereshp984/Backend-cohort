// require mongooose
const mongoose = require("mongoose")

// create schema
const noteSchema = new mongoose.Schema({
    title : String,
    description : String,
})

//create model
const noteModel = mongoose.model("notes",noteSchema)

module.exports = noteModel