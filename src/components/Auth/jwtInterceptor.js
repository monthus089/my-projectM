import axios from "axios";

const jwtInterceptor = axios.create({});

jwtInterceptor.interceptors.request.use((config) => {
    let tokenData = JSON.parse(localStorage.getItem("tokens"));
    // config.headers.common["Authorization"] = `bearer ${tokenData.accessToken}`;
    config.headers.Authorization = `bearer ${tokenData.accessToken}`;
    return config;
});

jwtInterceptor.interceptors.response.use((response) => {
    return response;
},async(err) => {
    if(err.response.status === 401) {
        let tokenData = JSON.parse(localStorage.getItem("tokens"));
        let payload = {
            accessToken: tokenData.accessToken,
            refreshToken: tokenData.refreshToken
        };

        let apiResponse = await axios.post("https://localhost:7120/api/Authenticate/RefreshToken", payload);
        localStorage.setItem("tokens", JSON.stringify(apiResponse.data));

        err.config.headers.Authorization = `bearer ${apiResponse.data.accessToken}`;
        return axios(err.config);
    } else {
        return Promise.reject(err);
    }
})

export default jwtInterceptor;