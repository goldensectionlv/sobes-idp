<template>
  <div>
    <text_item
        class="category"
        v-for="category in product_categories"
        :text="category.name"
        :key="category.id"
        :class="category.active ? 'active_category' : ''"
        :action="category_on_click"
        :args="[category.id]"
    />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import text_item from "@/components/ui/text_item";

export default {
  components: {
    text_item
  },
  computed: {
    ...mapGetters([
      'product_categories',
      'product_list',
      'modal_filter'
    ])
  },
  methods: {
    ...mapActions([
      'get_product_categories',
      'get_category_products',
      'change_category',
      'paginatedData',
      'filter_by'

    ]),
    async category_on_click(id) {
      this.change_category(id)
      await this.get_category_products(id)
      await this.$router.push('/category/' + id).catch(() => {
      })
      this.filter_by(this.modal_filter.active_product_filter)
      this.paginatedData({arr: this.product_list, pageNumber: 0})
    }
  },
  async mounted() {
    await this.get_product_categories()
    this.$router.push('/category/' + this.product_categories[0].id).catch(() => {
    })
  }
}
</script>

<style scoped>
.category {
  margin-bottom: 16px;
  cursor: pointer;
}

.active_category {
  text-decoration-line: underline;
}

</style>
