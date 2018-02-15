<template>
  <div class="basket-wrap flex col-6" @mouseleave="hiddenBasket">
    <basket-info :sum="sum" :amount="amount" @show-basket="showProducts"></basket-info>
    <basket-list
      v-if="open && basket.length"
      :products="basket"
      :amount="amount"
      :sum="sum"
      @removeFromBasket="remove"  
    ></basket-list>
  </div>
</template>

<script>
  import BasketInfo from './BasketInfo.vue'
  import BasketList from './BasketList.vue'
  import store from '../../../store'
  export default {
    data: function () {
      return {
        basket: store.basket,
        open: false
      }
    },
    computed: {
      sum: function () {
        return this.basket.reduce((result, product) => {
          return result + Number(product.price)
        }, 0)
      },
      amount: function () {
        return this.basket.length
      }
    },
    methods: {
      showProducts () {
        if (this.basket.length) {
          this.open = true
        }
      },
      hiddenBasket () {
        this.open = false
      },
      remove ($event) {
        store.basket = store.basket.filter(product => product.id !== $event)
        this.basket = store.basket
      }
    },
    components: {
      basketInfo: BasketInfo,
      basketList: BasketList
    }
}
</script>

<style lang="stylus" scoped>
.basket-wrap
  position relative
  margin-left auto
  margin-bottom 2rem
</style>


