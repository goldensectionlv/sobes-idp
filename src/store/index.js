import Vue from 'vue'
import Vuex from 'vuex'
import api_requests from "@/store/api_requests";
import pagination from "@/store/pagination";
import basket from "@/store/basket";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        product_categories: [],
        product_list: [],
        modal_filter: {
            active_product_filter: 'цене',
            filter_modal_active: false,
        },
    },

    mutations: {
        get_product_categories(state, categories_array) {
            for (let category of categories_array) {
                category.active = false
                category.route = 'category_' + category.id
            }
            categories_array[0].active = true
            state.product_categories = categories_array
        },

        get_category_products(state, response) {
            state.product_list = response
        },

        change_category(state, to) {
            for (let category of state.product_categories) {
                category.active = category.id === to
            }
        },
        filter_by(state, option) {
            if (option === 'id') {
                state.product_list.sort( (a, b) => a.id - b.id)
                state.modal_filter.active_product_filter = option
            } else if (option === 'цене') {
                state.product_list.sort( (a, b) => a.price - b.price)
                state.modal_filter.active_product_filter = option
            } else if (option === 'популярности') {
                state.product_list.sort( (a, b) => b.rating - a.rating)
                state.modal_filter.active_product_filter = option
            }
        },
        open_or_close_filter_modal(state, is_active) {
            state.modal_filter.filter_modal_active = is_active
        },
    },

    actions: {
        async get_product_categories(ctx) {
            const response = await api_requests.get_product_categories()
            ctx.commit('get_product_categories', response.data)
        },

        async get_category_products(ctx, category_id) {
            const response = await api_requests.get_category_products(category_id)
            ctx.commit('get_category_products', response.data)
        },

        change_category(ctx, to) {
            ctx.commit('change_category', to)
        },
        filter_by(ctx, option) {
            ctx.commit('filter_by', option)
        },
        open_or_close_filter_modal(ctx, is_active) {
            ctx.commit('open_or_close_filter_modal', is_active)
        },

    },

    getters: {
        product_categories(state) {
            return state.product_categories
        },
        product_list(state) {
            return state.product_list
        },
        modal_filter(state) {
            return state.modal_filter
        }
    },

    modules: {pagination, basket}
})
