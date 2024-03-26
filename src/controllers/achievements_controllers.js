import { achievementModel } from "../model/achievement.js"

export const addAchievements = async (req, res)=>{
      
    try {
        const data = req.body
        const addAchievements = await achievementModel.create(data)
        res.send(addAchievements)
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

        try {
             const getOneAchievements = await achievementModel.findById(req.params.id)
             res.json({Achievements: getOneAchievements})
        } catch (error) {
            console.log(error)
        }
}


export const editAchievement = async (req, res)=>{

        try {
             const editAchievement = await achievementModel.findById(req.params.id)
             res.json(editAchievement)
        } catch (error) {
            console.log(error) 
        }
}


export const deleteOneAchievement = async (req, res)=>{

        try {
            const id = req.body._id
             const deleteOneAchievement = await achievementModel.deleteOne({ _id: id})
             res.json(deleteOneAchievement)
        } catch (error) {
            console.log(error)
        }
}