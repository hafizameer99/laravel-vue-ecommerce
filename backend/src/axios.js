import axios from 'axios';
import store from './store';
import router from './router';

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosClient.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer ${store.state.user.token}`
    return request;
})

axiosClient.interceptors.response.use(response => {
    return response;
}, error => {
    if(error.response.state === 401) {
        store.commit('setToken', null)
        sessionStorage.removeItem('Token')
        router.push({name: 'login'})
    }
    throw error;
})

export default axiosClient;