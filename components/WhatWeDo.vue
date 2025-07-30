<template>
  <div class="bg-primary relative">
    <img
      src="/images/section-bg-shape-1.png"
      alt=""
      class="absolute right-0 bottom-0 transform scale-x-[-1]"
    />

    <div class="container">
      <div
        class="text-white flex flex-col md:flex-row lg:pt-25 pt-12.5 pb-12.5 lg:pb-25 gap-4 px-5"
      >
        <div class="relative lg:w-1/2">
          <div
            class="w-full z-0 relative group overflow-hidden rounded-[30px] h-120 sm:h-140 pr-10"
          >
            <img
              class="w-full object-contain aspect-[1/0.7]"
              src="/images/what-we-image-1.jpg"
              alt="Chai dầu CBD và lá cần sa"
            />
          </div>

          <div class="absolute bottom-0 right-0">
            <div
              class="relative object-contain z-10 group overflow-hidden rounded-[30px]"
            >
              <img
                class=""
                src="/images/what-we-image-2.jpg"
                alt="Chai dầu CBD trong môi trường nhiều cây cối"
                style="clip-path: inset(0px 0% 0px 0px)"
              />
            </div>

            <div
              class="absolute top-2 -left-35 z-50 border-primary border-10 bg-accent rounded-full flex items-center justify-center p-3"
            >
              <icons-test bigIcon="black" smallIcon="white" />
            </div>
          </div>
        </div>

        <div class="lg:pl-10 h-auto lg:w-1/2 flex flex-col gap-5 lg:gap-10">
          <Title
            :title="{
              content: 'What We Do ?',
              mainTitle: 'Delivering precision, purity,',
              subTitle: 'and care daily',
            }"
          />

          <div class="flex flex-col gap-5 lg:gap-10">
            <div
              class="border-b border-solid border-darkdivider pb-10 flex flex-col gap-3.75"
            >
              <div class="flex items-center">
                <div
                  class="bg-accent w-5 h-5 text-black rounded-full flex justify-center items-center mr-3 border-b border-solid border-[]"
                >
                  <i class="fa-solid fa-check"></i>
                </div>
                <div class="font-bold text-xl">
                  Crafting Precision for Every Drop
                </div>
              </div>

              <p>
                We believe that precision matters. Our expertly designed oil
                dropper bottles ensure controlled dispensing allowing you to use
                just the right amount.
              </p>
            </div>

            <div class="flex flex-col gap-3.75">
              <div class="flex items-center">
                <div
                  class="bg-accent w-5 h-5 text-black rounded-full flex justify-center items-center mr-3"
                >
                  <i class="fa-solid fa-check"></i>
                </div>
                <div class="font-bold text-xl">Designed for Essential Oils</div>
              </div>

              <p>
                We believe that precision matters. Our expertly designed oil
                dropper bottles ensure controlled dispensing allowing you to use
                just the right amount.
              </p>
            </div>
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
