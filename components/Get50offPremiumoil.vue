<template>
  <div class="bg-primary relative">
    <img
      src="/images/section-bg-shape-1.png"
      class="absolute bottom-0 right-0 z-0 transform scale-x-[-1]"
      alt=""
    />
    <img
      src="/images/section-bg-shape-3.png"
      alt=""
      class="absolute top-0 left-0"
    />

    <div class="container">
      <div
        class="lg:px-0 flex flex-col lg:flex-row text-white pt-12.5 lg:pt-0 gap-2.5 lg:gap-0"
      >
        <div
          class="lg:w-1/2 flex flex-col justify-center items-center text-center lg:gap-7.5 gap-2.5 py-2.5 pl-2.5 pr-2.5 lg:pr-5"
        >
          <div class="lg:text-6xl sm:text-4xl text-[26px] italic">
            Get 50% off
            <span
              class="text-lora lg:text-[100px] sm:text-7xl text-[50px] font-bold not-italic leading-[1.2em]"
              >Premium oil</span
            >
          </div>
          <p class="opacity-80">
            Porches Premium Oil is crafted for those who value purity and
            excellence. Sourced from the finest natural ingredients, our premium
            oil is carefully extracted to preserve its full potency
          </p>
          <Button
            text="Purchase Now"
            link="/"
            hoverBackgroundColor="white"
            hoverTextColor="black"
            bgArrow="#ffffff1a"
          />
        </div>

        <img
          src="/images/cta-image.png"
          alt=""
          class="lg:w-1/2 z-10 pt-2.5 lg:pt-25 px-2.5"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "./Title.vue";
</script>

<style lang="scss" scoped></style>
