const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/user.model')

const login = async(req, res) => {
try {
  const user = await User.findOne({ where: {email: req.body.email}})

  if (!user) return res.status(400).send('Error: User or Password incorrect')
  bcrypt.compare(req.body.password, user.password, (err, result ) => {
    if(err || !result) return res.status(400).send('Error: User or Password incorrect')

  })
} catch (error) {
  console.log(error)
  res.status(500).send('Error login ')
  
}
}

const signup = async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const user = await User.create(req.body)
    const token = jwt.sign({ email: user.email}, process.env.JWT_SECRET)
    res.send(user)
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  login,
  signup 
  
}