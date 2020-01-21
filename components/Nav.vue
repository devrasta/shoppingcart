<template>
  <!--Nav-->
  <nav id="header" class="w-full z-30 top-0 py-1">
    <div
      class="w-full mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3"
    >

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