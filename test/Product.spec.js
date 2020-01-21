import { shallowMount, createLocalVue } from '@vue/test-utils'
import Product from '@/components/Product.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)
const details = {
  "name": "casque audio",
  "description": "Lorem ipsum dolor sit amet",
  "price": "302.50",
  "stock": "00",
  "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
}

describe('Product is displaying', () => {
  let mutations
  let store
  let wrapper
  let state

  beforeEach(() => {
    mutations = {
      add: jest.fn()
    }
    state = {
      cart: [],
      totalPrice : 0
    }
    store = new Vuex.Store({
        mutations,
        state
    })
    wrapper = shallowMount(Product, {
        propsData: {
          details: details
        },
        store,   
    })
  })
  test('it should be a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('it should display correct content from props', () => {
    expect(wrapper.vm.details.name).toEqual('casque audio')
  })
})
