<template>
  <div
      @mouseleave="close"
  >
    <text_item
        text="Каталог"
        :is_h1="true"
        :regular="false"
    />
    <div
        class="filter_container"
        @mouseenter="open"
    >
      <text_item
          text="Сортировать по: "
          :action="open"
      />
      <text_item
          :text="modal_filter.active_product_filter"
          :disabled="true"
          :action="open"
      />
      <transition
          name="slide"
          mode="out-in"
          :key="modal_filter.filter_modal_active"
      >
        <div
            v-if="modal_filter.filter_modal_active"
            class="filter_container__modal_filter"
        >
          <text_item
              class="filter_container__modal_filter__item"
              v-for="option in filter_options" :key="option.name"
              :text="'По ' + option.name"
              :action="option.action"
              :class="option.name !== modal_filter.active_product_filter ? '' : 'inactive_option'"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import text_item from "@/components/ui/text_item";
import {mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {
      filter_options: {
        price: {
          name: 'цене', action: () => this.option_click('цене')
        },
        popularity: {
          name: 'популярности', action: () => this.option_click('популярности')
        }
      }
    }
  },
  components: {text_item},
  computed: mapGetters([
    'modal_filter',
    'product_list'
  ]),
  methods: {
    ...mapActions([
      'open_or_close_filter_modal',
      'filter_by',
      'paginatedData'
    ]),
    close() {
      this.open_or_close_filter_modal(false)
    },
    open() {
      this.open_or_close_filter_modal(true)
    },
    option_click(option_name) {
      this.filter_by(option_name)
      this.paginatedData({arr: this.product_list, pageNumber: 0})
      this.close()
    }
  }
}
</script>

<style lang="scss" scoped>

.filter_container {
  position: relative;
  cursor: pointer;

  &__modal_filter {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: white;
    width: 100%;
    padding: 12px 12px 6px 12px;
    margin-top: 6px;
    border-radius: 8px;
    z-index: 1;

    &__item {
      margin-bottom: 6px;
      font-size: 14px;
    }
  }
}

.inactive_option {
  color: #959DAD
}

.slide-enter-active {
  transition: 100ms;
}

.slide-enter {
  transform: translate(0, 50%);
  opacity: 1;
}

.slide-leave-to {
  transform: translate(0, -50%);
  opacity: 1;
}
</style>
