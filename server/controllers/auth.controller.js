const User = require('../model/User')
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  try {
    const { fullName, email, username, confirmPassword, password, picturePath } = req.body

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    if (!fullName || !username || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const newUser = await User.create({
      fullName,
      username,
      email,
      password: hash,
      picturePath
    })

    res.status(201).json(newUser)


  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const login = async (req, res) => {
  try {

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = { register }