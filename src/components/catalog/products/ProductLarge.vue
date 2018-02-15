<template>
  <div class="product-large flex justify-between">
    <div class="product-large-img">
      <img :src="product.imageUrl" :alt="product.name">
    </div>
    <div class="product-large-info">
      <div class="product-large-param" v-for="param in product.params" :key="param.name">
        <span class="param-title">{{param.name}}:</span>
        <span class="param-value">{{param.value}}</span>
      </div>
      <div class="product-large-name">{{product.name}}</div>
      <div class="product-large-rating">
        <q-rating color="red" v-model="product.rating" :max="5" readonly/>
      </div>
    </div>
  </div>
</template>

<script>
  import {QRating} from 'quasar'
  export default {
    props: ['product'],
    methods: {
      addInBasket (product) {
        this.$emit('addInBasket', product)
      }
    },
    components: {
      QRating
    }
  }
</script>

<style scoped lang="stylus">
.columns
  .product-large
    display block
    &-img
      width 60%
      margin 0 auto 2rem  
    &-info
      padding 0
      width 100%
    &-name,
    &-rating
      text-align center
.product-large
  padding 1rem
  width 100%
  &-img
    width: 30%
    position: relative
    height: 230px
    img
      max-width: 100%
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      max-height 100%
  &-info
    width 65%
    padding-top 1rem
    .product-param
      font-size 1rem
      margin-bottom 5px
      color #929292
      .param-title
        font-weight bold
    .product-name
      margin 1rem 0 0.5rem
      font-size 1.2rem
</style>
