<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-2.5">
      <div class="w-2 h-2 bg-[#D1A132] rounded-full"></div>
      <div class="italic font-lora">{{ title.content }}</div>
    </div>
    <div class="lg:text-5xl md:text-4xl text-2xl font-semibold">
      {{ title.mainTitle }}
      <span class="font-lora font-normal italic">{{ title.subTitle }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue"; // Import defineProps for <script setup>

// Define the 'title' prop as an object
const props = defineProps({
  title: {
    type: Object,
    required: true,
    default: () => ({
      content: "",
      mainTitle: "",
      subTitle: "",
    }),
  },
});
</script>
