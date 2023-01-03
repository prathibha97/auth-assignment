const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
    const {username, email, password} = req.body
   
    const user = await User.findOne({ $or: [{ email }, { username }] })

    if(!user) return res.status(404).json({ message: 'User does not exist' })

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) return res.status(403).json({ message: 'Invalid credentials'})

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
    delete user.password
    res.status(200).json({ token , user})
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = { register, login }