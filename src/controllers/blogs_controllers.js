import { blogsModel } from "../model/blogs.js"

export const addBlogs = async (req, res)=>{
      
    try {
        const data = req.body
        const addBlogs = await blogsModel.create({
            ...req.body,
            image: req.file.filename
        })
        res.status(201).json(addBlogs);

    } catch (error) {
        console.log(error)  
    }
}


export const getAllBlogs = async (req, res)=>{

        try {
             const getAllBlogs = await blogsModel.find({})
             res.json({blogs: getAllBlogs})
        } catch (error) {
            console.log(error)
        }
}

export const getOneBlog = async (req, res)=>{

        try {
             
             const getOneBlog = await blogsModel.findById(req.params.id)
             res.json( getOneBlog)
        } catch (error) {
            console.log(error)
        }
}

export const upgradeBlog = async (req, res)=>{

         try {
            const upgradeBlog = await blogsModel.findByIdAndUpdate(req.params.id)
            res.json( upgradeBlog)
         } catch (error) {
            console.log(error)
         }
}


export const deleteOneBlog = async (req, res)=>{

        try {
            const id = req.body._id
             const deleteOneBlog = await blogsModel.findByIdAndDelete({ _id: id})
             res.json( deleteOneBlog)
        } catch (error) {
            console.log(error)
        }
}

