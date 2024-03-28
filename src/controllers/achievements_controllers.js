import { achievementModel } from "../model/achievement.js"

export const addAchievements = async (req, res)=>{
      
    try {
        const data = req.body
        const addAchievements = await achievementModel.create({
            ...req.body,
            image: req.file.filename
        })
        res.status(201).json(addAchievements);
    } catch (error) {
        console.log(error)
    }
}


export const getAllAchievements = async (req, res)=>{

        try {
             const getAllAchievements = await achievementModel.find({})
             res.json({Achievements: getAllAchievements})
        } catch (error) {
            console.log(error)
        }
}


export const getOneAchievements = async (req, res)=>{

    
             const getOneAchievements = await achievementModel.findById(req.params.id)
        //return 404 if achievement not found
      if (getOneAchievements === null) {
        return res.status(404).json({
         message: `Achievement with objectId: ${req.params.id} Not found!`,
       });
     }
     
     res.json(getOneAchievements);
   
}


export const editAchievement = async (req, res)=>{

        try {
             const editAchievement = await achievementModel.findByIdAndUpdate(req.params._id)
             res.json(editAchievement)
        } catch (error) {
            console.log(error) 
        }
}


export const deleteOneAchievement = async (req, res)=>{

        try {
            const id = req.body._id
             const deleteOneAchievement = await achievementModel.findByIdAndDelete({ _id: id})
             res.json(deleteOneAchievement)
        } catch (error) {
            console.log(error)
        }
}