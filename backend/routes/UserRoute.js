import express from "express";
import { getUser, getUserById,createUser,updateUser,DeleteUser} from "../controller/UserController.js";

const router = express.Router();

router.get('/user', getUser);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', DeleteUser);

export default router