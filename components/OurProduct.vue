<template>
  <div class="bg-secondary">
    <div class="container">
      <div class="px-5 lg:py-25 py-12.5 flex flex-col lg:gap-10 gap-5">
        <div
          class="flex flex-col lg:flex-row justify-between items-start lg:items-center p-2.5 lg:mb-5 gap-5 lg:gap-0"
        >
          <div class="lg:pr-7.5 h-auto w-full lg:w-[52%]">
            <Title
              :title="{
                content: 'Our Product',
                mainTitle: 'Premium droppers for pure,',
                subTitle: 'precise application',
              }"
            />
          </div>

          <Button
            text="View All Products"
            link="/"
            hoverTextColor="white"
            bgArrow="#e2e1da"
            textIcon="black"
          />
        </div>

        <div
          class="p-2.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7.5"
        >
          <ProductItem
            v-for="(product, index) in productItems"
            :key="index"
            :product="product"
          />
        </div>

        <div class="p-2.5 text-text text-center">
          <span
            class="bg-accent text-white px-2.5 py-1 mr- rounded-full font-bold mr-3"
            >Free</span
          >Let’s make something great work together.
          <span
            class="cursor-pointer text-accent text-lora hover:text-black transition-all duration-500 ease-out font-semibold"
            >Get Free Quote</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "./Title.vue";

import { ref } from "vue";

const productItems = ref([
  {
    id: 1,
    image: "/images/product-img-1.jpg",
    content: "Eco Glow Dropper",
    account: "16.00",
  },
  {
    id: 2,
    image: "/images/product-img-2.jpg",
    content: "Vital Oil Dropper",
    account: "35.00",
  },
  {
    id: 3,
    image: "/images/product-img-3.jpg",
    content: "Golden Drip Bottle",
    account: "45.00",
  },
  {
    id: 4,
    image: "/images/product-img-4.jpg",
    content: "Zen Flow Dropper",
    account: "62.00",
  },
]);
</script>

<style lang="scss" scoped></style>
