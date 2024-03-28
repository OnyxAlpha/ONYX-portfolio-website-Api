import { blogsModel } from "../model/blogs.js"

export const addBlogs = async (req, res,next)=>{
      
    try {
        const data = req.body
        const addBlogs = await blogsModel.create({
            ...req.body,
            image: req.file.filename
        })
        res.status(201).json(addBlogs);

    } catch (error) {
        next(error); 
    }
}


export const getAllBlogs = async (req, res)=>{

        try {
             const getAllBlogs = await blogsModel.find({})
             res.status(201).json({blogs: getAllBlogs})
        } catch (error) {
            console.log(error)
        }
}

export const getOneBlog = async (req, res)=>{

             const getOneBlog = await blogsModel.findById(req.params.id);
            //return 404 if blog not found
      if (getOneBlog === null) {
     return res.status(404).json({
      message: `Blog with objectId: ${req.params.id} Not found!`,
    });
  }
  
  res.json(getOneBlog);

        
}

export const upgradeBlog = async (req, res)=>{

         try {
            const upgradeBlog = await blogsModel.findByIdAndUpdate(req.params.id, req.body)
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

