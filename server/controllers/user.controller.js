const User = require('../model/User')

const getUser = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id })
    res.status(200).json(user)
  } catch (err) {
    res.status(404).json({ message: 'User does not exist' })
  }
}

module.exports = getUser