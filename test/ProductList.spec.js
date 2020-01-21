import { shallowMount } from '@vue/test-utils'
import ProductList from '@/components/ProductList.vue'
import Product from '@/components/Product.vue'
import Cart from '@/components/Cart.vue'

describe('ProductList is displaying', () => {
  const wrapper = shallowMount(ProductList)
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('it should fetch products', () =>{
    setTimeout(() => {
      expect(wrapper.vm.products).not.toEqual([])
    }, 3000);
  })
  test('it should contains product component', () =>{
    setTimeout(() => {
      expect(wrapper.contains(Product)).toBe(true)
    }, 3000);
  })
  test('it should contains cart component', () =>{
    expect(wrapper.contains(Cart)).toBe(true)
  })
})
