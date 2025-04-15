import { Router } from "express";
import {
  addUser,
  updateUser,
  getAllUsers,
  getUser,
  deleteUser,
} from "./user.controller.js";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUser);
userRouter.post("/", addUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
