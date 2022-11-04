import UserModel from '../models/user_model'

let url = "https://reqres.in/api/users?page=1"

let fetchDummyData = async () => {
    let res = await fetch(url)
    let json = await res.json();
    let data = json.data;
    return [...data.map(e => new UserModel(e.id, e.first_name, e.email, e.avatar))]
}

export default {
    fetchDummyData: fetchDummyData
}