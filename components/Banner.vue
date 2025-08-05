<template>
  <div class="container">
    <div
      class="relative z-20 flex lg:flex-row flex-col text-white p-5 mt-20 pb-20 items-center flex-1"
    >
      <div class="lg:w-1/2 flex flex-col gap-3.75 w-full max-lg:mb-7.5">
        <div class="flex items-center">
          <div class="w-2 h-2 mr-4 bg-accent rounded-full"></div>
          <div class="text-lg font-normal italic">
            Discover The Power Of Premium
          </div>
        </div>
        <div
          class="lg:text-6xl md:text-5xl text-4xl font-semibold leading-[1.2em]"
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
        <div class="flex gap-10 flex-col sm:flex-row mt-5">
          <Button
            text="Purchase Now"
            link="/"
            hoverTextColor="black"
            hoverBackgroundColor="white"
            bgArrow="#ffffff1a"
          />

          <div class="flex gap-4 group">
            <div
              class="bg-accent w-12.5 flex items-center justify-center rounded-full"
            >
              <i class="fa-solid fa-phone"></i>
            </div>

            <div>
              <div class="font-bold">Call Us</div>
              <div class="group-hover:text-accent cursor-pointer">
                +91 - 123 468 963
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="lg:mr-14 lg:ml-19 flex justify-center items-center lg:w-1/2 mx-auto"
      >
        <div class="relative">
          <img src="/images/hero-image.png" alt="" />
          <div class="absolute top-0 left-0 w-1/4 h-1/4">
            <icons-test />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
