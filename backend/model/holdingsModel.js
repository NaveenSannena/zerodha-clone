const mongoose=require("mongoose")

const {holdingSchema} =require("../schemas/holdingSchema")

const Holding= mongoose.model("Holding",holdingSchema)

module.exports={Holding}