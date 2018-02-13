<template>
  <div class="basket-list">
      <basket-item
        v-for="product in products"
        :product="product"
        :key="product.id"
        @removeFromBasket="remove"
      ></basket-item>
      <div class="basket-result">Всего к оплате: {{sum}} руб.</div>
  </div>
</template>

<script>
  import basketItem from './BasketItem.vue'
  export default {
    props: ['products', 'sum', 'amount'],
    components: {
      basketItem: basketItem
    },
    methods: {
      remove ($event) {
        this.$emit('removeFromBasket', $event)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .basket-list
    position absolute
    z-index 2
    top -15px
    right 220px
    width 520px
    background #ffffff
    box-shadow 0 2px 3px rgba(121,112,112,0.2)
    .basket-result
      line-height 60px
      text-align center
</style>


