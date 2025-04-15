import { User } from "./user.model.js";
import { isValidObjectId } from "mongoose";

const addUser = async (req, res) => {
  const data = req.body;
  try {
    const createdUser = await User.create(data);
    res.json(createdUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  if (!isValidObjectId(userId)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  const data = req.body;

  try {
    const updated = await User.updateOne({ _id: userId }, data);
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUser = async (req, res) => {
  const userId = req.params.id;
  if (!isValidObjectId(userId)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const user = await User.findById(userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const deleted = await User.deleteOne({ _id: id });
    res.json(deleted);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addUser, updateUser, getUser, getAllUsers, deleteUser };
