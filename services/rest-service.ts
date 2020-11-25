import axios from "axios";


export const postLogin = async (inputs) => {
    const data = new URLSearchParams(inputs);
    const res = await post("/auth/local", data).catch(e=> console.log(e));
    if (res.error) {
        return res.error;
    }
    if (res.data && res.data.token) {
        alert(`this is my token: (${res.data.token})`);
        return;
    }
    return "Something unexpected happened!";
};

// a base configuration we can extend from
const baseConfig = {
    baseURL: "http://localhost:1337",
};

const post = (url, data) => {
    return axios.post(url, data, baseConfig)
};