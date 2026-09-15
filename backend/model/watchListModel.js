const mongoose=require("mongoose")

const {watchListSchema}=require("../schemas/watchListSchema")

const watchList=mongoose.model("WatchList",watchListSchema)

module.exports={watchList}