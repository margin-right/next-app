import axios from "axios";

export const loginUser = async (login, password) => {
    console.log({login,password});
    const {data} = await axios.post('/api/users',{login,password})
}