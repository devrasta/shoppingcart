import { shallowMount } from '@vue/test-utils'
import Cart from '@/components/Cart.vue'

describe('Cart component', () =>{
    const wrapper = shallowMount(Cart, {
        // Stubbing nuxt-links in the navbar
        stubs: ["nuxt-link"],
        mocks: {
          "nuxt-Link": true,
          // Mocking the $store context object
          $store: {
            state: {
                cart: [],
                totalPrice : 0
            },
          },
          // Mocking the $route context object
          $route: {
            path: "mockedPath",
          },
        },    
    })
    describe('Cart is displaying', () => {
      test('is a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
      })
    })
    // features
    describe("Cart as correct text", () => {
        it("should display content", () => {
          expect(wrapper.html()).toContain("Articles")
        })
    })
})
