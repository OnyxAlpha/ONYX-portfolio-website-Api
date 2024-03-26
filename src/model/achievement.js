import mongoose from "mongoose";

const schema = mongoose.Schema;

const achievementSchema=new schema({
    title:{type:String,required: true },
    description:{type: String ,required: true },
    image:{type:String},
    certificate:{type: String},
    date: { type: Date },
    createdAt:{ type: Date, default: Date.now },
});


export const achievementModel = mongoose.model('Achievement', achievementSchema)