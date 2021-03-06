export const state = () => ({
    cart: [],
    totalPrice : 0
})

export const getters = {
    getCart (state) {
      return state.cart
    },
    getTotal (state) {
        return state.totalPrice
    },
    count (state) {
        return parseInt(state.cart.length)
    }
}

export const mutations = {
    add (state, productItem) {
      if(state.cart.length > 0){
        if(state.cart.includes(productItem)){
          productItem.stock ++
        }
        state.cart.push(productItem)
      } else {
        state.cart.push(productItem)
      }
      state.totalPrice += parseFloat(productItem.price, 2)
      state.count ++
    },
  
    remove (state, productItem) {
        let productIndex = state.cart.indexOf(productItem)
        state.cart.splice(productIndex, 1)
        state.totalPrice -= parseFloat(productItem.price, 2)
    }
}
  