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
                        <th colspan="3" class="text-blue-200">articles</th>
                        <th colspan="1" class="text-blue-200">prix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="3">SNEAKERS EN TISSU DE VILLE</td>
                        <td colspan="1">120</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- default button -->
        <button class="cart" @click.prevent="isOpen = true" v-else>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current w-4 h-4 mr-2"
            >
                <path
                  d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z"
                />
                <circle cx="10.5" cy="18.5" r="1.5" />
                <circle cx="17.5" cy="18.5" r="1.5" />
            </svg>
              
            <span class="checkout--count rounded-full bg-red-500 text-white absolute">2</span>
            <span>MON PANIER</span>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return{
            isOpen: false
        }
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
            th, td{ text-align: left;}
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
    }
}
</style>