import Vue from 'vue'
import VueRouter from 'vue-router'

import Catalog from './components/catalog/Catalog.vue'
import ProductRow from './components/catalog/products-list/product-row/ProductRow.vue'
import ProductColumn from './components/catalog/products-list/product-column/ProductColumn.vue'

Vue.use(VueRouter)

// function load (component) {
//   // '@' is aliased to src/components
//   return () => import(`@/${component}.vue`)
// }

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    { path: '/', component: Catalog },
    { path: '/productColumn', component: ProductColumn },
    { path: '/productRow', component: ProductRow }
    // { path: '*', component: load('Error404') } // Not found
  ]
})
