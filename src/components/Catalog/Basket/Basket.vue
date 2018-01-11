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
  import basketInfo from './Basket-Info/basketInfo.vue'
  import basketList from './Basket-List/basketList.vue'
  export default {
    props: ['basket'],
    data: function () {
      return {
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
        const index = this.basket.indexOf(product => product.id === $event)
        this.basket.splice(index, 1)
      }
    },
    components: {
      basketInfo: basketInfo,
      basketList: basketList
    }
}
</script>

<style lang="stylus" scoped>
.basket-wrap
  position relative
  margin-left auto
  margin-bottom 2rem
</style>


