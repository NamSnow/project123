<template>
  <div class="bg-secondary">
    <div class="container">
      <div class="flex flex-col lg:flex-row py-12.5 lg:py-25">
        <div class="lg:w-1/2 flex justify-center overflow-hidden">
          <img
            src="/images/tradition-innovation-image.png"
            alt=""
            class="object-contain py-2.5 px-2.5 lg:pr-21.25 lg:pl-18.75 sm:max-lg:max-w-1/2"
          />
        </div>

        <div class="lg:w-1/2 p-2.5 flex flex-col gap-3.75">
          <div>
            <Title
              :title="{
                content: 'Tradition & Innovation',
                mainTitle: 'Blending ancient wisdom,',
                subTitle: 'with modern wellness',
              }"
            />
          </div>

          <p class="text-text">
            Crafted with superior design, engineered with precision, and built
            to commitment to excellence ensures every detail.
          </p>

          <div
            class="flex my-6.25 pb-10 border-b border-solid border-divider gap-7.5"
          >
            <div class="flex gap-5 items-center w-1/2">
              <div
                class="bg-accent w-12.5 h-12.5 lg:w-15 lg:h-15 rounded-full flex items-center justify-center flex-none"
              >
                <icons-pre class="w-7.5 h-7.5 lg:w-8.75 lg:h-8.75 text-white" />
              </div>

              <div class="font-bold text-xl text-black leading-[6/5]">
                Pouring Purity into Every Drop
              </div>
            </div>

            <div class="flex gap-5 items-center w-1/2">
              <div
                class="bg-accent w-12.5 h-12.5 lg:w-15 lg:h-15 rounded-full flex items-center justify-center flex-none"
              >
                <icons-pre class="w-7.5 h-7.5 lg:w-8.75 lg:h-8.75 text-white" />
              </div>

              <div class="font-bold text-xl text-black leading-[6/5]">
                Nurturing Your Life with Natural
              </div>
            </div>
          </div>

          <div class="flex gap-7.5 items-center">
            <div class="w-1/2 flex gap-3.75 flex-col">
              <div class="flex items-center">
                <div
                  class="bg-accent flex-none w-4.5 h-4.5 text-white rounded-full flex justify-center items-center"
                >
                  <i class="fa-solid fa-check text-xs"></i>
                </div>
                <div class="ml-2.5 text-text">
                  Precision in every drop designed
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="bg-accent flex-none w-4.5 h-4.5 text-white rounded-full flex justify-center items-center"
                >
                  <i class="fa-solid fa-check text-xs"></i>
                </div>
                <div class="ml-2.5 text-text">
                  Leak-Proof & durable protecting
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="bg-accent flex-none w-4.5 h-4.5 text-white rounded-full flex justify-center items-center"
                >
                  <i class="fa-solid fa-check text-xs"></i>
                </div>
                <div class="ml-2.5 text-text">
                  Precision in every drop designed
                </div>
              </div>
            </div>

            <div class="w-1/2 relative h-49 sm:h-50.25 lg:h-42">
              <img
                src="/images/tradition-innovation-intro-image.jpg"
                alt=""
                class="rounded-[20px] w-full h-full"
              />
              <div
                class="bg-primary absolute top-0 left-0 w-full h-full opacity-30 rounded-[20px]"
              ></div>

              <NuxtLink
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                to="https://www.youtube.com/embed/Y-x0efG1seA?feature=oembed?playlist=Y-x0efG1seA&mute=0&autoplay=0&loop=1&controls=0&start=0&end="
              >
                <div
                  class="rounded-full bg-green w-12.5 h-12.5 hover:bg-accent flex items-center justify-center"
                >
                  <i class="fa-solid fas fa-play text-white text-lg"></i>
                </div>
              </NuxtLink>
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
