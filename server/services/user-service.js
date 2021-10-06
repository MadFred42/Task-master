const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const UserDto = require('../dtos/user-dto');
const tokenService = require('./token-service');
const ApiError = require('../exeptions/api-error');
const taskModel = require('../models/task-model');
const taskService = require('./task-service');

class UserService {
    async registration(email, password, username) {
        const candidate = await userModel.findOne({ email });

        if (candidate) {
            throw ApiError.BadRequest(`User ${email} already exist`, );
        }

        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();
        const user = await userModel.create({ email, password: hashPassword, username, activationLink });
        await mailService.sendActivationLink(email, `${process.env.API_URL}/api/activation/${activationLink}`);

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto };
    }

    async activate(activationLink) {
        const user = await userModel.findOne({ activationLink });

        if (!user) {
            throw ApiError.BadRequest('Wrong activation link');
        }

        user.isActivated = true;
        return await user.save();
    }

    async login(email, password) {
        const user = await userModel.findOne({ email });

        if (!user) {
            throw ApiError.BadRequest(`User ${email} does not exist`);
        }

        const isPassEquals = await bcrypt.compare(password, user.password);

        if (!isPassEquals) {
            throw ApiError.BadRequest('Wrong password');
        }

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        
        return { ...tokens, user: userDto };
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);

        return token;
    }

    async refresh(refreshToken) {
        
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }

        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);

        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }

        const user = await userModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        
        return { ...tokens, user: userDto };
    }

    async getAllUsers() {
        const users = await userModel.find();

        return users;
    }

    async saveTask(task, refreshToken) {
        try {
            const newTask = await taskService.saveTask(task);
            const findActiveUser = await userModel.findOneAndUpdate({ refreshToken }, { tasks: newTask });
            const userDto = new UserDto(findActiveUser);
            
            return userDto;
        } catch (error) {
            
        }
    }

    async getUser(refreshToken) {
        const user = await userModel.find(refreshToken);

        return user.data;
    }
}

module.exports = new UserService();