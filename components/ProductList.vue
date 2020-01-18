<template>
  <div class="w-full products-container py-8">
    <section>
      <div class="container mx-auto pt-4 pb-12">
        <FilterNav />
        <!-- block product -->
        <div class="w-full flex items-center flex-wrap">
          <Product v-for="product in products" :key="product.id" :details="product" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FilterNav from "~/components/FilterComponent";
import Product from "~/components/Product";
export default {
  components: {
    FilterNav,
    Product
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
          console.log(typeof res.data)
        })
    }
  }
};
</script>

<style lang="scss">
.products-container {
  background-color: #fff;
}
</style>