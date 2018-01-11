<template>
  <div class="filter-wrap">
    <div class="filter-list">
      <div class="filter-title">Фильтр</div>
      <div class="filter-body">
        <div class="filter-item" v-for="item in filter" :key="item.id">
          <app-checkbox v-if="item.type === 'checkbox'" :item="item" @filterProducts="filterProducts"></app-checkbox>
          <app-interval v-if="item.type === 'interval'" :item="item" @filterProducts="filterProducts"></app-interval>      
          <app-range v-if="item.type === 'range'" :item="item" @filterProducts="filterProducts"></app-range>      
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import jsonFilter from './mobile.json'
  import Checkbox from './Checkbox/Checkbox.vue'
  import Interval from './Interval/Interval.vue'
  import Range from './Range/Range.vue'
  export default {
    data: function () {
      return {
        filter: jsonFilter.filter
      }
    },
    components: {
      appCheckbox: Checkbox,
      appInterval: Interval,
      appRange: Range
    },
    methods: {
      filterProducts ($event) {
        this.filter.forEach((item, index) => {
          if (item.title === $event.title) {
            this.filter[index] = $event
          }
        })
        this.$emit('filterProducts', this.filter)
      }
    }
}
</script>

<style lang="stylus">
.filter-list
  background #ffffff
  box-shadow 0 2px 3px rgba(121, 112, 112, 0.2)
  .filter-title
    line-height 40px
    color #ffffff
    font-weight bold
    text-transform uppercase
    text-align center
    background #e83e38
    border-radius 3px 3px 0 0
  .filter-body
    padding 1em 2em
  .filter-item
    margin-bottom 1rem
    .filter-item-title
      margin-bottom 1rem
      width 100% 
      font-weight bold
</style>