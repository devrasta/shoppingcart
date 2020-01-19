<template>
    <div class="w-full products-container py-8">
      <div
        class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3"
      >
        <a
              class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              href="#"
        >Store</a>
      </div>
      <section>
        <div class="container mx-auto pb-12">
          <!-- block product -->
          <div class="w-full flex">
            <div class="w-3/4 flex items-center flex-wrap">
              <Product v-for="product in products" :key="product.id" :details="product" />
            </div>
            <!-- cart -->
            <Cart />
          </div>
        </div>
      </section>
    </div>
</template>

<script>
import Product from "~/components/Product";
import Cart from "~/components/Cart";

export default {
  components: {
    Product,
    Cart
  },
  data () {
    return {
      products: []
    }
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      await this.$axios.get('/products.json')
        .then((res) => {
          this.products = this.limit === null ? res.data : res.data
        })
    }
  }
};
</script>

<style lang="scss">
.products-container {
  background-color: #fff;
}
.checkout--count{
    padding: 2px 7px;
    font-size: 14px;
    top: -10px;
    right: -15px;
}
</style>