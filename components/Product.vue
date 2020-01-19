<template>
    <div class="md:w-1/3 xl:w-1/4 p-6 flex flex-col hover:shadow-lg">
            <div class="w-full img_container" v-bind:style="{ 'background-image': 'url(' + details.image + ')' }"></div>
            <div class="pt-3 flex items-center justify-between">
              <p class>{{ details.name }}</p>
              <img 
                src="/cart.svg" 
                alt="ajouter au panier"
                class="cursor-pointer"
                width="30px"
                @click.prevent="add(details)" />
            </div>
            <p class="pt-1 text-gray-900">€{{ details.price }}</p>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    props: {
        details: {
            type: Object,
            default: {},
            required: true
        }
    },
    methods: {
        ...mapMutations({
            add: 'cart/add'
        })
    }
}
</script>

<style>
.flex .img_container{
    height: 180px;
    background-size: cover;
}
p{
    text-transform: uppercase;
}
</style>