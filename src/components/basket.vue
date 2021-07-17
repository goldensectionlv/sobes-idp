<template>
  <div
      class="basket_container"
      v-show="basket_active"
  >
    <transition
        name="slide"
        mode="out-in"
        :key="basket_active"
    >
      <div
          class="basket_container__basket"
          v-if="basket_active"
      >
        <!--        basket header-->
        <div style="display: flex; align-items: center; justify-content: space-between">
          <text_item
              text="Корзина"
              :is_h1="true"
              :regular="false"
          />

          <app_icon
              :close="true"
              :zoom="true"
              :is_btn="true"
              width="14px"
              height="14px"
              :action="close"
          />
        </div>
        <!--        basket body-->
        <div
            style="margin: 24px 0"
        >
          <text_item
              text="Пока что вы ничего не добавили в корзину."
              v-if="!basket_list.length"
          />
          <div
              v-else
          >
            <transition-group name="basket_items_animation">
            <basket_item
                v-for="(product, index) in basket_list" :key="product.id"
                :product="product"
                :index="index"
                :action="delete_from_cart"
            />
            </transition-group>
          </div>
        </div>
        <!--        basket btn-->
        <app_btn
            btn_text="Перейти к выбору"
            :action="close"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import app_btn from "@/components/ui/app_btn";
import app_icon from "@/components/ui/app_icon";
import basket_item from "@/components/ui/basket_item";
import text_item from "@/components/ui/text_item";
import {mapGetters, mapActions} from 'vuex'

export default {

  components: {app_btn, app_icon, basket_item, text_item},
  computed: mapGetters(['basket_active', 'basket_list']),
  methods: {
    ...mapActions(['open_or_close_basket', 'delete_from_cart']),
    close() {
      this.open_or_close_basket(false)
    },
  }
}
</script>

<style lang="scss" scoped>
.basket_container {
  font-family: 'PT Sans', sans-serif;
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, .5);
  z-index: 2;
  &__basket {
    width: 460px;
    background-color: white;
    height: 100%;
    overflow-y: scroll;
    padding: 52px;
  }
}


.slide-enter-active {
  transition: 300ms;
}

.slide-enter {
  transform: translate(100%, 0);
  opacity: 1;
}

.slide-leave-to {
  transform: translate(-100%, 0);
  opacity: 1;
}

.basket_items_animation-item {
  display: inline-block;
  margin-right: 10px;
}
.basket_items_animation-enter-active, .basket_items_animation-leave-active {
  transition: all 300ms;
}
.basket_items_animation-enter, .basket_items_animation-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
</style>
