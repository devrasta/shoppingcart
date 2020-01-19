export default {
    getCart (state) {
      return state.cart
    },
    getTotal (state) {
        return state.totalPrice
    },
    count (state) {
        return state.cart.length
    }
  }
  