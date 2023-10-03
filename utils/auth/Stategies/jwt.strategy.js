const { Strategy } = require("passport-local");
const boom = require("@hapi/boom");
const UserService = require("../../../services/users.service");
const AuthService = require("../../../services/auth.service");

const userSvc = new UserService();
const authSvc = new AuthService();

const localStrategyHandler = async (email, password, done) => {
  try {
    const user = await userSvc.getByEmail(email);
    if (!user) return done(boom.notFound(), false);

    const isMatch = await authSvc.verify(password, user.password);
    if (!isMatch) return done(boom.unauthorized(), false);

    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
};

// Asignamos un nombre a la estrategia: "local"
const LocalStrategy = new Strategy({ usernameField: 'email', name: "local" }, localStrategyHandler);

module.exports = LocalStrategy;
