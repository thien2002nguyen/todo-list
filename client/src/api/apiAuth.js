import axiosClient from "./axiosClient";

const apiAuth = {
    loginAccount(dataAccount) {
        const url = '/auth/login';
        return axiosClient.post(url, dataAccount);
    }
}

export default apiAuth;