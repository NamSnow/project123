<template>
  <div class="bg-secondary">
    <div class="container">
      <div class="lg:py-25 py-12.5">
        <div
          class="flex gap-7.5 flex-col lg:flex-row justify-center items-center mb-5 lg:mb-7.5"
        >
          <div class="w-full lg:w-2/5">
            <div class="relative flex justify-center">
              <img
                src="/images/benefit-img.png"
                alt=""
                class="w-69 lg:h-full sm:w-4/5 lg:w-full object-contain"
              />
              <div
                class="rounded-full w-30 h-30 bg-accent absolute top-0 right-0 flex items-center justify-center p-3.75 lg:p-2"
              >
                <icons-test bigIcon="black" smallIcon="white" />
              </div>
            </div>
          </div>

          <div class="lg:w-3/5 flex flex-col gap-4">
            <Title
              :title="{
                content: 'Benefits of Oil',
                mainTitle: 'Unlock natures power amazing',
                subTitle: 'benefits of essential oils',
              }"
            />
            <div class="grid sm:grid-cols-2 grid-cols-1 gap-7.5 lg:mt-6.25">
              <div
                class="lg:p-7.5 p-5 rounded-[20px] bg-white border border-solid border-divider group"
              >
                <div
                  class="w-15 h-15 bg-accent group-hover:bg-black rounded-full flex justify-center items-center mb-2.5 sm:mb-5 lg:mb-7.5 transition duration-500"
                >
                  <img src="/icons/icon4.svg" alt="" />
                </div>
                <div class="mb-2.5 font-bold text-xl">
                  Natural Healing & Wellness 1
                </div>
                <p>
                  Supports overall health, immunity, and promotes well-being.
                </p>
              </div>

              <div class="lg:p-7.5 p-5 group">
                <div
                  class="w-15 h-15 bg-accent group-hover:bg-black rounded-full flex justify-center items-center mb-2.5 sm:mb-5 lg:mb-7.5 transition duration-500"
                >
                  <img src="/icons/icon4.svg" alt="" />
                </div>
                <div class="mb-2.5 font-bold text-xl">
                  Natural Healing & Wellness 2
                </div>
                <p>
                  Supports overall health, immunity, and promotes well-being.
                </p>
              </div>

              <div class="lg:p-7.5 p-5 order-4 sm:order-none group">
                <div
                  class="w-15 h-15 bg-accent group-hover:bg-black rounded-full flex justify-center items-center mb-2.5 sm:mb-5 lg:mb-7.5 transition duration-500"
                >
                  <img src="/icons/icon4.svg" alt="" />
                </div>
                <div class="mb-2.5 font-bold text-xl">
                  Natural Healing & Wellness 3
                </div>
                <p>
                  Supports overall health, immunity, and promotes well-being.
                </p>
              </div>

              <div
                class="lg:p-7.5 p-5 rounded-[20px] bg-white order-3 sm:order-none border border-solid border-divider group"
              >
                <div
                  class="w-15 h-15 bg-accent group-hover:bg-black rounded-full flex justify-center items-center mb-2.5 sm:mb-5 lg:mb-7.5 transition duration-500"
                >
                  <img src="/icons/icon4.svg" alt="" />
                </div>
                <div class="mb-2.5 font-bold text-xl">
                  Natural Healing & Wellness 4
                </div>
                <p>
                  Supports overall health, immunity, and promotes well-being.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:pt-20 sm:pt-8 pt-6 pb-2.5 w-full border-t border-divider sm:gap-7.5 lg:gap-0"
        >
          <div
            class="flex items-center gap-3.75 lg:pr-12.5 max-sm:pb-3.75 max-sm:pt-3.75 sm:pb-0 border-b border-solid border-divider sm:border-b-0 flex-nowrap"
          >
            <img
              src="/icons/member.svg"
              class="w-10 h-10 sm:w-12.5 sm:h-12.5"
              alt=""
            />
            <div>
              <div class="font-bold text-xl mb-1.5">Active Member</div>
              <div>Dedicated to sharing oil benefits.</div>
            </div>
          </div>

          <div
            class="flex items-center gap-4 lg:pr-12.5 sm:pl-12.5 max-sm:pb-3.75 max-sm:pt-3.75 sm:pb-0 border-b border-solid border-divider sm:border-b-0 sm:border-l lg:border-r flex-nowrap"
          >
            <img
              src="/icons/member.svg"
              class="w-10 h-10 sm:w-12.5 sm:h-12.5"
              alt=""
            />
            <div>
              <div class="font-bold text-xl mb-1.5">Project Complete</div>
              <div>Successfully delivered quality oil.</div>
            </div>
          </div>

          <div
            class="flex gap-4 items-center lg:pl-12.5 flex-nowrap max-sm:pt-3.75"
          >
            <img
              src="/icons/member.svg"
              class="w-10 h-10 sm:w-12.5 sm:h-12.5"
              alt=""
            />
            <div>
              <div class="font-bold text-xl mb-1.5">Product Reward</div>
              <div>Earn rewards for oil purchases.</div>
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
