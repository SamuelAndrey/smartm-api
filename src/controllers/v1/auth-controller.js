const authService = require('../../services/v1/auth-service')
const login = async (req, res, next) => {
  try {
    const { user, token } = await authService.login(req.body);
    res.status(200).json({
      data: {
        user,
        token,
      },
      meta: {
        status: 200,
        message: "Success Login User"
      }
    });
  } catch (e) {
    next(e);
  }
}

const register = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({
      data: {
        user,
      },
      meta: {
        status: 201,
        message: "Success Register User"
      }
    });
  } catch (e) {
    next(e);
  }
}

const logout = async (req, res, next) => {
  try {
    res.status(200).json({
      data: {
        user: req.user,
        message: "Success Logout User!"
      }
    });
  } catch (e) {
    next(e);
  }
}

module.exports = {
  login,
  register,
  logout,
}