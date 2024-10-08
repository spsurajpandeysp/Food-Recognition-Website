const {Food} = require('../model/food.model');

const foodFindByName = async (req,res) => {
    try{
        const {foodName} = req.params;
        console.log(foodName);
        const data =await Food.find({name:foodName});
        console.log(data);
        res.status(200).json(data);
    }
    catch(err){
        res.status(400).message("error in foodFind BY Name")
    }
}
module.exports={foodFindByName}             