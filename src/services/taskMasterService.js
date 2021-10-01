export default class TaskMasterService {
    _apiBase = 'http://localhost:3000';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}${url}, recieved ${res.status}`)
        }

        return await res.json();
    }

    async signUpUser (email, password, username) {
        const id = await this.getUserId;
        const user = {
            email,
            id,
            password,
            username
        };
        const response = await fetch(`${this._apiBase}/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error (response.status);
        }

        return await response;
    }

    async getUserId() {
        const res = await this.getResource('/users');
        const id = res.length + 1;

        return id;
    }
}