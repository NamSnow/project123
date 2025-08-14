<template>
  <div class="relative">
    <img
      src="/images/section-bg-shape-1.png"
      class="absolute bottom-0 left-0 z-0"
      alt=""
    />

    <div class="container">
      <div
        class="py-12.5 lg:py-25 flex relative z-50 items-center justify-center flex-col lg:flex-row max-lg:gap-2.5"
      >
        <div class="w-full lg:w-1/2 p-2.5 flex flex-col gap-2.5 lg:gap-3.75">
          <div>
            <Title
              :title="{
                content: 'Our Commitment',
                mainTitle: 'Delivering natural godness,',
                subTitle: 'without compromise',
              }"
            />
          </div>

          <p class="text-text lg:mt-1.25 mb-5 lg:mb-6.25">
            Crafted with superior design, engineered with precision, and built
            to commitment to excellence ensures every detail.
          </p>

          <div class="w-full flex gap-2.5 lg:gap-3.75 flex-col">
            <div class="flex items-center">
              <div
                class="bg-accent flex-none w-4.5 h-4.5 text-white rounded-full flex justify-center items-center"
              >
                <i class="fa-solid fa-check text-xs"></i>
              </div>
              <div class="ml-2.5 text-text">
                Precision in every drop designed for perfect application
              </div>
            </div>

            <div class="flex items-center">
              <div
                class="bg-accent flex-none w-4.5 h-4.5 text-white rounded-full flex justify-center items-center"
              >
                <i class="fa-solid fa-check text-xs"></i>
              </div>
              <div class="ml-2.5 text-text">
                Leak-Proof & durable protecting your precious Oils with care
              </div>
            </div>

            <div class="flex items-center">
              <div
                class="bg-accent flex-none w-4.5 h-4.5 text-white rounded-full flex justify-center items-center"
              >
                <i class="fa-solid fa-check text-xs"></i>
              </div>
              <div class="ml-2.5 text-text">
                Precision in every drop designed for perfect application
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row mt-5 sm:mt-6.25">
            <div
              class="flex flex-col gap-3.75 lg:gap-5 w-full sm:w-1/2 group bg-accent p-5 sm:p-7.5 max-sm:rounded-t-[20px] sm:rounded-l-[20px]"
            >
              <div
                class="bg-black group-hover:bg-white w-12.5 h-12.5 lg:w-15 lg:h-15 rounded-full flex items-center justify-center flex-none transition duration-500"
              >
                <icons-pre
                  class="w-7.5 h-7.5 lg:w-8.75 lg:h-8.75 text-white group-hover:text-black transition duration-500"
                />
              </div>

              <div
                class="font-bold text-lg sm:text-xl text-white leading-[1.2em]"
              >
                Infusing Every Drop with Natural Goodness
              </div>
            </div>

            <div
              class="flex flex-col gap-3.75 lg:gap-5 w-full sm:w-1/2 group bg-black p-5 sm:p-7.5 max-sm:rounded-b-[20px] sm:rounded-r-[20px]"
            >
              <div
                class="bg-accent group-hover:bg-white w-12.5 h-12.5 lg:w-15 lg:h-15 rounded-full flex items-center justify-center flex-none transition duration-500"
              >
                <icons-pre
                  class="w-7.5 h-7.5 lg:w-8.75 lg:h-8.75 text-white group-hover:text-black transition duration-500"
                />
              </div>

              <div
                class="font-bold text-lg sm:text-xl text-white leading-[1.2em]"
              >
                Infusing Every Drop with Natural Goodness
              </div>
            </div>
          </div>
        </div>

        <div
          class="relative w-full lg:w-1/2 p-2.5 max-h-182.5 max-w-200.75 sm:max-lg:max-h-264.5 lg:max-h-165 overflow-hidden rounded-[20px] aspect-2/3 pt-8.75 pr-7.5 pb-6.25 pl-15 sm:pr-10 sm:pl-25 sm:pt-15 lg:pr-12.5 sm:pb-10 lg:pl-37.5"
        >
          <img
            src="/images/commitment-img-1.jpg"
            alt=""
            class="object-cover w-full h-full rounded-[20px]"
          />

          <div
            class="absolute bottom-2.5 left-2.5 lg:left-12.5 w-37.5 h-58.75 sm:w-60 sm:h-94"
          >
            <img
              src="/images/commitment-img-2.jpg"
              class="rounded-full border-[10px] border-solid border-white object-cover w-full h-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "./Title.vue";
</script>

<style lang="scss" scoped></style>
