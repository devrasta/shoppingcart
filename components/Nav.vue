<template>
  <!--Nav-->
  <nav id="header" class="w-full z-30 top-0 py-1">
    <div
      class="w-full mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3"
    >

      <!--<div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
        <nav>
          <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li>
              <a
                class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                href="#"
              >Shop</a>
            </li>
            <li>
              <a
                class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                href="#"
              >A propos</a>
            </li>
          </ul>
        </nav>
      </div>-->

      <div class="order-1 md:order-2 mx-auto">
        <nuxt-link to="/"
          class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
          href="#"
        >
          <logo :logo-width="40" />
          <H1 class="text-2xl block ml-3">
              Simple store
          </H1>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "~/components/Logo";
export default {
  components: {
    Logo
  }
};
</script>

<style>
</style>