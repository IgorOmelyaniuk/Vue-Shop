<template>
  <div class="products">
    <div class="products-list col-9 flex justify-between ">
      <product-item
        v-for="product in products"
        :key="product.id"
        :product="product"
        @addInBasket="addInBasket"
      ></product-item>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
import store from '../../../store'
export default {
  data: function () {
    return {
      products: store.products
    }
  },
  components: {
    productItem: ProductItem
  },
  methods: {
    addInBasket (product) {
      const index = store.basket.findIndex(element => element.id === product.id)

      if (index < 0) {
        store.basket.push(product)
      }
    }
  }
}
</script>

<style lang="stylus">
.products
  width 100%
  .products-list
    align-items flex-start
    padding-left 2rem
</style>
