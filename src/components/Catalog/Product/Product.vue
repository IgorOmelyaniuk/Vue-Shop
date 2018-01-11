<template>
  <div class="product-item text-center">
    <div class="product-item-top flex justify-between">
      <div class="product-item-img">
        <img :src="product.imageUrl" alt="">
      </div>
      <div class="product-item-info">
        <div class="product-item-param" v-for="param in product.params" :key="param.name">
          <span class="param-title">{{param.name}}:</span>
          <span class="param-vaule">{{param.value}}</span>
        </div>
        <div class="product-item-name">{{product.name}}</div>
        <q-rating color="red" v-model="product.rating" :max="5" readonly/>
      </div>
    </div>
    <div class="product-item-bottom flex justify-between">
      <div class="product-item-price">{{product.price}} руб.</div>
      <button class="product-item-buy" @click="addInBasket(product)">Buy</button>
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
  .product-item
    width: 48%
    background #ffffff
    box-shadow 0 2px 3px rgba(121,112,112,0.2)
    margin-bottom: 1rem
    &-top
      flex 1
      padding 0 1rem
      margin-bottom 2rem 
    &-img
      width: 30%
      position: relative
      height: 200px
      img
        width: 100%
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
    &-info
      width 65%
      padding-top 2rem
      .product-item-param
        margin-bottom 5px
        font-size 13px
        text-align left
        color #929292
        .param-title
          font-weight bold
      .product-item-name
        font-size 1rem
        margin-top 1rem
    &-bottom
      line-height 40px
      color #fff
      font-weight bold
      .product-item-price
        width 65%
        background #3d3d3d
        text-align right
        padding-right 1rem
        font-size 1.1em
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
        font-size 0.9rem
        &::before
          content ''
          display block
          position absolute
          top 8px
          left 28px
          width 24px
          height 23px
          background url('../../../assets/images/basket-white.png') center no-repeat
          background-size cover
        &:hover
          background #db2019

</style>

