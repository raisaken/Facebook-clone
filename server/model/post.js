const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    img:{
        type:String
    },
    desc:{
        type:String,
        max:500
    },
    userId:{
        type:String,
        required:true
    },
    likes:{
        type:Array,
        default:[]
    }
},{ timestamps:true })

module.exports = mongoose.model("post", postSchema)