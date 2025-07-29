<template>
  <NuxtLink :to="link" class="text-white h-12.5 items-center group flex lg:m-0">
    <button
      class="px-7.5 cursor-pointer bg-accent rounded-full h-full font-bold relative overflow-hidden transition-colors duration-500"
      :style="{ '--hover-text-color': hoverTextColor }"
    >
      <span class="relative z-10 transition duration-500">{{ text }}</span>
      <span
        class="absolute left-1/2 top-0 bottom-0 w-0 transform -translate-x-1/2 group-hover:w-full transition-all duration-500 ease-out rounded-full"
        :style="{ 'background-color': hoverBackgroundColor }"
      ></span>
    </button>
    <button
      class="w-12.5 h-full rounded-full cursor-pointer transform -rotate-45 group-hover:rotate-0 transition-transform duration-500"
      :style="{ 'background-color': bgArrow }"
    >
      <i class="fa-solid fa-arrow-right" :style="{ color: textIcon }"></i>
    </button>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  hoverTextColor: {
    type: String,
    default: "black",
  },
  hoverBackgroundColor: {
    type: String,
    default: "black",
  },
  bgArrow: {
    type: String,
    default: "color-darkdivider",
  },
  textIcon: {
    type: String,
    default: "white",
  },
});
</script>
