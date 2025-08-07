<template>
  <div class="container">
    <div
      class="relative z-20 flex lg:flex-row flex-col text-white mt-15 pb-15 lg:mt-25 lg:pb-25 items-center flex-1"
    >
      <div class="w-full lg:w-1/2 flex flex-col gap-2.5 max-lg:mb-5 p-2.5">
        <div class="flex items-center">
          <div class="w-2 h-2 mr-4 bg-accent rounded-full flex-none"></div>
          <div class="text-base lg:text-lg font-normal italic">
            Discover The Power Of Premium
          </div>
        </div>
        <div
          class="text-[30px] sm:text-[45px] lg:text-6xl font-semibold leading-[6/5]"
        >
          Pure drops perfect precision
          <span class="font-normal italic text-lora">care you can trust</span>.
        </div>
        <p class="text-base">
          Experience the perfect balance of purity and precision with our
          premium oil droppers Designed for effortless application, our
          high-quality droppers ensure accurate dispensing, minimal waste, and
          maximum potency.
        </p>
        <div class="flex gap-4 sm:gap-10 flex-col sm:flex-row mt-5">
          <Button
            text="Purchase Now"
            link="/"
            hoverTextColor="black"
            hoverBackgroundColor="white"
            bgArrow="#ffffff1a"
          />

          <div class="flex gap-4 group items-center">
            <div
              class="bg-accent w-12.5 h-12.5 text-2xl flex items-center justify-center rounded-full flex-shrink-0"
            >
              <i class="fa-solid fa-phone"></i>
            </div>

            <NuxtLink to="">
              <div class="font-bold">Call Us</div>
              <div
                class="group-hover:text-accent cursor-pointer transition duration-500"
              >
                +91 - 123 468 963
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center w-full lg:w-1/2 mx-auto">
        <div class="relative p-2.5 lg:pr-13.75 lg:pl-18.75 lg:py-2.5">
          <img src="/images/hero-image.png" alt="" class="object-contain" />
          <div
            class="absolute top-2.5 left-2.5 lg:left-21 lg:top-2.5 w-1/4 h-1/4"
          >
            <icons-test />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
