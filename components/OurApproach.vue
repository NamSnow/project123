<template>
  <div class="relative">
    <img
      src="/images/section-bg-shape-1.png"
      class="absolute bottom-0 left-0 z-0"
      alt=""
    />

    <div class="container">
      <div
        class="flex flex-col gap-2.5 sm:gap-5 lg:gap-15 py-12.5 lg:py-25 relative z-50"
      >
        <div
          class="flex lg:items-center flex-col lg:flex-row p-2.5 max-lg:gap-2.5"
        >
          <div class="lg:w-1/2">
            <Title
              :title="{
                content: 'Our Approach',
                mainTitle: 'A thoughtful process',
                subTitle: 'from seed to essence',
              }"
            />
          </div>

          <p class="lg:pl-7.5 lg:w-1/2">
            We believe that every drop matters. Our premium oil dropper bottles
            are designed to deliver purity, precision, and care with every use.
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2.5 gap-7.5"
        >
          <div
            v-for="(our, index) in ours"
            :key="index"
            class="p-5 sm:p-7.5 lg:py-10 lg:px-8.75 flex flex-col gap-5 lg:gap-7.5 rounded-[20px] border border-solid border-divider group"
          >
            <div>
              <div class="text-lg sm:text-xl font-bold mb-2.5">
                {{ our.title }}
              </div>
              <p>{{ our.text }}</p>
            </div>

            <div
              class="max-h-44.25 sm:max-h-55 lg:max-h-41.25 overflow-hidden relative rounded-[20px]"
            >
              <img
                :src="our.image"
                alt=""
                class="object-cover w-full h-full transform group-hover:scale-110 transition duration-500"
              />

              <div
                class="bg-accent p-2.75 absolute rounded-full group-hover:bg-primary left-3.75 bottom-3.75 lg:left-5 lg:bottom-5 transition duration-500"
              >
                <icons-pre class="text-white w-7.5 h-7.5 lg:w-9 lg:h-9" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "~/components/Title.vue";

const ours = ref([
  {
    title: "Our Mission",
    text: "Carefully sourced, 100%, rigorously tested for excellence.",
    image: "/images/our-goal-img.jpg",
  },
  {
    title: "Our Vision",
    text: "Carefully sourced, 100%, rigorously tested for excellence.",
    image: "/images/our-mission-img.jpg",
  },
  {
    title: "Our Goal",
    text: "Carefully sourced, 100%, rigorously tested for excellence.",
    image: "/images/our-vision-img.jpg",
  },
]);
</script>

<style lang="scss" scoped></style>
