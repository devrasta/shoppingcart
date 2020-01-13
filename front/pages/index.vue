<template>
  <div>
    <Nav />
    <section
      class="hero w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
    >
      <div class="container mx-auto">
        <div
          class="intro_text shadow-lg"
        >
          <div class="w-full bg-gray-500 mb-4">
            <h1 class="text-black text-2xl my-4">Simple shopping cart</h1>
          </div>
          <p class="underline">Stack technique:</p>
          <ul class="stack-list">
            <li>
              frontend:
              <ul class="ml-5" style="list-style-type:'-';">
                <li class="ml-2">&nbsp;nuxtjs + jest</li>
              </ul>
            </li>
            <li>
              backend:
              <ul class="ml-5" style="list-style-type:'-';">
                <li class="ml-2">&nbsp;laravel (rest api) + phpunit</li>
              </ul>
            </li>
            <li>graphql manipulant mariadb</li>
          </ul>
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
.hero {
  max-width: 1600px;
  height: 32rem;
  background-image: url("http://laravel_api.test/img/christiann-koepke-dQyS2pMYtok-unsplash.jpg");
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
    }
  }
}
</style>
