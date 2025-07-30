<template>
  <div class="bg-primary relative">
    <img
      src="/images/testimonial-bg.png"
      alt=""
      class="absolute top-0 left-0 w-full h-full z-0 group"
    />

    <div
      class="container mx-auto relative px-5 lg:py-25 py-12.5 text-white flex flex-col gap-7.5 md:gap-17.5 z-10"
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
        <div
          class="relative flex items-start sm:items-center mt-4 lg:mt-0 flex-col sm:flex-row gap-4 sm:gap-0"
        >
          <img
            src="/icons/google.svg"
            alt=""
            class="pr-2 sm:pr-10 border-r border-darkdivider border-solid"
          />
          <div class="pl-2 sm:pl-10 flex flex-col justify-between">
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

      <div class="flex flex-col lg:flex-row lg:gap-12.5">
        <div class="w-full relative group overflow-hidden rounded-[20px]">
          <img
            src="/images/testimonial-image.jpg"
            alt=""
            class="object-cover w-full h-full md:h-1/2 lg:h-full aspect-[1/0.6] lg:aspect-auto"
          />
        </div>

        <div class="flex flex-col items-center justify-between mt-10 lg:mt-0">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full relative overflow-hidden"
          >
            <div
              v-for="(testimonial, index) in showTes"
              :key="index"
              class="w-full transition duration-500"
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

          <div class="flex gap-5 mt-8 lg:mt-0 justify-evenly">
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

const currentIndex = ref(1);

// const showTes = computed(() => {
//   // let first = testis.value[currentIndex.value + 1];
//   // let second = testis.value[currentIndex.value];
//   // return [first, second];
// });

const showTes = ref([
  testis.value[currentIndex.value],
  testis.value[currentIndex.value + 1],
]);

// const computedShowTes = computed(() => {
//   return testis.value[currentIndex.value - 1], testis.value[currentIndex.value];
// });

console.log("Chung", currentIndex.value);

const nextTestimonial = () => {
  currentIndex.value++;
  console.log("Next", currentIndex.value);
  if (currentIndex.value >= testis.value.length) {
    currentIndex.value = 0;
  }
  // console.log(1);
  showTes.value.splice(0, 1);
  showTes.value.push(testis.value[currentIndex.value]);
};

const prevTestimonial = () => {
  currentIndex.value--;
  console.log("Prev", currentIndex.value);
  if (currentIndex.value < 0) {
    currentIndex.value = testis.value.length - 1;
  }
  // console.log(currentIndex.value);
  showTes.value.splice(1, 1);
  showTes.value.unshift(testis.value[currentIndex.value]);
};
</script>

<style lang="scss" scoped></style>
