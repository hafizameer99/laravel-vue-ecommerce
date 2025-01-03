import axiosClient from "../axios";

export function getUser({ commit }) {
    return axiosClient.get('user')
        .then(response => {
            commit('setUser', response.data)
            return response;
        })
}

export function login({ commit }, data) {
    return axiosClient.post('login', data)
        .then(({ data }) => {
            commit('setUser', data.user)
            commit('setToken', data.token)
            return data;
        })
}

export function logout({ commit }) {
    return axiosClient.post('logout')
        .then((response) => {
            commit('setToken', null)
            return response;
        })
}

// Products

export function getProducts({ commit, state }, { url = null, search = null, per_page = 10, sort_field, sort_direction } = {}) {
    commit('setProducts', [true])
    url = url || 'products'
    const params = {
        per_page: state.products.limit
    }
    return axiosClient.get(url, {
        params: {
            ...params,
            search,
            per_page,
            sort_field,
            sort_direction
        }
    })
        .then(res => {
            commit('setProducts', [false, res.data])
        })
        .catch(() => {
            commit('setProducts', [false])
        })
}

export function getProduct({ commit }, id) {
    return axiosClient.get(`/products/${id}`)
}

export function createProduct({ commit }, product) {
    if (product.image instanceof File) {
        const form = new FormData();
        form.append('title', product.title)
        form.append('image', product.image)
        form.append('description', product.description)
        form.append('price', product.price)
        product = form;
    }
    return axiosClient.post('/products', product)
}

export function updateProduct({ commit }, product) {
    const id = product.id;
    if (product.image instanceof File) {
        const form = new FormData();
        form.append('title', product.title)
        form.append('image', product.image)
        form.append('description', product.description)
        form.append('price', product.price)
        form.append('_method', 'PUT')
        product = form;
    } else {
        product._method = 'PUT';
    }
    return axiosClient.post(`/products/${id}`, product)
}

export function deleteProduct({ commit }, id) {
    return axiosClient.delete(`/products/${id}`)
}

// Orders

export function getOrders({ commit, state }, { url = null, search = null, per_page = 10, sort_field, sort_direction } = {}) {
    commit('setOrders', [true])
    url = url || 'orders'
    const params = {
        per_page: state.orders.limit
    }
    return axiosClient.get(url, {
        params: {
            ...params,
            search,
            per_page,
            sort_field,
            sort_direction
        }
    })
        .then(res => {
            commit('setOrders', [false, res.data])
        })
        .catch(() => {
            commit('setOrders', [false])
        })
}

export function getOrder({ commit }, id) {
    return axiosClient.get(`/orders/${id}`)
}

// Users
export function getUsers({ commit, state }, { url = null, search = '', per_page, sort_field, sort_direction } = {}) {
    commit('setUsers', [true])
    url = url || '/users'
    const params = {
        per_page: state.users.limit,
    }
    return axiosClient.get(url, {
        params: {
            ...params,
            search, per_page, sort_field, sort_direction
        }
    })
        .then((response) => {
            commit('setUsers', [false, response.data])
        })
        .catch(() => {
            commit('setUsers', [false])
        })
}

export function createUser({ commit }, user) {
    return axiosClient.post('/users', user)
}

export function updateUser({ commit }, user) {
    return axiosClient.put(`/users/${user.id}`, user)
}

export function deleteUser({ commit }, id) {
    return axiosClient.delete(`/users/${id}`)
}