<template>
  <div class="bg-primary relative">
    <img
      src="/images/section-bg-shape-1.png"
      class="absolute bottom-0 right-0 z-0 transform scale-x-[-1]"
      alt=""
    />

    <img
      src="/images/section-bg-shape-3.png"
      class="absolute z-0 top-0 left-0"
      alt=""
    />

    <div class="container">
      <div
        class="flex flex-col gap-2.5 sm:gap-5 lg:gap-15 py-12.5 lg:py-25 relative z-50"
      >
        <div
          class="flex lg:items-center flex-col lg:flex-row p-2.5 max-lg:gap-2.5 text-white lg:mb-5"
        >
          <div class="lg:w-1/2">
            <Title
              :title="{
                content: 'Our Core Values',
                mainTitle: 'Purity, transparency, &',
                subTitle: 'deep respect for nature',
              }"
            />
          </div>

          <p class="lg:pl-7.5 lg:w-1/2">
            We believe that true wellness begins with what you put on and into
            your body. That’s why our oils are crafted using nature’s purest
            ingredients
          </p>
        </div>

        <div class="flex gap-7.5 p-2.5 max-lg:flex-wrap">
          <div class="w-full lg:w-1/2 flex flex-col sm:flex-row gap-7.5">
            <div
              class="bg-white rounded-[20px] flex flex-col gap-3.75 lg:gap-6.25 p-5 sm:p-7.5 w-full sm:w-1/2"
            >
              <div>
                <div
                  class="bg-accent w-12.5 h-12.5 lg:w-15 lg:h-15 rounded-full flex items-center justify-center mb-5 lg:mb-7.5"
                >
                  <icons-pre
                    class="w-7.5 h-7.5 lg:w-8.75 lg:h-8.75 text-white"
                  />
                </div>

                <div
                  class="font-bold text-black mb-2.5 text-lg sm:text-xl leading-[6/5]"
                >
                  Natural Healing
                </div>

                <p class="text-text">
                  Smart packaging that prevents leaks and avoids.
                </p>
              </div>

              <div class="flex flex-col gap-2.5 lg:gap-3.75">
                <div class="flex items-center">
                  <div
                    class="bg-accent flex-none w-4.5 h-4.5 text-white rounded-full flex justify-center items-center"
                  >
                    <i class="fa-solid fa-check text-xs"></i>
                  </div>
                  <div class="ml-2.5 text-text">Easy And Mess-Free Oil.</div>
                </div>

                <div class="flex items-center">
                  <div
                    class="bg-accent flex-none w-4.5 h-4.5 text-white rounded-full flex justify-center items-center"
                  >
                    <i class="fa-solid fa-check text-xs"></i>
                  </div>
                  <div class="ml-2.5 text-text">Prevents Spills And Waste.</div>
                </div>
              </div>
            </div>

            <div
              class="bg-white rounded-[20px] flex flex-col gap-3.75 lg:gap-6.25 p-5 sm:p-7.5 w-full sm:w-1/2"
            >
              <div>
                <div
                  class="bg-accent w-12.5 h-12.5 lg:w-15 lg:h-15 rounded-full flex items-center justify-center mb-5 lg:mb-7.5"
                >
                  <icons-pre
                    class="w-7.5 h-7.5 sm:w-8.75 sm:h-8.75 text-white"
                  />
                </div>

                <div
                  class="font-bold text-black mb-2.5 text-lg sm:text-xl leading-[6/5]"
                >
                  Easy & Mess-Free
                </div>

                <p class="text-text">
                  Smart packaging that prevents leaks and avoids.
                </p>
              </div>

              <div class="flex flex-col gap-2.5 lg:gap-3.75">
                <div class="flex items-center">
                  <div
                    class="bg-accent flex-none w-4.5 h-4.5 text-white rounded-full flex justify-center items-center"
                  >
                    <i class="fa-solid fa-check text-xs"></i>
                  </div>
                  <div class="ml-2.5 text-text">Easy And Mess-Free Oil.</div>
                </div>

                <div class="flex items-center">
                  <div
                    class="bg-accent flex-none w-4.5 h-4.5 text-white rounded-full flex justify-center items-center"
                  >
                    <i class="fa-solid fa-check text-xs"></i>
                  </div>
                  <div class="ml-2.5 text-text">Prevents Spills And Waste.</div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full lg:w-1/2">
            <img
              src="/images/core-value-image.jpg"
              alt=""
              class="rounded-[20px] object-cover w-full h-full aspect-2/1"
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
