<template>
  <div class="bg-[var(--color-primary)] px-5 relative">
    <img
      src="/images/section-bg-shape-1.png"
      alt=""
      class="absolute right-0 bottom-0 transform scale-x-[-1]"
    />
    <div
      class="container text-white flex flex-col md:flex-row mx-auto lg:pt-25 pt-12.5 lg:pb-50 pb-25 gap-4 px-5"
    >
      <div class="relative lg:w-1/2">
        <div class="absolute top-0 left-0">
          <div
            class="w-full h-auto z-0 relative group overflow-hidden rounded-[30px]"
          >
            <img
              class="w-full h-full object-cover"
              src="/images/what-we-image-1.jpg"
              alt="Chai dầu CBD và lá cần sa"
            />
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 h-1 opacity-50 bg-white transition-all duration-2000 ease-in-out group-hover:w-3/2 group-hover:h-3/2 group-hover:opacity-0"
            ></div>
          </div>
        </div>

        <div class="absolute -bottom-35 right-0">
          <div
            class="relative object-contain z-10 group overflow-hidden rounded-[30px]"
          >
            <img
              class=""
              src="/images/what-we-image-2.jpg"
              alt="Chai dầu CBD trong môi trường nhiều cây cối"
              style="clip-path: inset(0px 0% 0px 0px)"
            />
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 h-1 opacity-50 bg-white transition-all duration-2000 ease-in-out group-hover:w-3/2 group-hover:h-3/2 group-hover:opacity-0"
            ></div>
          </div>

          <div
            class="absolute top-2 -left-35 z-50 border-[var(--color-primary)] border-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center p-3"
          >
            <icons-test
              bigIcon="var(--color-black)"
              smallIcon="var(--color-white)"
              width="150"
              height="150"
            />
          </div>
        </div>
      </div>

      <div
        class="lg:pl-10 h-auto lg:w-1/2 flex flex-col gap-5 lg:gap-10 mt-37.5 md:mt-0"
      >
        <Title
          :title="{
            content: 'What We Do ?',
            mainTitle: 'Delivering precision, purity,',
            subTitle: 'and care daily',
          }"
        />

        <div class="flex flex-col gap-5 lg:gap-10">
          <div
            class="border-b border-solid border-[var(--color-darkdivider)] pb-10 flex flex-col gap-3.75"
          >
            <div class="flex">
              <div
                class="bg-[var(--color-accent)] w-5 h-5 text-black rounded-full flex justify-center items-center mr-3 border-b border-solid border-[]"
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
            <div class="flex">
              <div
                class="bg-[var(--color-accent)] w-5 h-5 text-black rounded-full flex justify-center items-center mr-3"
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
</template>

<script setup>
import Title from "./Title.vue";
</script>

<style lang="scss" scoped></style>
