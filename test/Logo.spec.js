import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo is displaying', () => {
  const wrapper = mount(Logo, {
    propsData : {
      logoWidth : 20
    }
  })
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('it should has width given by props', () => {
    expect(wrapper.vm.logoWidth).toEqual(20)
  })
})
