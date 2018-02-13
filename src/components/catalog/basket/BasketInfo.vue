<template>
    <div class="basket-info flex" @mouseover="hoverOnInfo">
      <div class="basket-icon">
        <img src="../../../assets/images/basket.png" alt="">
        <div class="basket-amount">{{amount}}</div>
      </div>
      <div class="basket-sum">{{sum}} руб.</div>
    </div>
</template>

<script>
  export default {
    props: ['amount', 'sum'],
    methods: {
      hoverOnInfo () {
        this.$emit('show-basket')
      }
    }
}
</script>

<style lang="stylus" scoped>
.basket-info
  cursor pointer
  margin-left auto
  .basket-icon
    width 43px
    height 38px
    position relative
    img
      width 100%
      height auto
  .basket-amount
    position absolute
    top 40%
    left 60%
    transform translate(-50%, -50%)
    z-index 2
    color #fff
    font-size 0.8rem
    font-weight bold
  .basket-sum
    color #968d8d
    line-height 38px
    margin-left 1.5rem
</style>


