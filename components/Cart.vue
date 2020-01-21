<template>
    <div class="w-1/4 p-4 relative">
        <!-- checkout panel -->
        <div class="open-checkout bg-blue-400 px-4 py-5" v-if="isOpen">
            <h2 class="text-white relative">MON PANIER
                <button class="close" @click.prevent="isOpen = false">&times;</button>
            </h2>
            <table class="w-full mt-4">
                <thead>
                    <tr>
                        <th colspan="3" class="text-blue-200 text-left pl-5">Articles</th>
                        <th colspan="1" class="text-blue-200 text-right">Prix</th>
                    </tr>
                </thead>
                <tbody v-show="cart.length > 0" ref="container">
                    <tr v-for="product in cart" :key="product.uuid" class="product_line">
                        <td colspan="3" class="text-left">
                            <span @click.prevent="remove(product)" ref="remove">
                                <img src="/close.svg" width="15" alt="" class="inline mb-1 cursor-pointer">
                            </span>
                            {{ product.name }}
                        </td>
                        <td colspan="1" class="text-right">{{ product.price }}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="pt-4">
                        <td colspan="3" @click.prevent="isOpen = false" class="cursor-pointer"> &lt; Continuer le shopping</td>
                        <td colspan="1">
                            <button class="btn-pay float-right">
                                payer
                                <span class="price block">
                                    € {{ total }}
                                </span>
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <!-- default button -->
        <button class="cart" @click.prevent="isOpen = true" v-else>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="4299e1"
                viewBox="0 0 24 24"
                class="fill-current w-4 h-4 mr-2"
            >
                <path
                  d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z"
                />
                <circle cx="10.5" cy="18.5" r="1.5" />
                <circle cx="17.5" cy="18.5" r="1.5" />
            </svg>
              
            <span v-if="count > 0" class="checkout--count rounded-full bg-red-500 text-white absolute">{{ count }}</span>
            <span class="text-blue-700">MON PANIER</span>
        </button>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
    data() {
        return{
            isOpen: false
        }
    },
    computed: mapGetters({
        cart: 'getCart',
        count: 'count',
        total: 'getTotal'
    }),
    methods: {
        ...mapMutations({
            remove: 'remove'
        })
    }
}
</script>

<style lang="scss">
button.cart{
    outline: 0;
    @apply bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center relative;
}
.open-checkout{
    h2{
        .close{
            position: absolute;
            right: 1rem;
            top: 0;
            color: #FFF;
            background: none;
            line-height: 20px;
            font-size: 30px;
        }
    }
    table{
        tr{
            td{
                color: #FFF;
            }
        }
        tbody tr{
            td{
                font-size: .90rem;
                text-transform: lowercase;
            }
        }
        tfoot{
            tr td{
                padding-top: 3rem;
                font-size: .75rem;
                .btn-pay{
                    @apply font-bold py-1 px-2 rounded bg-blue-700 text-white;
                }
            }
        }
    }
}
</style>