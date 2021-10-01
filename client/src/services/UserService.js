import $api from "../http";

export default class UserService {
    static async FetchUsers() {
        return $api.get('/users')
    }
}