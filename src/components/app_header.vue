<template>
  <div>
    <text_item
        text="TestList"
        class="app_header-testList"
    />
    <div
        class="app_header-icon_container"
    >
      <text_item
          :text="String(total)"
          class="app_header-icon_container-counter"
          :action="open"
      />
      <app_icon
          :basket="true"
          :zoom="true"
          :is_btn="true"
          width="24px"
          height="27px"
          :action="open"
      />
    </div>
  </div>
</template>

<script>
import text_item from "@/components/ui/text_item";
import app_icon from "@/components/ui/app_icon";
import {mapActions, mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['basket_list']),
    total: function () {
      let total_items = 0
      this.basket_list.map(item => {
        total_items += item.quantity
      })
      return total_items
    }
  },
  methods: {
    ...mapActions([
      'open_or_close_basket',
      'local_storage_request'
    ]),
    open() {
      this.open_or_close_basket(true)
    }
  },
  components: {
    text_item,
    app_icon
  },
  mounted() {
    this.local_storage_request()
  }
}
</script>

<style lang="scss" scoped>
.app_header {
  &-testList {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 28px;
    color: #59606D;
  }

  &-icon_container {
    position: relative;

    &-counter {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 15px;
      height: 15px;
      right: 0;
      position: absolute;
      border-radius: 50%;
      background-color: #959DAD;
      font-size: 8px;
      font-weight: 700;
      color: white;
      z-index: 1;
      transform: translate(40%, -40%);
      cursor: pointer;
    }
  }
}


</style>
