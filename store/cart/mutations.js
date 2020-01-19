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
        // let newCart = state.cart.filter((item) => {
        //     return item === productItem
        // })
        let productIndex = state.cart.indexOf(productItem)
        console.log(productIndex)
        state.cart.splice(productIndex, 1)
        // return state.cart = newCart
    }
  }
  