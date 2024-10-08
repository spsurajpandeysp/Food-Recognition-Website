const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    energy:{
        type:String,
    },
    protein:{
        type:String,
    },
    fat:{
        type:String,
    },
    sugars:{
        type:String,
    },
    sodium:{
        type:String,
    },
    carbohydrate:{
        type:String,
    }
})


const Food = mongoose.model("Food",FoodSchema)
module.exports={Food}