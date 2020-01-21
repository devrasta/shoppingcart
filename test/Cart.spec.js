import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Cart from '@/components/Cart.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Cart component', () => {
  let wrapper
  let state
  let store
  let article
  let mutations
  let getters

  beforeEach(() => {
    article = {
      "name": "casque audio",
      "description": "Lorem ipsum dolor sit amet",
        "price": "302.50",
        "stock": "00",
      "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    }
    state = {
      cart: [article],
      totalPrice : article.price
    }

    mutations = {
      remove: jest.fn()
    }

    getters = {
      getCart: () => state.cart,
      getTotal: () => state.totalPrice,
      count: () => 1
    }

    store = new Vuex.Store({
      state,
      mutations,
      getters
    })
    wrapper = mount(Cart, { store, localVue })
  })

  test('it should display opened cart when clicked', () => {
    expect(wrapper.vm.isOpen).toBe(false)
    let button = wrapper.find('button.cart')
    button.trigger('click')
    expect(wrapper.vm.isOpen).toBe(true)
  })

  test('it should match snapshot', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.vm.$el).toMatchSnapshot()
  })

  test('it should display product in cart', () => {
    expect(wrapper.vm.cart[0]).toEqual(article)
  })

  test('it should be able to remove product from cart', () => {
    let remove = wrapper.find({ ref: 'remove' })
    setTimeout(() => {
      expect(wrapper.find({ ref: 'container' }).isVisible()).toBe(false)
    }, 200);
  })
})