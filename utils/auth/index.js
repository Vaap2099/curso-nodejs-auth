const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const UserService = require('../../services/user.service')
const service = new UserService()

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  try {
    const user = await service.findByEmail(email)
    if(!user){
      done(boom.unauthorized(), false)
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
      done(boom.unauthorized(), false)
    }
    delete user.dataValues.password
    done(null, user)
  } catch (error) {
    done(error, false)
  }
}))
