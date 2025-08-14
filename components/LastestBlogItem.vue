<template>
  <div class="bg-background">
    <div class="container">
      <div
        class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7.5 py-12.5 lg:py-25 px-3.75"
      >
        <div
          class="rounded-t-[20px] overflow-hidden group"
          v-for="(product, index) in productItems"
          :key="index"
        >
          <div
            class="relative w-full object-cover max-h-122 sm:max-h-77.25 lg:max-h-66"
          >
            <img
              :src="product.image"
              alt=""
              class="relative transform transition duration-300 ease-in-out object-cover w-full h-auto aspect-5/3 group-hover:scale-110"
            />
          </div>
          <div
            class="relative bg-white p-5 lg:p-6.25 rounded-b-[20px] z-10 @container"
          >
            <div
              class="border-b border-solid border-divider pb-5 mb-5 lg:pb-7.5 lg:mb-7.5 font-bold text-lg sm:text-xl h-full"
            >
              <NuxtLink to="" class="line-clamp-2 cursor-pointer">
                {{ product.title }}
              </NuxtLink>
            </div>
            <div class="flex justify-between flex-col @3xs:flex-row">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-calendar text-accent"></i>
                <div class="text-text">{{ product.time }}</div>
              </div>

              <NuxtLink
                to=""
                class="flex items-center gap-2 group/button cursor-pointer"
              >
                <div
                  class="text-accent font-bold group-hover/button:text-black"
                >
                  Read More
                </div>
                <div
                  class="bg-accent text-white rounded-full w-8.5 h-8.5 flex items-center justify-center transition -rotate-45 group-hover/button:rotate-0 group-hover/button:bg-black flex-none"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  {
    image: "/images/post-4.jpg",
    title: "Glass vs. Plastic Droppers Which One is Right for You?",
    time: "May 5, 2025",
  },
  {
    image: "/images/post-5.jpg",
    title: "Sustainable Beauty Why Reusable dropper are the future",
    time: "May 5, 2025",
  },
  {
    image: "/images/post-6.jpg",
    title: "Science Behind Precision Droppers and Their Benefits",
    time: "May 5, 2025",
  },
]);
</script>

<style lang="scss" scoped></style>
