const mongoose=require("mongoose")

const {positionSchema}=require("../schemas/positionSchema")

const Position=mongoose.model("Position",positionSchema)

module.exports={Position}