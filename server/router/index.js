const Router = require('express');
const userController = require('../controllers/user-controller');
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

const router = new Router();

router.post('/registration', 
    body('email').isEmail(),
    body('password').isLength({ min: 5, max: 36 }),
    userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/savetask', userController.saveTask);
router.get('/activation/:link', userController.activation);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);
router.get('/user', authMiddleware, userController.getUser);
router.get('/gettasks', userController.getTask);

module.exports = router;