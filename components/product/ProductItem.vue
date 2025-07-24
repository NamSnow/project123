<template>
  <div class="flex flex-col gap-2.5 items-center w-full">
    <a :href="productLink">
      <img :src="product.image" :alt="product.content" class="rounded-3xl" />
    </a>

    <div class="font-bold text-xl pt-3">{{ product.content }}</div>

    <div class="text-[var(--color-accent)] font-bold">
      ${{ product.account }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  productLink: {
    type: String,
    default: "#",
  },
});
</script>
