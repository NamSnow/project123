<template>
  <NuxtLink
    :to="link"
    class="text-white h-[50px] items-center group flex lg:m-0"
  >
    <button
      class="px-7.5 cursor-pointer bg-[#d1a132] rounded-full h-full font-bold relative overflow-hidden transition-colors duration-500"
      :class="`group-hover:text-${hoverTextColor}`"
    >
      <span class="relative z-10">{{ text }}</span>
      <span
        class="absolute left-1/2 top-0 bottom-0 w-0 transform -translate-x-1/2 group-hover:w-full transition-all duration-500 ease-out rounded-full"
        :class="`bg-${hoverBackgroundColor}`"
      ></span>
    </button>
    <button
      class="w-[50px] h-full rounded-full cursor-pointer transform -rotate-45 group-hover:rotate-0 transition-transform duration-500"
      :class="`bg-[${bgArrow}]`"
    >
      <i class="fa-solid fa-arrow-right text-black"></i>
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
    default: "#E2E1DA",
    // ffffff1a
  },
});
</script>
