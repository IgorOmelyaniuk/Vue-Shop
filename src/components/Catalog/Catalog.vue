<template>
  <div class="logo-container non-selectable">
    <div class="row flex justify-end">
      <app-basket></app-basket>
    </div>
    <div class="row">
      <grid-btns @changeGrid="changeGrid"></grid-btns>
    </div>
    <div class="row col-12" :class="grid === 'rows' ? 'rows' : 'columns'">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ProductsList from './products-list/ProductsList.vue'
import Basket from './basket/Basket.vue'
import GridBtns from './grid-btns/GridBtns.vue'
export default {
  data: function () {
    return {
      grid: 'columns'
    }
  },
  methods: {
    changeGrid (param) {
      this.grid = param
    }
  },
  components: {
    ProductsList: ProductsList,
    appBasket: Basket,
    gridBtns: GridBtns
  }
}
</script>

<style lang="stylus">

</style>

