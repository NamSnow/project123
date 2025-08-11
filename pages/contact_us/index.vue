<template>
  <div class="overflow-x-hidden">
    <Header />

    <ContactUs />

    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
import ContactUs from "~/components/ContactUs.vue";

definePageMeta({
  banner: "BannerAll",
});
</script>

<style lang="scss" scoped></style>
