<template>
  <div class="basket-item flex">
    <div class="basket-item-img">
      <img :src="product.imageUrl" alt="">
    </div>
    <div class="basket-item-name">{{product.name}}</div>
    <div class="basket-item-price">{{product.price}} руб.</div>
    <div class="basket-item-delete" @click="remove">
      <i class="material-icons" style="font-size: 25px">delete</i>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['product'],
    methods: {
      remove () {
        this.$emit('removeFromBasket', this.product.id)
      }
    }
}
</script>

<style lang="stylus" scoped>
  .basket-item
    height 100px 
    border-bottom 1px solid #e1e1e1
    line-height 100px
    &-img
      width 15%
      margin-right 5%
      margin-left 1%
      padding 0.5rem 0
      img
        display block
        width 100%
        height 100% 
    &-name
      width 45%
      margin-right 3%
    &-price
      width 20%
      margin-right 1%
    &-delete
      width 10% 
      color #e83e38
      text-align center
      i
        cursor pointer
</style>


