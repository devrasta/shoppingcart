export default {
    add (state, productItem) {
      if(state.cart.length > 0){
        if(state.cart.includes(productItem)){
          productItem.stock ++
        }
        state.cart.push(productItem)
      } else {
        state.cart.push(productItem)
      }
      state.count ++
    },
  
    remove (state, productItem) {
        state.cart = state.cart.filter((item) => {
            return item !== productItem
        })
    }
  }
  