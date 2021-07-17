
export default {
    state: {
        basket_active: false,
        basket_list: []
    },
    mutations: {
        open_or_close_basket(state, action) {
            state.basket_active = action
        },
        add_to_cart(state, product) {
            let isInCart = false
            state.basket_list.map(function (item) {
                if (item.id === product.id) {
                    isInCart = true
                    item.quantity++
                }
            })
            if (!isInCart) {
                // создаем новую отдельную копию обьекта, чтобы добавить новое поле и не изменить обьект из массива
                let new_cart_product = JSON.parse(JSON.stringify(product));
                new_cart_product.quantity = 1
                state.basket_list.push(new_cart_product)
            }
            localStorage.removeItem('basket_data')
            localStorage.setItem('basket_data', JSON.stringify(state.basket_list))
        },
        delete_from_cart(state, index) {
            if (state.basket_list[index].quantity > 1) {
                state.basket_list[index].quantity -= 1
            } else {
                state.basket_list.splice(index, 1)
            }
            localStorage.removeItem('basket_data')
            localStorage.setItem('basket_data', JSON.stringify(state.basket_list))
        },
        local_storage_request(state) {
            let data = localStorage.getItem('basket_data')
            if (data !== null) {
                state.basket_list = JSON.parse(data)
            }
        },
    },
    actions: {
        open_or_close_basket(ctx, action) {
            ctx.commit('open_or_close_basket', action)
        },
        add_to_cart(ctx, product) {
            ctx.commit('add_to_cart', product)
        },
        delete_from_cart(ctx, index) {
            ctx.commit('delete_from_cart', index)
        },
        local_storage_request(ctx) {
            ctx.commit('local_storage_request')
        },
    },
    getters: {
        basket_active(state) {
            return state.basket_active
        },
        basket_list(state) {
            return state.basket_list
        }
    }
}
