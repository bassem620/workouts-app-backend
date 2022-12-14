const User = require('../models/userModel')

// Login Router
const loginUser = async (req, res) => {
  res.json({mssg: "Login User "})
}


// SignUp Router
const signupUser = async (req, res) => {
  const {email, password} = req.body
  try{
    const user = await User.signup(email, password)
    res.status(200).json({email, user})
  }catch(error){
    res.status(400).json({error: error})
  }
}

module.exports = {loginUser, signupUser}