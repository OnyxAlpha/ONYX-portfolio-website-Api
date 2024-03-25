import { Router } from "express";
import { addAdminAchievements, addAdminExperiences, addAdminLogin, addAdminSignup, addBlog, addContact, addExperiences, addPosts, addProjects } from "../controllers/users_controllers.js";


export const router =Router();

router.post("/blog", addBlog)
router.post("/contact", addContact)
router.post("/experiences", addExperiences )
router.post("/projects", addProjects)
router.post("/administratorlogin", addAdminLogin)
router.post("/administratorsignup", addAdminSignup)
router.post("/administratorachievements", addAdminAchievements)
router.post("/administratorposts",addPosts)
router.post("//administratorexperiences", addAdminExperiences)