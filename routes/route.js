const express = require("express");
const router = express.Router();
const userModel = require("../models/User");

router.use(express.json());

router.get("/user", async (req, res) => {
  const users = await userModel.find();
  res.status(200).json(users);
});

router.post("/user", async (req, res) => {
  const newUser = req.body;
  const user = await userModel.create(newUser);
  res.status(200).json({ success: 200, data: user });
});

router.put("/user", async (req, res) => {
  const { id, name } = req.body;
  const user = await userModel.findById(id);
  user.name = name;
  const data = await user.save();
  res.status(200).json(data);
});

router.delete("/user", async (req, res) => {
  const { id } = req.body;
  const user = await userModel.deleteOne({ id: id });

  res.status(200).send("user deleted");
});

module.exports = router;