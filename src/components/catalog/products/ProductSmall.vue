<template>
  <div class="product-small">
    <div class="product-small-img">
      <img :src="product.imageUrl" alt="">
    </div>
    <div class="product-small-name">{{product.name}}</div>
    <div class="product-small-price">{{product.price}} руб.</div>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style lang="stylus" scoped>
.product-small
  display flex
  width: 90%
  padding 0 1%
  &-img
    width 18%
    margin-right 5%
    padding 0.5rem 0
    position relative
    img
      display block
      max-width 100%
      max-height 100%
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%) 
  &-name
    width 50%
    margin-right 5%
  &-price
    width 20%
    margin-right 1%
</style>


