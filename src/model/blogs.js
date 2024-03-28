import mongoose from "mongoose";


const schema = mongoose.Schema;

const blogsSchema=new schema({
    title:{type:String,required: true },
    description:{type: String ,required: true },
    image:{type:String},
    url: {type: String,required: true } ,
    updated: { type: Date, default: Date.now },
    isPublished: {type: Boolean, default: false},
    createdAt:{ type: Date, default: Date.now },
});


export const blogsModel = mongoose.model('Blogs', blogsSchema)