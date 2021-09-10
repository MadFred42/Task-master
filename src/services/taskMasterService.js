export default class TaskMasterService {
    _apiBase = 'http://localhost:3000';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}${url}, recieved ${res.status}`)
        }

        return await res.json();
    }
}