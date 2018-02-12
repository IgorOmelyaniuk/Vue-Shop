<template>
  <div class="products">
    <grid-btns @changeGrid="changeGrid"></grid-btns>
    <div class="products-list flex justify-between content-start">
      <product-row v-for="product in products" :key="product.id" :product="product" v-if="grid === 'grow'"></product-row>
      <product-column v-for="product in products" :key="product.id" :product="product" v-if="grid === 'column'"></product-column>
      <!-- <div class="product-item" v-for="product in products" :key="product.id">
        <app-product 
          :product="product"
          @addInBasket="addInBasket">
        </app-product>
        
      </div> -->
    </div>
  </div>
</template>

<script>
import ProductColumn from './product-column/ProductColumn.vue'
import ProductRow from './product-row/ProductRow.vue'

import GridBtns from './grid-btns/GridBtns.vue'
import store from '../../../store'
export default {
  data: function () {
    return {
      products: store.products,
      grid: 'column'
    }
  },
  components: {
    productRow: ProductRow,
    ProductColumn: ProductColumn,
    gridBtns: GridBtns
  },
  methods: {
    addInBasket (product) {
      const index = store.basket.findIndex(element => element.id === product.id)

      if (index < 0) {
        store.basket.push(product)
      }
    },
    changeGrid (param) {
      this.grid = param
    }
  }
}
</script>

<style lang="stylus">
.products
  width 100%
.products-list
  padding-left 2rem
  align-items flex-start
  &.rows
    .product-item
      width 100%
      min-height 60px
  &.columns
    .product-item
      width: 30%
      min-height 60px
</style>
