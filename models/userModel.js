const mongoose = require('mongoose')
const bycrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  }
})

// Static signup method
userSchema.statics.signup = async function (email, password) {
  const exists = await this.findOne({email})
  if(exists){
    throw Error('Email already in use')
  }

  const salt = await bycrypt.genSalt(10)
  const hash = await bycrypt.hash(password, salt)

  const user = await this.create({email, password: hash})

  return user
}

module.exports = mongoose.model('User', userSchema)