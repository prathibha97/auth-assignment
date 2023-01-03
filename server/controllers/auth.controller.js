const User = require('../model/User')
const bcrypt = require('bcrypt');

const register = async (req,res)=>{
  try {
    const {fullName, email, username, password, picturePath} = req.body

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const newUser = await User.create({
      fullName,
      username,
      email,
      password: hash,
      picturePath
    })

    res.status(201).json(newUser)

  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

module.exports = {register}