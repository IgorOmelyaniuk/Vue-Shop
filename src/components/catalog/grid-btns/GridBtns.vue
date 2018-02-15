<template>
  <div class="flex justify-end btns-grid">
    <button @click="changeGrid('rows')" class="btn-grid grid-row"></button>
    <button @click="changeGrid('columns')" class="btn-grid grid-column"></button>
  </div>
</template>

<script>
export default {
  methods: {
    changeGrid (param) {
      this.$emit('changeGrid', param)
    }
  }
}
</script>

<style lang="stylus" scoped>
.btns-grid
  margin-bottom 2rem
  padding-left 2rem
  .btn-grid
    display block
    width 25px
    height 25px
    border none
    background-color transparent
    background-size contain
    background-repeat: no-repeat
    background-position center
    outline none
    cursor pointer
  .grid-row
    background-image url('../../../assets/images/grid-row.png')
  .grid-column
    background-image url('../../../assets/images/grid-column.png')
    margin-left 1rem
</style>

