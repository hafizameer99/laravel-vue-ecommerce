export function setUser(state, user) {
    state.user.data = user;
}

export function setToken(state, token) {
    state.user.token = token;
    if(token) {
        sessionStorage.setItem('Token', token)
    } else {
        sessionStorage.removeItem('Token')
    }
}

export function setProducts(state, [loading, response = null]) {
    if(response) {
        state.products = {
            ...state.products,
            data: response.data,
            links: response.meta.links,
            total: response.meta.total,
            limit: response.meta.per_page,
            from: response.meta.from,
            to: response.meta.to,
            page: response.meta.crrent_page
        }
    }
    state.products.loading = loading;
}

export function setOrders(state, [loading, response = null]) {
    if(response) {
        state.orders = {
            ...state.orders,
            data: response.data,
            links: response.meta.links,
            total: response.meta.total,
            limit: response.meta.per_page,
            from: response.meta.from,
            to: response.meta.to,
            page: response.meta.crrent_page
        }
    }
    state.orders.loading = loading;
}

export function showToast(state, message) {
    state.toast.show = true;
    state.toast.message = message;
}

export function hideToast(state) {
    state.toast.show = false;
    state.toast.message = "";
}