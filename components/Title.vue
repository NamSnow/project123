<template>
  <div class="flex flex-col gap-3.75">
    <div class="flex items-center gap-2.5">
      <div class="italic text-lora text-lg">{{ title.content }}</div>
    </div>
    <div
      class="text-2xl sm:text-4xl lg:text-[46px] font-semibold leading-[1.2em]"
    >
      {{ title.mainTitle }}
      <span class="font-normal italic">{{ title.subTitle }}</span>
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
