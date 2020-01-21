import { shallowMount, config } from '@vue/test-utils'
import Nav from "@/components/Nav";
import ProductList from "@/components/ProductList";
import home from "@/pages/index"


// Mock Nuxt components
config.stubs['nuxt-link'] = '<a><slot /></a>';

describe('Navigation is displaying', () => {
    const wrapper = shallowMount(home, {
        stubs: ['router-link', 'router-view']
    })

    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
    test('contains ProductList component', () => {
        expect(wrapper.contains(ProductList)).toBe(true)
    })
    test('contains Nav component', () => {
        expect(wrapper.contains(Nav)).toBe(true)
    })
})