<template>
  <div class="bg-[#FAF6F1]">
    <div
      class="max-w-[1300px] mx-auto px-5 py-[100px] flex flex-col gap-5 sm:gap-10 lg:gap-20"
    >
      <div class="flex justify-between flex-col lg:flex-row">
        <div class="lg:w-1/2 lg:pr-7.5 pb-4 lg:pb-0">
          <Title
            :title="{
              content: 'Latest Blog',
              mainTitle: 'Latest insights, trends, and',
              subTitle: 'expert tips',
            }"
          />
        </div>
        <Button
          text="View All Blog"
          link="/"
          hoverBackgroundColor="black"
          hoverTextColor="white"
          bgArrow="#e2e1da"
          textIcon="black"
        />
      </div>

      <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7.5">
        <div class="rounded-[20px] overflow-hidden">
          <img src="/images/post-1.jpg" alt="" />
          <div class="bg-white p-6.5">
            <div
              class="border-b border-solid border-[#0A2C0F1A] pb-7.5 mb-7.5 font-bold text-[20px]"
            >
              Glass vs. Plastic Droppers Which One is Right for You?
            </div>
            <div class="flex justify-between flex-col sm:flex-row">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-calendar text-[#d1a132]"></i>
                <div class="text-[#606060]">May 5, 2025</div>
              </div>

              <div class="flex items-center gap-2">
                <div class="text-[#d1a132] font-bold hover:text-black">
                  Read More
                </div>
                <div
                  class="text-[20px] bg-[#d1a132] text-white rounded-full w-6.5 h-6.5 flex items-center justify-center transition -rotate-45 hover:rotate-0 hover:bg-black"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-[20px] overflow-hidden">
          <img src="/images/post-1.jpg" alt="" />
          <div class="bg-white p-6.5">
            <div
              class="border-b border-solid border-[#0A2C0F1A] pb-7.5 mb-7.5 font-bold text-[20px]"
            >
              Glass vs. Plastic Droppers Which One is Right for You?
            </div>
            <div class="flex justify-between flex-col sm:flex-row">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-calendar text-[#d1a132]"></i>
                <div class="text-[#606060]">May 5, 2025</div>
              </div>

              <div class="flex items-center gap-2">
                <div class="text-[#d1a132] font-bold hover:text-black">
                  Read More
                </div>
                <div
                  class="text-[20px] bg-[#d1a132] text-white rounded-full w-6.5 h-6.5 flex items-center justify-center transition -rotate-45 hover:rotate-0 hover:bg-black"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-[20px] overflow-hidden">
          <img src="/images/post-1.jpg" alt="" />
          <div class="bg-white p-6.5">
            <div
              class="border-b border-solid border-[#0A2C0F1A] pb-7.5 mb-7.5 font-bold text-[20px]"
            >
              Glass vs. Plastic Droppers Which One is Right for You?
            </div>
            <div class="flex justify-between flex-col sm:flex-row">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-calendar text-[#d1a132]"></i>
                <div class="text-[#606060]">May 5, 2025</div>
              </div>

              <div class="flex items-center gap-2">
                <div class="text-[#d1a132] font-bold hover:text-black">
                  Read More
                </div>
                <div
                  class="text-[20px] bg-[#d1a132] text-white rounded-full w-6.5 h-6.5 flex items-center justify-center transition -rotate-45 hover:rotate-0 hover:bg-black"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
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
