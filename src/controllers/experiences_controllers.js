import { experienceModel } from "../model/experience.js"

export const addExperience = async (req, res)=>{
      
    try {
        const data = req.body
        const addExperience = await experienceModel.create(data)
        res.send(addExperience)
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

         try {
            const getOneExperience = await experienceModel.findById(req.params.id)
            res.json( getOneExperience)
         } catch (error) {
            console.log(error)
         }
}


export const editExperience = async (req, res)=>{
        try {
            const editExperience = await experienceModel.findById(req.params.id)
             res.json( editExperience)
        } catch (error) {
            console.log(error) 
        }
}

export const deleteExperience = async (req, res)=>{
        try {
            const id = req.body._id
            const deleteExperience = await experienceModel.deleteOne({ _id: id})
             res.json( deleteExperience)
        } catch (error) {
            console.log(error)
        }
}
