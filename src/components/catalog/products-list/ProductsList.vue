<template>
  <div class="products-list flex justify-between content-start">
    <app-product 
      v-for="product in products"
      :key="product.id"
      :product="product"
      @addInBasket="addInBasket">
    </app-product>
  </div>
</template>

<script>
import Product from './product/Product.vue'
import store from '../../../store'
export default {
  data: function () {
    return {
      products: store.products
    }
  },
  components: {
    appProduct: Product
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
  .products-list
    padding-left 2rem
    align-items flex-start
</style>
