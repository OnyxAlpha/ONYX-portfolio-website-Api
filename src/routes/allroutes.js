import { Router } from "express";
import {
  addBlogs,
  deleteOneBlog,
  getAllBlogs,
  getOneBlog,
  upgradeBlog,
} from "../controllers/blogs_controllers.js";
import {
  addAchievements,
  deleteOneAchievement,
  editAchievement,
  getAllAchievements,
  getOneAchievements,
} from "../controllers/achievements_controllers.js";
import {
  addExperience,
  deleteExperience,
  editExperience,
  getAllExperiences,
  getOneExperience,
} from "../controllers/experiences_controllers.js";
import dotenv from "dotenv";
import { multerSaveFilesOrgStorage } from "multer-savefilesorg-storage";
import multer from "multer";

dotenv.config();

const upload = multer({
  storage: multerSaveFilesOrgStorage({
    apiAccessToken: process.env.SAVEFILESORG_API_KEY,
    relativePath: "/portfolio/images/*",
  }),
  preservePath: true,
});

export const router = Router();

router.post("/blog", upload.single('image'), addBlogs);
router.get("/blog", getAllBlogs);
router.get("/blog/:id", getOneBlog);
router.delete("/blog/:id", deleteOneBlog);
router.patch("/blog/:id", upgradeBlog);

router.post("/administratorachievements", addAchievements);
router.get("/administratorachievements", getAllAchievements);
router.get("/administratorachievements/:id", getOneAchievements);
router.delete("/administratorachievements/:id", deleteOneAchievement);
router.patch("/administratorachievements/:id", editAchievement);

router.post("/experiences", addExperience);
router.get("/experiences", getAllExperiences);
router.get("/experiences/:id", getOneExperience);
router.delete("/experiences/:id", deleteExperience);
router.patch("/experiences/:id", editExperience);
