<template>
  <div class="bg-[var(--color-primary)]">
    <div
      class="container mx-auto px-5 lg:py-25 py-12.5 text-white flex flex-col gap-17.5"
    >
      <div class="flex justify-between lg:flex-row flex-col py-2.5">
        <div class="lg:w-1/2">
          <Title
            :title="{
              content: `Testimonials`,
              mainTitle: 'Real reviews trusted quality',
              subTitle: 'happy customers',
            }"
          />
        </div>
        <div class="flex items-center mt-4 lg:mt-0">
          <img
            src="/icons/google.svg"
            alt=""
            class="pr-10 border-r border-[var(--color-darkdivider)] border-solid"
          />
          <div class="pl-10 flex flex-col justify-between">
            <div class="flex text-yellow-500 flex-col md:flex-row">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p>1000+ Our Happy Customer Review</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row lg:gap-12.5">
        <img
          src="/images/testimonial-image.jpg"
          alt=""
          class="lg:w-3/10 w-full rounded-[20px]"
        />

        <div class="flex flex-col items-center justify-between mt-10 lg:mt-0">
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full justify-center"
          >
            <div
              v-for="(testimonial, index) in currentTestimonials"
              :key="index"
              class="w-full"
            >
              <div
                class="border-b border-solid border-[var(--color-darkdivider)] mb-7.5 pb-7.5"
              >
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
                    <strong class="mb-[3px]">{{ testimonial.author }}</strong>
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

          <div class="flex gap-5 mt-8 lg:mt-0">
            <div
              class="text-white w-10 h-10 bg-[var(--color-darkdivider)] rounded-full flex justify-center items-center hover:bg-[var(--color-accent)] cursor-pointer transition duration-500 ease-in-out"
              @click="prevTestimonial"
            >
              <i class="fa-solid fa-arrow-left"></i>
            </div>

            <div
              class="text-white w-10 h-10 bg-[var(--color-darkdivider)] rounded-full flex justify-center items-center hover:bg-[var(--color-accent)] cursor-pointer transition duration-500 ease-in-out"
              @click="nextTestimonial"
            >
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "./Title.vue";

const testimonials = ref([
  {
    text: "These oil droppers are perfect for my essential oil blends! The precision and outstanding quality are truly remarkable. I've tried many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!",
    author: "Michael Carter 1",
    role: "Aromatherapist",
    image: "/images/author-1.jpg",
  },
  {
    text: "These oil droppers are perfect for my essential oil blends! The precision and outstanding quality are truly remarkable. I've tried many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!",
    author: "Sarah Johnson 2",
    role: "DIY Enthusiast",
    image: "/images/author-2.jpg",
  },
  {
    text: "These oil droppers are perfect for my essential oil blends! The precision and outstanding quality are truly remarkable. I've tried many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!",
    author: "David Lee 3",
    role: "Small Business Owner",
    image: "/images/author-3.jpg",
  },
  {
    text: "These oil droppers are perfect for my essential oil blends! The precision and outstanding quality are truly remarkable. I've tried many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!",
    author: "David Lee 4",
    role: "Small Business Owner",
    image: "/images/author-3.jpg",
  },
  {
    text: "These oil droppers are perfect for my essential oil blends! The precision and outstanding quality are truly remarkable. I've tried many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!",
    author: "David Lee 5",
    role: "Small Business Owner",
    image: "/images/author-3.jpg",
  },
  {
    text: "These oil droppers are perfect for my essential oil blends! The precision and outstanding quality are truly remarkable. I've tried many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!",
    author: "David Lee 6",
    role: "Small Business Owner",
    image: "/images/author-3.jpg",
  },
  {
    text: "These oil droppers are perfect for my essential oil blends! The precision and outstanding quality are truly remarkable. I've tried many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!",
    author: "David Lee 7",
    role: "Small Business Owner",
    image: "/images/author-3.jpg",
  },
  {
    text: "These oil droppers are perfect for my essential oil blends! The precision and outstanding quality are truly remarkable. I've tried many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!",
    author: "David Lee 8",
    role: "Small Business Owner",
    image: "/images/author-3.jpg",
  },
]);
</script>

<style lang="scss" scoped></style>
