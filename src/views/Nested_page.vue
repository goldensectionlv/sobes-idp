<template>
  <div>
    <transition name="fade">
      <div
          v-if="animation"
          class="nested_wrapper"
      >
        <product_card
            v-for="product in current_page_arr" :key="product.id"
            class="nested_wrapper__product_card"
            :product="product"
            :action="add_to_cart"
            :cart_ids="cart_ids"
        />
      </div>
    </transition>

    <pagination
        style="display: flex; align-items: center"
        v-if="product_list.length !==0"
        :items_array="product_list"
        :page-count="pageCount"
        :page-number="pageNumber"
        :action="paginatedData"
    />
  </div>

</template>

<script>
import product_card from "@/components/ui/product_card";
import pagination from "@/components/ui/pagination";
import {mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {
      animation: false,
    }
  },
  components: {
    product_card, pagination
  },
  computed: {
    ...mapGetters([
      'product_list',
      'current_page_arr',
      'pageCount',
      'pageNumber',
      'modal_filter',
      'basket_list'
    ]),
    cart_ids: function () {
      let total_items = []
      this.basket_list.map(item => {
        total_items.push(item.id)
      })
      return total_items
    }
  },
  methods: {
    ...mapActions([
      'get_category_products',
      'filter_by',
      'paginatedData',
      'add_to_cart'
    ]),
  },
  async mounted() {
    await this.get_category_products(this.$route.params.id)
    this.animation = true
    this.filter_by(this.modal_filter.active_product_filter)
    this.paginatedData({arr: this.product_list, pageNumber: 0})
  }
}
</script>

<style lang="scss" scoped>
.nested_wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 1%;

  &__product_card {
    width: 24%;
    margin-right: 1%;
    margin-bottom: 1%;
    border-radius: 9px;
  }
}

@media (max-width: 1124px) {
  .nested_wrapper {
    padding-left: 2%;

    &__product_card {
      width: 30.66%;
      margin-right: 2%;
      margin-bottom: 2%;
    }
  }
}

@media (max-width: 900px) {
  .nested_wrapper {
    padding-left: 2%;

    &__product_card {
      width: 47%;
      margin-right: 2%;
      margin-bottom: 2%;
    }
  }
}

@media (max-width: 700px) {
  .nested_wrapper {
    padding-left: 2%;

    &__product_card {
      width: 96%;
      margin-right: 2%;
      margin-bottom: 2%;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
