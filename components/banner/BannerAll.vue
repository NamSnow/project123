<template>
  <div class="container">
    <div
      class="relative flex flex-col items-center justify-center py-13.75 lg:py-27.5 text-white gap-2.5"
    >
      <div
        class="text-[30px] sm:text-[45px] lg:text-7xl font-bold leading-[6/5] sm:text-sm text-base"
      >
        {{ formattedText }}
      </div>
      <div>
        <NuxtLink to="/">Home</NuxtLink> /
        <span>{{ formattedText }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const pageMap = [
  { path: "/contact_us", name: "Contact Us" },
  { path: "/about_us", name: "About Us" },
  { path: "/blog", name: "Lastest Blog" },
];

const formattedText = computed(() => {
  const currentPage = pageMap.find((item) => item.path === route.path);

  return currentPage ? currentPage.name : "Không tìm thấy trang";
});
</script>

<style lang="scss" scoped></style>
