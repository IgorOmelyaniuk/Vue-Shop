<template>
  <div class="basket-item flex">
    <product-small :product="product"></product-small>
    <div class="basket-item-delete" @click="remove">
      <i class="material-icons" style="font-size: 25px">delete</i>
    </div>
  </div>
</template>

<script>
  import ProductSmall from '../../catalog/products/ProductSmall.vue'
  export default {
    props: ['product'],
    methods: {
      remove () {
        this.$emit('removeFromBasket', this.product.id)
      }
    },
    components: {
      productSmall: ProductSmall
    }
}
</script>

<style lang="stylus" scoped>
  .basket-item
    height 100px 
    border-bottom 1px solid #e1e1e1
    line-height 100px
    &-delete
      width 10% 
      color #e83e38
      text-align center
      i
        cursor pointer
</style>


