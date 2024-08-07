import express from 'express';
const router = express.Router();
import User from "../../models/user.js";

router.post('/', async (req, res) => {
  console.log("helo");
  const { email, name } = req.body;

  try {
    const user = new User({
      email,
      name,
      shopList: []
    });
    await user.save();
    res.send({ message: 'User created successfully!' });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error (email already exists)
      res.status(400).send({ message: 'User with this email already exists' });
    } else {
      // Other errors
      console.error('Error creating user:', error);
      res.status(500).send({ message: 'Internal server error' });
    }
  }
});

export default router;
