<template>
  <div v-if="pending">Loading....</div>
  <div v-else-if="error">Loi ERROR</div>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const {
  data: products,
  pending,
  error,
} = useFetch("https://api.escuelajs.co/api/v1/products");

products.value = data.value;
</script>

<style lang="scss" scoped></style>
