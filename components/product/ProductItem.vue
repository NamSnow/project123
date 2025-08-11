<template>
  <div class="flex flex-col gap-2.5 items-center w-full">
    <NuxtLink
      :to="productLink"
      class="h-full sm:h-88 max-lg:max-w-88 flex items-center"
    >
      <img
        :src="product.image"
        :alt="product.content"
        class="rounded-3xl object-contain"
      />
    </NuxtLink>

    <div class="font-bold text-xl pt-3">{{ product.content }}</div>

    <div class="flex gap-2.5">
      <div class="text-accent line-through font-bold opacity-50">
        ${{ product.accountOld }}
      </div>
      <div class="text-accent font-bold">${{ product.accountNew }}</div>
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
