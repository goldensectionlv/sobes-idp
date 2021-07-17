<template>
  <div>
    <basket/>
    <div
        class="main_container"
    >
      <app_header
          class="app_header"
      />
      <app_title
          class="app_title"
      />
      <sidebar
          class="app_sidebar"
      />
      <div
          class="app_body"
      >
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/sidebar";
import app_header from "@/components/app_header";
import app_title from "@/components/app_title";
import basket from "@/components/basket";
import {mapGetters} from "vuex";

export default {
  components: {sidebar, app_header, app_title, basket},
  computed: {
    ...mapGetters(['product_list'])
  },

}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main_container {
  font-family: 'PT Sans', sans-serif;
  padding: 0 6.11vw;
  display: grid;
  grid-template-columns: minmax(11vw, 161px) 1fr;
  grid-template-rows: 66px minmax(33px, 66px) 1fr;
  grid-template-areas:
      "app_header app_header"
      "app_title app_title"
      "app_sidebar app_body";
}

.app_header {
  grid-area: app_header;
  @include flex-align-center-space-between;
  height: 66px;
//border: 1px solid black
}

.app_title {
  grid-area: app_title;
  @include flex-align-center-space-between;
  width: 100%;
  padding-top: 25px;
//border: 1px solid black
}

.app_sidebar {
  grid-area: app_sidebar;
  display: flex;
  flex-direction: column;
  padding-top: 25px;
//border: 1px solid black
}

.app_body {
  grid-area: app_body;
  padding-top: 25px;
//border: 1px solid black

}

@media (max-width: 500px) {
  .main_container {
    grid-template-rows: 66px minmax(33px, 66px) minmax(33px, auto) 1fr;
    grid-template-areas:
      "app_header app_header"
      "app_title app_title"
      "app_sidebar app_sidebar"
      "app_body app_body";
  }
}
</style>
