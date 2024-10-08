const {About} = require('../model/about.model');


const getAboutData = async(req,res) =>{
    const data = About.find({});
    try{
        res.status(200).json(about)
    }
    catch(err){
        res.status(400).send("error");
    }
}


module.exports={getAboutData}