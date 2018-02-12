<template>
    <div class="layout-padding logo-container non-selectable">
      <div class="row flex flex justify-end">
        <app-basket></app-basket>
      </div>
      <div class="row col-9">
        <products-list></products-list>
      </div>
    </div>
</template>

<script>
import ProductsList from './products-list/ProductsList.vue'
import Basket from './basket/Basket.vue'
export default {
  components: {
    ProductsList: ProductsList,
    appBasket: Basket
  }
}
</script>

<style scoped>

</style>

