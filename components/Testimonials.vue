<template>
  <div class="bg-primary relative">
    <img
      src="/images/testimonial-bg.png"
      alt=""
      class="absolute top-0 left-0 w-full h-full z-0 group object-cover"
    />

    <div class="container relative z-10">
      <div
        class="relative lg:py-25 py-12.5 text-white flex flex-col gap-2.5 sm:gap-5 lg:gap-12.5 z-10"
      >
        <div class="flex justify-between lg:flex-row flex-col gap-3.75 p-2.5">
          <div class="lg:w-1/2">
            <Title
              :title="{
                content: `Testimonials`,
                mainTitle: 'Real reviews trusted quality',
                subTitle: 'happy customers',
              }"
            />
          </div>

          <div class="relative flex items-center lg:mt-0 gap-5 lg:gap-10">
            <div
              class="pr-7.5 sm:pr-10 border-r border-darkdivider border-solid"
            >
              <icons-google class="max-lg:w-10 max-lg:h-10" />
            </div>
            <div class="flex flex-col gap-2.5 justify-between">
              <div class="flex text-yellow-500">
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

        <div class="flex flex-col lg:flex-row gap-7.5 lg:gap-12.5 p-2.5">
          <div
            class="w-full lg:w-3/10 relative group overflow-hidden rounded-[20px]"
          >
            <img
              src="/images/testimonial-image.jpg"
              alt=""
              class="object-cover w-full h-full md:h-1/2 lg:h-full aspect-5/3 lg:aspect-auto"
            />
          </div>

          <div
            class="flex flex-col items-center justify-center transition-all duration-500 overflow-hidden w-full lg:w-7/10"
          >
            <div class="w-full relative overflow-hidden">
              <div
                class="flex sm:gap-4 transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${slideX}%)` }"
              >
                <div
                  v-for="(testimonial, index) in testis"
                  :key="index"
                  class="flex-shrink-0 w-full sm:w-[calc(50%-16px)]"
                >
                  <div
                    class="border-b border-solid border-darkdivider mb-7.5 pb-7.5"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "./Title.vue";

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

const currentIndex = ref(0);

const slideX = computed(() => {
  if (typeof window === "undefined") return 0;
  const screenWidth = window.innerWidth;
  const itemsPerSlide = screenWidth >= 640 ? 2 : 1;
  const maxIndex = testis.value.length - itemsPerSlide;
  const normalizedIndex = Math.min(currentIndex.value, maxIndex);
  const slidePercentage = screenWidth >= 640 ? 50 : 100;
  return normalizedIndex * slidePercentage;
});

const nextTestimonial = () => {
  const totalItems = testis.value.length;
  const screenWidth = window.innerWidth;
  const itemsPerSlide = screenWidth >= 640 ? 2 : 1;
  const maxIndex = totalItems - itemsPerSlide;

  if (currentIndex.value >= maxIndex) {
    currentIndex.value = 0;
  } else {
    currentIndex.value++;
  }
};

const prevTestimonial = () => {
  const totalItems = testis.value.length;
  const screenWidth = window.innerWidth;
  const itemsPerSlide = screenWidth >= 640 ? 2 : 1;
  const maxIndex = totalItems - itemsPerSlide;

  if (currentIndex.value <= 0) {
    currentIndex.value = maxIndex;
  } else {
    currentIndex.value--;
  }
};
</script>

<style lang="scss" scoped></style>
