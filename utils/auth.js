import axios from "axios";

export const loginUser = async (login, password) => {
    const {data} = await axios.post('/api/users',{login,password})
    console.log(data);
}