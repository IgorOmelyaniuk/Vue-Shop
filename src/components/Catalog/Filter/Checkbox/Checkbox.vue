<template>
  <div class="filter-item-checkbox">
    <div class="filter-item-title">{{item.title}}</div>
    <div v-for="(i,index) in filter.values" :key="index">
      <label>
        <q-checkbox
          v-model="i.checked"
          @change="changeForm"
          :label="i.value"
          color="faded"
        />
      </label>
    </div>
  </div>
</template>

<script>
  import {QCheckbox} from 'quasar'
  export default {
    props: ['item'],
    data: function () {
      return {
        filter: this.item
      }
    },
    methods: {
      changeForm () {
        this.$emit('filterProducts', this.filter)
      }
    },
    components: {
      QCheckbox
    }
}
</script>

<style lang="stylus">
  .q-checkbox-unchecked,
  .q-checkbox-checked
    width 27px
    height 27px
    font-size 27px
  .q-option-label
    color #968d8d
  .q-option-inner.active + .q-option-label
    color #3d3d3d
</style>

