<template>
  <div class="filter-item-interval flex justify-between">
    <div class="filter-item-title">{{item.title}}</div>
    <div class="filter-item-input">
      <input type="text" v-model="filter.min" @input="changeForm">
      <span>От</span>
    </div>-
    <div class="filter-item-input">
      <input class="filter-item-input" type="text" v-model="filter.max" @input="changeForm">
      <span>До</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    data: function () {
      return {
        filter: this.item
      }
    },
    methods: {
      changeForm () {
        console.log(this.filter)
        this.$emit('filterProducts', this.filter)
      }
    }
}
</script>

<style lang="stylus" scoped>
  .filter-item-interval
    line-height 30px
  .filter-item-input
    width 45%
    display block
    height 30px
    line-height 30px
    background #e83e38
    border-radius 3px
    position relative
    color #fff
    input
      display block
      height 100% 
      line-height 30px
      outline none
      padding-left 2rem
      background transparent
      border none
      color #fff
      width 100%
    span
      position absolute
      top 0
      left 7px
</style>

