import axios from 'axios'

export default class UserService {
    static async getAll() {
        try {
            const respons = await axios.get('https://jsonplaceholder.typicode.com/users');
            return respons.data;
        } catch (e) {
            console.log(e)
        }
    }

    static async getUserPosts(id) {
        try {
            const respons = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + id);
            return respons.data;
        } catch (e) {
            console.log(e)
        }
    }
}