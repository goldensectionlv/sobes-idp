export default {
    state: {
        pageNumber: 0,
        size: 20,
        pageCount: 0,
        current_page_arr: []
    },
    mutations: {
        paginatedData(state, data) {
            state.pageCount = Math.ceil(data.arr.length / state.size);
            state.pageNumber = data.pageNumber
            let start = data.pageNumber * state.size
            let end = start + state.size
            state.current_page_arr = data.arr.slice(start, end)
        }
    },
    actions: {
        paginatedData(ctx, {arr, pageNumber}) {
            ctx.commit('paginatedData', {arr, pageNumber})
        }
    },
    getters: {
        current_page_arr(state) {
            return state.current_page_arr
        },
        pageCount(state) {
            return state.pageCount
        },
        pageNumber(state) {
            return state.pageNumber
        }
    }
}
