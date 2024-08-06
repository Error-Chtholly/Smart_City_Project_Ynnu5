// 向伪接口发出请求
import axios from "axios";
const request = axios.create({
    baseURL: "http://localhost:8080",
});

request.interceptors.response.use(
    (res) => {
        if (res.status === 200) {
            return res.data;
        } else {
            return Promise.reject(new Error("请求失败"));
        }
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default request;