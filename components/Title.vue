<template>
  <div class="flex flex-col gap-2.5 lg:gap-3.75">
    <div class="flex items-center gap-2.5">
      <div class="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
      <div class="italic text-lora text-base lg:text-lg">
        {{ title.content }}
      </div>
    </div>
    <div
      class="text-[26px] sm:text-4xl lg:text-[46px] font-semibold leading-[6/5]"
    >
      {{ title.mainTitle }}
      <span class="font-normal italic">{{ title.subTitle }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

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
