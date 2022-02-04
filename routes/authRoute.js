const { signupGetController, signupPostController, loginGetController, loginPostController, logoutController } = require('../controllers/authController');

const authRoutes = require('express').Router();

authRoutes.get('/signup',signupGetController);
authRoutes.post('/signup', signupPostController);
authRoutes.get('/login', loginGetController);
authRoutes.post('/login', loginPostController);
authRoutes.get('/logout', logoutController);

module.exports = authRoutes;