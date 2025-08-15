<template>
  <div>
    <Header />

    <Shop />

    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
import Shop from "~/components/Shop.vue";

definePageMeta({
  banner: "BannerAll",
});
</script>

<style lang="scss" scoped></style>
