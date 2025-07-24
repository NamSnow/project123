<template>
  <div class="bg-[var(--color-primary)] px-5 relative">
    <img
      src="/images/section-bg-shape-1.png"
      alt=""
      class="absolute right-0 bottom-0"
    />
    <div
      class="text-white flex flex-col items-center md:flex-row container mx-auto lg:pt-25 pt-12.5 lg:pb-62.5 pb-31.25 gap-15 px-5"
    >
      <div class="relative lg:w-[49%]">
        <div class="relative flex flex-col">
          <div class="w-full h-auto z-0 pr-10 relative">
            <img
              class="rounded-[30px]"
              src="/images/what-we-image-1.jpg"
              alt="Chai dầu CBD và lá cần sa"
            />
            <div class="absolute top-0 left-0"></div>
          </div>

          <div class="absolute object-contain self-end -bottom-43.75 z-10">
            <img
              class="rounded-[30px]"
              src="/images/what-we-image-2.jpg"
              alt="Chai dầu CBD trong môi trường nhiều cây cối"
              style="clip-path: inset(0px 0% 0px 0px)"
            />
            <div class="absolute top-0 left-0"></div>
          </div>
        </div>
        <div
          class="absolute -bottom-29 left-0 z-50 border-[var(--color-primary)] border-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            viewBox="0 0 200 200"
            fill="none"
            class="[animation:spin-svg_10s_linear_infinite]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
              />
              <clipPath id="clip0_461_42709">
                <rect
                  width="60"
                  height="60"
                  fill="white"
                  transform="translate(0 0.535156)"
                />
              </clipPath>
            </defs>

            <g transform="translate(70, 70)">
              <g clip-path="url(#clip0_461_42709)">
                <path
                  d="M31.3211 0.541016C34.504 3.71338 37.3005 7.41271 38.653 11.7479C40.3639 16.7295 39.5489 22.3786 36.8824 26.8755C35.3998 29.6052 33.1725 31.8079 31.3457 34.2917C28.9813 37.6081 27.2002 41.6552 27.6569 45.8113C27.8747 48.7729 29.5223 51.5342 31.8726 53.3118C34.2932 55.1492 37.4269 55.9853 40.4447 55.6832C42.4612 55.4478 44.3724 54.682 46.1254 53.6772C44.2073 55.8764 41.5654 57.4503 38.6811 57.9667C34.5461 58.6975 30.0774 58.1389 26.4659 55.908C20.9362 52.69 17.7463 46.1907 17.9396 39.8741C17.8763 36.1186 18.853 32.4052 20.3636 28.9869C17.4196 32.76 15.6806 37.5168 15.8457 42.3298C16.06 48.0913 18.7019 53.7966 23.1671 57.4925C24.6883 58.7572 26.4378 59.6917 28.2225 60.5278C23.2163 60.0184 18.2803 57.9527 14.7848 54.2674C10.2528 49.5984 7.99739 42.8497 8.69651 36.3961C9.29022 31.035 12.2272 26.2361 15.8949 22.4032C18.2698 19.8351 21.1049 17.7519 23.5149 15.2189C26.1498 12.4541 28.5528 9.38707 30.0283 5.8388C30.7133 4.149 31.3773 2.39594 31.3211 0.541016Z"
                  fill="#0B3311"
                />
                <path
                  d="M42.5173 19.1422C42.8053 16.9184 42.3451 14.7051 42.2538 12.4883C46.1112 18.3763 49.5716 24.7316 50.7766 31.7508C51.7076 36.6973 51.9711 42.2094 49.2906 46.6851C46.6874 51.333 40.6518 53.6025 35.621 51.9268C32.684 50.915 30.5902 47.9183 30.6604 44.8126C30.4953 40.3791 33.2356 36.5603 35.9723 33.3387C39.4327 29.3654 42.0606 24.454 42.5173 19.1422Z"
                  fill="#D1A132"
                />
              </g>
            </g>

            <text
              font-family="Arial"
              font-size="16"
              fill="#FFFFFF"
              text-anchor="middle"
              letter-spacing="4.8"
            >
              <textPath href="#circlePath" startOffset="50%">
                PREMIUM QUALITY * PREMIUM QUALITY *
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <div
        class="lg:pl-7.5 h-auto lg:w-[51%] flex flex-col gap-5 lg:gap-10 mt-37.5 md:mt-0"
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
