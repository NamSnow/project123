<template>
  <div class="bg-secondary">
    <div
      class="container mx-auto px-5 py-12.5 lg:py-25 flex flex-col gap-5 sm:gap-10 lg:gap-20"
    >
      <div class="flex justify-between flex-col lg:flex-row">
        <div class="lg:w-1/2 lg:pr-7.5 pb-4 lg:pb-0">
          <Title
            :title="{
              content: 'Latest Blog',
              mainTitle: 'Latest insights, trends, and',
              subTitle: 'expert tips',
            }"
          />
        </div>
        <Button
          text="View All Blog"
          link="/"
          hoverBackgroundColor="black"
          hoverTextColor="white"
          bgArrow="#e2e1da"
          textIcon="black"
        />
      </div>

      <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7.5">
        <div
          class="rounded-t-[20px] overflow-hidden group"
          v-for="(product, index) in productItems"
          :key="index"
        >
          <div class="relative h-60 w-full object-cover">
            <img
              :src="product.image"
              alt=""
              class="relative transform transition duration-300 ease-in-out object-cover w-full h-full aspect-3/4 group-hover:scale-110"
            />
          </div>
          <div class="relative bg-white p-6.5 rounded-b-[20px] z-10">
            <div
              class="border-b border-solid border-[#0A2C0F1A] pb-7.5 mb-7.5 font-bold text-xl"
            >
              {{ product.title }}
            </div>
            <div class="flex justify-between flex-col sm:flex-row">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-calendar text-accent"></i>
                <div class="text-[#606060]">{{ product.time }}</div>
              </div>

              <div class="flex items-center gap-2 group cursor-pointer">
                <div class="text-accent font-bold group-hover:text-black">
                  Read More
                </div>
                <div
                  class="text-xl bg-accent text-white rounded-full w-6.5 h-6.5 flex items-center justify-center transition -rotate-45 group-hover:rotate-0 group-hover:bg-black"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "./Title.vue";

const productItems = ref([
  {
    image: "/images/post-1.jpg",
    title: "Glass vs. Plastic Droppers Which One is Right for You?",
    time: "May 5, 2025",
  },
  {
    image: "/images/why-choose-image.png",
    title: "Sustainable Beauty Why Reusable dropper are the future",
    time: "May 5, 2025",
  },
  {
    image: "/images/post-3.jpg",
    title: "Science Behind Precision Droppers and Their Benefits",
    time: "May 5, 2025",
  },
]);
</script>

<style lang="scss" scoped></style>
