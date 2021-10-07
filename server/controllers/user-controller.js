const userService = require('../services/user-service');
const {validationResult} = require('express-validator');
const ApiError = require('../exeptions/api-error');
const userModel = require('../models/user-model');

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest(`Validation error`, errors.array()));
            }

            const { email, password, username } = req.body;
            const userData = await userService.registration(email, password, username);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            
            return res.json(token);
        } catch (e) {
            next(e);
        }
    }

    async activation(req, res, next) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            
            return res.redirect(process.env.CLIENT_URL);
        } catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async getUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers();

            return res.json(users);
        } catch (e) {
            next(e);
        }
    }

    async saveTask(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const { task } = req.body;
            const tasks = await userService.saveTask(task, refreshToken);
            
            return res.json(tasks);
        } catch (e) {
            next(e);
        }
    }

    async getUsersTasks(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const user = await userService.getUsersTasks(refreshToken);

            return res.json(user.tasks);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();