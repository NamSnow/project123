<template>
  <div class="overflow-x-hidden">
    <Header />

    <AbouttUs />

    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
import AboutUs from "~/components/ContactUs.vue";

definePageMeta({
  banner: "BannerAll",
});
</script>

<style lang="scss" scoped></style>
