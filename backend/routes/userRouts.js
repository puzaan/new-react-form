import express from "express";
const router = express.Router();
import {getUsersList, getuser, authUser, getUserProfile, registeruser, updateUserProfile} from '../controller/usersController.js'
import {protect} from '../middlewares/authMiddleware.js'


router.get("/list", getUsersList);
router.get("/:id",getuser);
router.post("/", registeruser)
router.post('/login', authUser)
router.get('/profile', protect, getUserProfile)
router.put('/update/:id', protect, updateUserProfile)
router.put('/update', protect, updateUserProfile)
export default router;



