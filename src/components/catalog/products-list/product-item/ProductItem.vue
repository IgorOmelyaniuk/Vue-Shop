<template>
  <div class="product-item flex items-end">
    <app-product :product="product" v-if="product"></app-product>
    <div class="product-item-bottom flex justify-between">
        <div class="product-item-price">
          <span v-if="product">{{product.price}} руб.</span>
        </div>
        <button class="product-item-buy" @click="addInBasket(product)">Buy</button>
      </div>
  </div>
</template>

<script>
  import {QRating} from 'quasar'
  import Product from '../product/Product.vue'
  export default {
    props: ['product'],
    methods: {
      addInBasket (product) {
        this.$emit('addInBasket', product)
      }
    },
    components: {
      QRating,
      appProduct: Product
    }
  }
</script>

<style scoped lang="stylus">
.rows
  .product-item
    width 100%
    min-height 60px
.columns
  .product-item
    width: 48%
.product-item
  min-height 304px
  background #fff
  box-shadow 0 2px 3px rgba(121,112,112,0.2)
  margin-bottom: 1rem
  font-size 1rem
  &-bottom
    width 100% 
    line-height 40px
    color #fff
    font-weight bold
    .product-item-price
      width 65%
      background #3d3d3d
      text-align right
      padding-right 1rem
    .product-item-buy
      width 35%  
      display block
      outline none
      border none
      background #e83e38
      color #fff
      text-transform uppercase
      position relative
      cursor pointer
      &::before
        content ''
        display block
        position absolute
        top 8px
        left 28px
        width 24px
        height 23px
        background url('../../../../assets/images/basket-white.png') center no-repeat
        background-size cover
      &:hover
        background #db2019
</style>

