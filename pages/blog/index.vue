<template>
  <div class="overflow-x-hidden">
    <Header />

    <LastestBlogItem />

    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
import LastestBlogItem from "~/components/LastestBlogItem.vue";

definePageMeta({
  banner: "BannerAll",
});
</script>

<style lang="scss" scoped></style>
