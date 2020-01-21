import { shallowMount, config, mount } from '@vue/test-utils'
import Nav from '@/components/Nav.vue'
import Logo from '@/components/Logo.vue'
import VueTestUtils from '@vue/test-utils';


// Mock Nuxt components
config.stubs['nuxt-link'] = '<a><slot /></a>';
const wrapper = shallowMount(Nav, {
    stubs: ['router-link', 'router-view']
})
describe('Navigation is displaying', () => {
    
    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
    test('contains Logo component', () => {
        expect(wrapper.contains(Logo)).toBe(true)
    })
    test('has link on logo', () => {
        expect(wrapper.find('a').is('a')).toBe(true)
    })
})