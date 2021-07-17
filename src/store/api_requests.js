import axios from "axios";

let main_url = 'https://frontend-test.idaproject.com/api/'

export default {
    async get_product_categories() {
        return await axios.get(main_url + 'product-category?_limit=1')
    },
    async get_category_products(category_id) {
        return await axios.get(main_url + 'product?category=' + category_id)
    }
}
