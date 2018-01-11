<template>
  <div class="filter-item-range flex justify-between">
    <div class="filter-item-title">{{item.title}}</div>
    <q-range
      v-model="filter"
      :min="item.min"
      :max="item.max"
      :step="1"
      @change="changeForm"
      label
      label-always
      color="red"
    />
  </div>
</template>

<script>
  import {QRange} from 'quasar'
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
        this.$emit('filterProducts', {
          title: this.item.title,
          min: this.filter.min,
          max: this.filter.max,
          type: this.item.type
        })
      }
    },
    components: {
      QRange
    }
}
</script>

<style lang="stylus" scoped>

</style>

