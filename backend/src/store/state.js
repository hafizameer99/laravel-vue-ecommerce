const state = {
    user: {
        token: sessionStorage.getItem('Token') ?? null,
        data: {}
    },
    products: {
        loading: false,
        data: [],
        links: [],
        from: null,
        to: null,
        page: 1,
        limit: null,
        total: null
    },
    orders: {
        loading: false,
        data: [],
        links: [],
        from: null,
        to: null,
        page: 1,
        limit: null,
        total: null
    },
    toast: {
        show: false,
        message: ""
    }
}

export default state;