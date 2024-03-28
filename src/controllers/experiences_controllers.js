import { experienceModel } from "../model/experience.js"

export const addExperience = async (req, res)=>{
      
    try {
        const data = req.body
        const addExperience = await experienceModel.create({
            ...req.body,
            image: req.file.filename
        })
        res.status(201).json(addExperience);
    } catch (error) {
        console.log(error)
    }
}


export const getAllExperiences = async (req, res)=>{

        try {
             const getAllExperiences = await experienceModel.find({})
             res.json({Experiences: getAllExperiences})
        } catch (error) {
            console.log(error)
        }
}

export const getOneExperience = async (req, res)=>{

         
            const getOneExperience = await experienceModel.findById(req.params.id, req.body)
           //return 404 if experience not found
      if (getOneExperience === null) {
        return res.status(404).json({
         message: `Experience with objectId: ${req.params.id} Not found!`,
       });
     }
     
     res.json(getOneExperience);
}


export const editExperience = async (req, res)=>{
        try {
            const editExperience = await experienceModel.findByIdAndUpdate(req.params.id)
             res.json( editExperience)
        } catch (error) {
            console.log(error) 
        }
}

export const deleteExperience = async (req, res)=>{
        try {
            const id = req.body._id
            const deleteExperience = await experienceModel.findByIdAndDelete({ _id: id})
             res.json( deleteExperience)
        } catch (error) {
            console.log(error)
        }
}
