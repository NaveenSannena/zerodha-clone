const mongoose=require("mongoose")
const Schema=new mongoose
const watchListSchema= Schema ({
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        percent:{
            type:String,
            required:true
        },
        isDown:{
            type:Boolean,
            required:true
        }

})

module.exports={watchListSchema}