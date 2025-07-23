<template>
  <div class="bg-[#faf6f1]">
    <div
      class="mx-auto lg:py-[100px] max-w-[1300px] flex lg:gap-14 sm:gap-5 gap-2.5 px-5 py-[50px] flex-col"
    >
      <div class="flex flex-col lg:flex-row">
        <div class="lg:w-1/2">
          <Title
            :title="{
              content: 'Our Key Points',
              mainTitle: 'Superior design, precision',
              subTitle: 'drop lasting quality',
            }"
          />
        </div>

        <p class="text-[#606060] lg:w-1/2 w-full lg:pl-5">
          Crafted with superior design, engineered with precision, and built to
          commitment to excellence ensures every detail is meticulously
          perfected, delivering unparalleled quality and durability.
        </p>
      </div>

      <div
        class="flex justify-between items-center lg:gap-15 gap-7.5 flex-col sm:flex-row"
      >
        <div
          class="flex flex-col lg:gap-15 gap-7.5 w-full sm:w-[calc(50%-15px)] lg:w-[calc(33%-15px)]"
        >
          <div
            class="flex items-center gap-4 sm:flex-row-reverse sm:text-right"
          >
            <div
              class="bg-[#d1a132] flex items-center justify-center rounded-full text-white hover:bg-black p-4.5"
            >
              <img src="/icons/icon4.svg" alt="" />
            </div>

            <div class="flex flex-col">
              <div class="mb-2.5 font-bold text-[20px]">
                100% Organic & Pure
              </div>
              <div class="text-[#606060] text-base">
                Helping to restore balance and promote overall wellness.
              </div>
            </div>
          </div>

          <div
            class="flex items-center gap-4 sm:flex-row-reverse sm:text-right"
          >
            <div
              class="bg-[#d1a132] flex items-center justify-center rounded-full text-white hover:bg-black p-4.5"
            >
              <img src="/icons/icon4.svg" alt="" />
            </div>

            <div class="flex flex-col">
              <div class="mb-2.5 font-bold text-[20px]">
                100% Organic & Pure
              </div>
              <div class="text-[#606060] text-base">
                Helping to restore balance and promote overall wellness.
              </div>
            </div>
          </div>

          <div
            class="flex items-center gap-4 sm:flex-row-reverse sm:text-right"
          >
            <div
              class="bg-[#d1a132] flex items-center justify-center rounded-full text-white hover:bg-black p-4.5"
            >
              <img src="/icons/icon4.svg" alt="" />
            </div>

            <div class="flex flex-col">
              <div class="mb-2.5 font-bold text-[20px]">
                100% Organic & Pure
              </div>
              <div class="text-[#606060] text-base">
                Helping to restore balance and promote overall wellness.
              </div>
            </div>
          </div>
        </div>

        <img
          src="/images/key-points-image.png"
          alt=""
          class="lg:max-w-[340px] sm:max-w-[240px] object-cover"
        />

        <div
          class="flex flex-col lg:gap-15 gap-7.5 w-full sm:w-[calc(50%-15px)] lg:w-[calc(33%-15px)]"
        >
          <div class="flex items-center gap-4">
            <div
              class="bg-[#d1a132] flex items-center justify-center rounded-full text-white hover:bg-black p-4.5"
            >
              <img src="/icons/icon4.svg" alt="" />
            </div>

            <div class="flex flex-col">
              <div class="mb-2.5 font-bold text-[20px]">
                100% Organic & Pure
              </div>
              <div class="text-[#606060] text-base">
                Helping to restore balance and promote overall wellness.
              </div>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div
              class="bg-[#d1a132] flex items-center justify-center rounded-full text-white hover:bg-black p-4.5"
            >
              <img src="/icons/icon4.svg" alt="" />
            </div>

            <div class="flex flex-col">
              <div class="mb-2.5 font-bold text-[20px]">
                100% Organic & Pure
              </div>
              <div class="text-[#606060] text-base">
                Helping to restore balance and promote overall wellness.
              </div>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div
              class="bg-[#d1a132] flex items-center justify-center rounded-full text-white hover:bg-black p-4.5"
            >
              <img src="/icons/icon4.svg" alt="" />
            </div>

            <div class="flex flex-col">
              <div class="mb-2.5 font-bold text-[20px]">
                100% Organic & Pure
              </div>
              <div class="text-[#606060] text-base">
                Helping to restore balance and promote overall wellness.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        Let’s make something great work together.
        <span
          class="underline cursor-pointer text-[#d1a132] hover:text-black font-lora italic"
          >Get Free Quote</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "./Title.vue";
</script>

<style lang="scss" scoped></style>
