<template>
  <div class="flex flex-col items-center justify-center bg-yellow-500">
    <div class="flex gap-4 w-full relative overflow-hidden">
      <div
        v-for="(testimonial, index) in testis"
        :key="index"
        class="w-full transition duration-500"
        :class="{ 'hidden sm:block': index === 1 }"
      >
        <div v-show="index < 2">
          <div class="border-b border-solid border-darkdivider mb-7.5 pb-7.5">
            <div class="flex text-yellow-500">
              <i v-for="n in 5" :key="n" class="fa-solid fa-star"></i>
            </div>
            <p class="mt-5">"{{ testimonial.text }}"</p>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex gap-3.5">
              <img
                :src="testimonial.image"
                :alt="testimonial.author"
                class="rounded-md w-12 h-12 object-cover"
              />
              <div>
                <strong class="mb-1">{{ testimonial.author }}</strong>
                <div>{{ testimonial.role }}</div>
              </div>
            </div>
            <img
              src="/icons/phay.svg"
              alt="Quote icon"
              class="text-white w-8 h-8"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex lg:gap-5 mt-8 lg:mt-10 justify-evenly lg:justify-center max-lg:w-full"
    >
      <div
        class="text-white w-10 h-10 bg-darkdivider rounded-full flex justify-center items-center hover:bg-accent cursor-pointer transition duration-500 ease-in-out"
        @click="prevTestimonial"
      >
        <i class="fa-solid fa-arrow-left"></i>
      </div>

      <div
        class="text-white w-10 h-10 bg-darkdivider rounded-full flex justify-center items-center hover:bg-accent cursor-pointer transition duration-500 ease-in-out"
        @click="nextTestimonial"
      >
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
const testis = ref([
  {
    text: "These oil droppers are perfect for my essential oil blends! The precision and outstanding quality are truly remarkable. I've tried many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!",
    author: "Michael Carter 1111",
    role: "Aromatherapist",
    image: "/images/author-1.jpg",
  },
  {
    text: "These oil droppers are perfect for my essential oil blends! The precision and outstanding quality are truly remarkable. I've tried many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!",
    author: "Sarah Johnson 2222",
    role: "DIY Enthusiast",
    image: "/images/author-2.jpg",
  },
  {
    text: "These oil droppers are perfect for my essential oil blends! The precision and outstanding quality are truly remarkable. I've tried many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!",
    author: "David Lee 3333",
    role: "Small Business Owner",
    image: "/images/author-3.jpg",
  },
  {
    text: "These oil droppers are perfect for my essential oil blends! The precision and outstanding quality are truly remarkable. I've tried many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!",
    author: "David Lee 4444",
    role: "Small Business Owner",
    image: "/images/author-3.jpg",
  },
  {
    text: "These oil droppers are perfect for my essential oil blends! The precision and outstanding quality are truly remarkable. I've tried many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!",
    author: "David Lee 5555",
    role: "Small Business Owner",
    image: "/images/author-3.jpg",
  },
  {
    text: "These oil droppers are perfect for my essential oil blends! The precision and outstanding quality are truly remarkable. I've tried many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!",
    author: "David Lee 6666",
    role: "Small Business Owner",
    image: "/images/author-3.jpg",
  },
  {
    text: "These oil droppers are perfect for my essential oil blends! The precision and outstanding quality are truly remarkable. I've tried many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!",
    author: "David Lee 7777",
    role: "Small Business Owner",
    image: "/images/author-3.jpg",
  },
  {
    text: "These oil droppers are perfect for my essential oil blends! The precision and outstanding quality are truly remarkable. I've tried many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!",
    author: "David Lee 8888",
    role: "Small Business Owner",
    image: "/images/author-3.jpg",
  },
]);

const currentIndex = ref(0, 1);

const nextTestimonial = () => {};

const prevTestimonial = () => {};
</script>

<style lang="scss" scoped></style>
