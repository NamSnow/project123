<template>
  <div class="bg-secondary">
    <div class="container">
      <div class="py-12.5 lg:py-25">
        <div class="flex justify-between">
          <div>Showing all {{}} results</div>

          <select name="" id="">
            <option value="">Default sorting</option>
            <option value="">Soft by popularity</option>
            <option value="">Soft by avarage rating</option>
            <option value="">Soft bt lastest</option>
            <option value="">Soft by price: low to high</option>
            <option value="">Soft by price: high to low</option>
          </select>
        </div>

        <div class="py-10">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-14.5 gap-y-12"
          >
            <NuxtLink
              to=""
              v-for="(product, index) in products"
              :key="index"
              class="font-bold leading-[1.2em] flex flex-col items-center"
            >
              <div class="mb-5">
                <img :src="product.image" alt="" class="rounded-[20px]" />
              </div>

              <div class="mb-2.5 text-xl text-black">{{ product.title }}</div>

              <div
                class="mb-2.5"
                v-for="star in 5"
                :key="star"
                :class="{ 'text-accent': star <= rating }"
              ></div>

              <div class="flex">
                <div class="text-accent opacity-50">
                  ${{ product.oldMoney }}
                </div>

                <div class="text-accent">${{ product.newMoney }}</div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const products = ref([
  {
    image: "/images/product-img-1.jpg",
    title: "Eco Glow Dropper",
    star: 5,
    oldMoney: "20.00",
    newMoney: "16.00",
  },
  {
    image: "/images/product-img-2.jpg",
    title: "Eco Radiance Dropper",
    star: 4,
    oldMoney: "50.00",
    newMoney: "45.00",
  },
  {
    image: "/images/product-img-3.jpg",
    title: "Golden Drip Bottle",
    star: 5,
    oldMoney: "50.00",
    newMoney: "45.00",
  },
  {
    image: "/images/product-img-4.jpg",
    title: "Nature Dew Dropper",
    star: 5,
    oldMoney: "60.00",
    newMoney: "50.00",
  },
  {
    image: "/images/product-img-5.jpg",
    title: "Pure Earth Dropper",
    star: 5,
    oldMoney: "45.00",
    newMoney: "41.00",
  },
  {
    image: "/images/product-img-6.jpg",
    title: "Verdant Veil Dropper",
    star: 4,
    oldMoney: "49.00",
    newMoney: "39.00",
  },
  {
    image: "/images/product-img-7.jpg",
    title: "Vital Oil Dropper",
    star: 5,
    oldMoney: "45.00",
    newMoney: "35.00",
  },
  {
    image: "/images/product-img-8.jpg",
    title: "Zen Flow Dropper",
    star: 4,
    oldMoney: "70.00",
    newMoney: "62.00",
  },
]);
</script>

<style lang="scss" scoped></style>
