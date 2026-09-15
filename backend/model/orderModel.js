const mongoose=require("mongoose")

const {orderSchema}=require("../schemas/orderSchema")

const Order=new mongoose.model("order",orderSchema)

module.exports={Order}