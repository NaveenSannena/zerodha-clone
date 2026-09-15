
const mongoose=require("mongoose")


const holdingSchema=new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    avg:{
        type:Number
    },
    price:{
        type:Number,
        required:true
    },
    net:{
        type:String,
    },
    day:{
        type:String
    }


})

module.exports={holdingSchema}