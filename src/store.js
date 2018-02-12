import json from './products.json'

const store = {
  products: json.products,
  filteredProducts: [],
  basket: []
}

export default store
