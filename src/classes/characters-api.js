import axios from 'axios'

export default class CharactersApi {
    constructor(serverUrl) {
        this.baseUrl = serverUrl;
    }

    async getCharacters() {
        return await axios.get(`${this.baseUrl}characters`)
    }

    async getSelectedCharacter(id) {
        return await axios.get(`${this.baseUrl}characters/${id}`)
    }
}