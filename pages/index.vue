<template>
  <div>
    <Nav />
    <section
      class="hero w-full mx-auto bg-nordic-gray-light flex md:items-center bg-cover bg-right"
    >
      <div class="container mx-auto">
        <div
          class="intro_text shadow-lg"
        >
          <div class="w-full bg-gray-500 mb-4">
            <h1 class="text-black text-2xl my-4">Simple shopping cart</h1>
          </div>
          <p>stack technique:</p>
          <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              <a href="https://nuxtjs.org/">
              #nuxtjs
              </a>
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              <a href="https://vuex.vuejs.org/">
                #vuex
              </a>
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              <a href="https://jestjs.io/">
                #jest
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
    <product-list />
    <!-- footer -->
    <footer class="container mx-auto bg-white py-8 border-t border-gray-400">
      <div class="container flex px-3 py-8">
        <div class="w-full mx-auto flex flex-wrap">
          <div class="flex w-full lg:w-1/2">
            <div class="px-3 md:px-0">
              <h3 class="font-bold text-blue-500">A propos</h3>
              <p
                class="py-4"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia.</p>
            </div>
          </div>
          <div class="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
            <div class="px-3 md:px-0">
              <h3 class="font-bold text-blue-500">Joindre l'auteur</h3>
              <ul class="list-reset items-center pt-3">
                <li>
                  <img
                    width="40"
                    class="image-content lazy-load"
                    alt="Image showing the new LinkedIn “in” bug (English language)."
                    srcset="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Nav from "~/components/Nav";
import ProductList from "~/components/ProductList";

export default {
  components: {
    Nav,
    ProductList
  }
};
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
#__layout{
  max-width: 1600px;
  margin: 0 auto;
  .hero {
  height: 32rem;
  background-image: url("/store.jpg");
  position: relative;
  z-index: 1;

  &:after {
    content: "";
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
  .container{
    z-index: 4;
    .intro_text {
      width: 320px;
      background-color: rgba(255, 255, 255, 0.4);
      margin: 10rem auto;
      @apply rounded-lg flex flex-col justify-center items-start pb-5 tracking-wide;
      h1{
        @apply px-6;
      }
      p{
        margin-left: 2rem;
      }
      .stack-list{
        margin-left: 4rem;
        list-style-type: circle;
      }
      @media screen and (max-width: 840px) {
        margin: auto;
      }
    }
  }
}
}
</style>
