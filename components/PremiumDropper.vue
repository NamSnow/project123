<template>
  <div class="relative">
    <img
      src="/images/section-bg-shape-1.png"
      class="absolute bottom-0 left-0 z-0"
      alt=""
    />
    <div class="container">
      <div
        class="flex flex-col lg:flex-row gap-7.5 lg:gap-15 lg:py-25 py-12.5 px-5 items-center z-10"
      >
        <div class="flex flex-col gap-4 lg:w-6/10 xl:7/10">
          <Title
            :title="{
              content: 'Premium Dropper',
              mainTitle: 'Premium quality precsion design',
              subTitle: 'pure performance',
            }"
          />

          <div
            class="flex flex-col sm:flex-row border-b border-gray-primary border-solid w-full mt-6.5 mb-4.5 lg:mb-9 pb-6.25 lg:pb-12.5 gap-7.5 md:gap-0"
          >
            <div class="mr-7.5 sm:w-1/2 flex flex-col gap-7.5">
              <p class="text-left">
                Our oil dropper bottles designed precision, ensuring controlled
                application.
              </p>
              <Button
                text="Expolre More"
                link="/"
                hoverBackgroundColor="black"
                hoverTextColor="white"
                textIcon="black"
                bgArrow="#e2e1da"
              />
            </div>

            <div class="flex flex-col gap-4">
              <div class="flex">
                <div
                  class="bg-accent w-5 h-5 text-white rounded-full flex justify-center items-center"
                >
                  <i class="fa-solid fa-check"></i>
                </div>
                <div class="ml-2.5 text-text">
                  Easy And Mess-Free Oil Dispensing
                </div>
              </div>

              <div class="flex">
                <div
                  class="bg-accent w-5 h-5 text-white rounded-full flex justify-center items-center"
                >
                  <i class="fa-solid fa-check"></i>
                </div>
                <div class="ml-2.5 text-text">Prevents Spills And Waste.</div>
              </div>

              <div class="flex">
                <div
                  class="bg-accent w-5 h-5 text-white rounded-full flex justify-center items-center"
                >
                  <i class="fa-solid fa-check"></i>
                </div>
                <div class="ml-2.5 text-text">
                  Durable And Safe For Essential Oils.
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-between flex-col sm:flex-row gap-7.5">
            <div
              class="relative lg:w-52.5 lg:h-52.5 w-full overflow-hidden rounded-[20px]"
            >
              <div
                class="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110"
              >
                <img
                  src="/images/premium-products-image-1.jpg"
                  class="object-cover w-full h-full aspect-10/9"
                  alt=""
                />
              </div>
              <div
                class="absolute bottom-5 text-white font-bold text-xl text-center flex justify-center w-full"
              >
                Leak-Proof Seal
              </div>
            </div>
            <div
              class="relative lg:w-52.5 lg:h-52.5 w-full overflow-hidden rounded-[20px]"
            >
              <div
                class="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110"
              >
                <img
                  src="/images/premium-products-image-2.jpg"
                  class="object-cover w-full h-full aspect-10/9"
                  alt=""
                />
              </div>
              <div
                class="absolute bottom-5 text-white font-bold text-xl text-center flex justify-center w-full"
              >
                Leak-Proof Seal
              </div>
            </div>
            <div
              class="relative lg:w-52.5 lg:h-52.5 w-full overflow-hidden rounded-[20px]"
            >
              <div
                class="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110"
              >
                <img
                  src="/images/premium-products-image-3.jpg"
                  class="object-cover w-full h-full aspect-10/9"
                  alt=""
                />
              </div>
              <div
                class="absolute bottom-5 text-white font-bold text-xl text-center flex justify-center w-full"
              >
                Leak-Proof Seal
              </div>
            </div>
          </div>
        </div>

        <div class="relative">
          <img
            src="/images/products-intro-image.jpg"
            alt=""
            class="relative z-0 rounded-[20px] sm:min-h-129 lg:min-h-175 w-screen lg:w-full object-cover aspect-3/2 md:aspect-square"
          />
          <a
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            href="https://www.youtube.com/embed/Y-x0efG1seA?feature=oembed?playlist=Y-x0efG1seA&mute=0&autoplay=0&loop=1&controls=0&start=0&end="
          >
            <div
              class="rounded-full bg-green w-17.5 h-17.5 hover:bg-accent flex items-center justify-center"
            >
              <i class="fa-solid fa-play text-white text-xl"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "./Title.vue";
</script>

<style lang="scss" scoped></style>
