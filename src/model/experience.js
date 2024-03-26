import mongoose from "mongoose";


const schema = mongoose.Schema;

const experienceSchema=new schema({
    institutionName:{type:String,required: true },
    position:{type:String,required: true },
    location:{type:String},
    description:{type:String,required: true },
    startDate:{type:Date, required: true},
    endDate:{type:Date},
    createdAt:{ type: Date, default: Date.now },

});


export const experienceModel = mongoose.model('Experience', experienceSchema)