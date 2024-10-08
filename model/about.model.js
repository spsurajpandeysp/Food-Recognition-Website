const mongoose = require("mongoose")

const InnerInnerSchema = new mongoose.Schema({
    heading:{
        type:String,
        required:true
    },
    para:{
        type:String,
        required:true
    }
})


const InnerSchema = new mongoose.Schema({
    main:{
        type:String,
        required:true,
    },
    list:{
        type:[InnerInnerSchema],
        required:true
    }
})



const AboutSchema = new mongoose.Schema({
    aboutUs:{
        type:String,
        require:true
    },
    ourMission:{
        type:String,
        require:true
    },
    outVision:{
        type:String,
        require:true
    },
    joinUs:{
        type:String,
        require:true
    },
    whatDo:{
        type:[InnerSchema]
    }
    
})


const About = mongoose.model('About',AboutSchema)
module.exports={About}