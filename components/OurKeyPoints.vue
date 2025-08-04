<template>
  <div class="bg-secondary">
    <div class="container">
      <div
        class="lg:py-25 flex lg:gap-14 sm:gap-5 gap-2.5 px-5 py-12.5 flex-col"
      >
        <div class="flex flex-col lg:flex-row items-start lg:items-center">
          <div class="lg:w-1/2">
            <Title
              :title="{
                content: 'Our Key Points',
                mainTitle: 'Superior design, precision',
                subTitle: 'drop lasting quality',
              }"
            />
          </div>

          <p class="text-text lg:w-1/2 w-full lg:pl-5">
            Crafted with superior design, engineered with precision, and built
            to commitment to excellence ensures every detail is meticulously
            perfected, delivering unparalleled quality and durability.
          </p>
        </div>

        <div
          class="flex justify-center items-center flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-7.5"
        >
          <!-- div1 -->
          <div
            class="flex flex-col lg:gap-15 gap-7.5 w-full sm:w-[calc(50%-15px)] lg:w-1/3"
          >
            <div
              class="flex items-center gap-4 sm:flex-row-reverse sm:text-right"
            >
              <div
                class="bg-accent flex items-center justify-center rounded-full text-white hover:bg-black p-3 lg:p-4.25"
              >
                <icons-pre />
              </div>

              <div class="flex flex-col">
                <div class="mb-2.5 font-bold text-xl">100% Organic & Pure</div>
                <div class="text-text text-base">
                  Helping to restore balance and promote overall wellness.
                </div>
              </div>
            </div>

            <div
              class="flex items-center gap-4 sm:flex-row-reverse sm:text-right"
            >
              <div
                class="bg-accent flex items-center justify-center rounded-full text-white hover:bg-black p-3 lg:p-4.25"
              >
                <icons-pre />
              </div>

              <div class="flex flex-col">
                <div class="mb-2.5 font-bold text-xl">100% Organic & Pure</div>
                <div class="text-text text-base">
                  Helping to restore balance and promote overall wellness.
                </div>
              </div>
            </div>

            <div
              class="flex items-center gap-4 sm:flex-row-reverse sm:text-right"
            >
              <div
                class="bg-accent flex items-center justify-center rounded-full text-white hover:bg-black p-3 lg:p-4.25"
              >
                <icons-pre />
              </div>

              <div class="flex flex-col">
                <div class="mb-2.5 font-bold text-xl">100% Organic & Pure</div>
                <div class="text-text text-base">
                  Helping to restore balance and promote overall wellness.
                </div>
              </div>
            </div>
          </div>

          <div class="max-w-full lg:px-5 sm:order-last lg:order-none">
            <img
              src="/images/key-points-image.png"
              alt=""
              class="object-contain max-w-60 sm:max-w-85"
            />
          </div>

          <!-- div2 -->
          <div
            class="flex flex-col lg:gap-15 gap-7.5 w-full sm:w-[calc(50%-15px)] lg:w-1/3"
          >
            <div class="flex items-center gap-4">
              <div
                class="bg-accent flex items-center justify-center rounded-full text-white hover:bg-black p-3 lg:p-4.25"
              >
                <icons-pre />
              </div>

              <div class="flex flex-col">
                <div class="mb-2.5 font-bold text-xl">100% Organic & Pure</div>
                <div class="text-text text-base">
                  Helping to restore balance and promote overall wellness.
                </div>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div
                class="bg-accent flex items-center justify-center rounded-full text-white hover:bg-black p-3 lg:p-4.25"
              >
                <icons-pre />
              </div>

              <div class="flex flex-col">
                <div class="mb-2.5 font-bold text-xl">100% Organic & Pure</div>
                <div class="text-text text-base">
                  Helping to restore balance and promote overall wellness.
                </div>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div
                class="bg-accent flex items-center justify-center rounded-full text-white hover:bg-black p-3 lg:p-4.25"
              >
                <icons-pre />
              </div>

              <div class="flex flex-col">
                <div class="mb-2.5 font-bold text-xl">100% Organic & Pure</div>
                <div class="text-text text-base">
                  Helping to restore balance and promote overall wellness.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          Let’s make something great work together.
          <span
            class="underline cursor-pointer text-accent hover:text-black text-lora italic"
            >Get Free Quote</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "./Title.vue";
</script>

<style lang="scss" scoped></style>
