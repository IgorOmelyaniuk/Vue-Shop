<template>
    <!--
      Replace following <div> with
      <router-view /> component
      if using subRoutes
    -->
    <div class="layout-padding logo-container non-selectable">
      <div class="row flex flex justify-end">
        <app-basket :basket="basket"></app-basket>
      </div>
      <div class="row justify-between">
        <app-filter class="col-3" @filterProducts="filterProducts($event)"></app-filter>
        <div class="products-list col-9 flex justify-between content-start">
          <app-product 
            v-for="product in filteredProducts"
            :key="product.id"
            v-on:addInBasket="addInBasket(product)"
            :product="product"></app-product> 
        </div>
      </div>
    </div>
</template>

<script>
import Product from './Product/Product.vue'
import Basket from './Basket/Basket.vue'
import Filter from './Filter/Filter.vue'
import * as jsonContent from '../../products.json'
export default {
  name: 'index',
  data: function () {
    return {
      products: jsonContent.products,
      filteredProducts: [],
      basket: []
    }
  },
  created () {
    this.filteredProducts = this.products
  },
  components: {
    appProduct: Product,
    appBasket: Basket,
    appFilter: Filter
  },
  methods: {
    addInBasket (product) {
      const index = this.basket.findIndex(element => element.id === product.id)
      if (index < 0) {
        this.basket.push(product)
      }
    },
    filterProducts ($event) {
      let facets = []
      let ranges = []
      this.filteredProducts = this.products
      $event.forEach(param => {
        if (param.type === 'checkbox') {
          let facet = this.getFacetForCheckbox(param)
          if (facet.values.length) {
            facets.push(facet)
          }
        }

        if (param.type === 'range' || param.type === 'interval') {
          let facet = {
            title: param.title,
            min: param.min,
            max: param.max
          }
          ranges.push(facet)
        }
      })
      if (facets.length) {
        this.filterProductsWithCheckbox(facets)
      }
      if (ranges.length) {
        this.filterProductsWithRange(ranges)
      }
    },
    getFacetForCheckbox (param) {
      let facetParams = []
      param.values.forEach(value => {
        if (value.checked) {
          facetParams.push(value.value)
        }
      })
      let facet = {
        title: param.title,
        values: facetParams
      }
      return facet
    },
    filterProductsWithCheckbox (facets) {
      let arr = []
      facets.forEach(facet => {
        this.filteredProducts.forEach(product => {
          product.params.forEach(param => {
            if (param.name === facet.title) {
              facet.values.forEach(value => {
                if (param.value === value) {
                  arr.push(product)
                }
              })
            }
          })
        })
        this.filteredProducts = arr
        arr = []
      })
    },
    filterProductsWithRange (ranges) {
      let arr = []
      ranges.forEach(range => {
        this.filteredProducts.forEach(product => {
          product.params.forEach(param => {
            if (param.name === range.title) {
              if (+param.value >= range.min && +param.value <= range.max) {
                arr.push(product)
              }
            }
          })
        })
        this.filteredProducts = arr
        arr = []
      })
    }
  }
}
</script>

<style lang="stylus">
  .products-list
    padding-left 2rem
    align-items flex-start
</style>
