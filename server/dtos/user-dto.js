module.exports = class UserDto {
    id;
    email;
    username;
    tasks;
    isActivated;

    constructor(model) {
        this.id = model.id;
        this.email = model.email;
        this.username = model.username;
        this.tasks = model.tasks;
        this.isActivated = model.isActivated;
    }
}

