<template>
  <div id="q-app">
    <q-layout ref="layout" view="lHh Lpr fff">
      <app-header></app-header>
      <div class="layout-padding"> 
        <router-view></router-view>
      </div>
      <!-- <app-catalog></app-catalog> -->
    </q-layout>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Catalog from './components/catalog/Catalog.vue'
import {QLayout} from 'quasar'
export default {
  components: {
    appHeader: Header,
    appCatalog: Catalog,
    QLayout
  }
}
</script>

<style lang="stylus">
body
  background #ededed
ul
  list-style none
</style>
