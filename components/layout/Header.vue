<template>
  <div class="relative mx-auto h-auto w-full max-w-full">
    <div class="absolute inset-0 z-0">
      <div
        class="absolute inset-0 w-full h-full bg-cover bg-center object-cover"
        style="background-image: url('/images/hero-bg.jpg')"
      ></div>
      <div
        class="absolute inset-0 bg-primary opacity-80 z-10 w-full h-full"
      ></div>
    </div>

    <div class="relative z-50 border-b border-solid w-full border-darkdivider">
      <div class="container">
        <div class="flex justify-between items-center py-5 px-2.5">
          <div class="flex">
            <img src="/icons/logo.svg" alt="" class="cursor-pointer" />

            <div
              class="text-white hidden lg:flex items-center pl-3 xl:pl-9 z-10 font-medium leading-[1.1em]"
            >
              <!-- Chọn -->
              <div
                v-for="(item, index) in items"
                :key="index"
                class="relative group"
              >
                <NuxtLink
                  :to="item.to"
                  class="inline-flex items-center text-xs min-[1200px]:text-base hover:text-accent p-2 min-[1150px]:p-3.75"
                >
                  {{ item.label }}
                  <i
                    class="fa-solid fa-angle-down ml-2 text-xs"
                    v-if="item.subItems && item.subItems.length > 0"
                  ></i>
                </NuxtLink>
                <ul
                  class="absolute hidden group-hover:block bg-accent text-white min-w-59 rounded-[20px] shadow-lg z-10 top-full left-0 origin-top animate-fade-in-down"
                >
                  <li
                    class="relative group/nested"
                    v-for="(subItem, subIndex) in item.subItems"
                    :key="subItem.label"
                  >
                    <NuxtLink
                      :to="subItem.to"
                      class="flex items-center justify-between text-base hover:text-black px-5 py-2"
                    >
                      {{ subItem.label }}
                      <i
                        class="fa-solid fa-angle-right ml-auto text-xs"
                        v-if="subItem.subItems && subItem.subItems.length > 0"
                      ></i>
                    </NuxtLink>

                    <ul
                      class="absolute hidden group-hover/nested:block bg-accent text-white min-w-59 left-full top-0 rounded-[20px] shadow-lg z-20 origin-left animate-fade-in-right"
                    >
                      <li
                        v-for="nestedItem in subItem.subItems"
                        :key="nestedItem.label"
                      >
                        <NuxtLink
                          :to="nestedItem.to"
                          class="block text-base rounded-t-md hover:text-black px-5 py-2"
                          >{{ nestedItem.label }}</NuxtLink
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flex items-center">
            <ul
              class="text-white gap-2 xl:gap-3.75 items-center hidden lg:flex border-r border-solid border-darkdivider pr-3 xl:pr-7.5"
            >
              <li
                class="w-9 h-9 border border-white border-solid rounded-full flex justify-center items-center hover:border-accent hover:text-accent"
              >
                <a href=""><i class="fa-brands fa-x-twitter"></i></a>
              </li>
              <li
                class="w-9 h-9 border border-white border-solid rounded-full flex justify-center items-center hover:border-accent hover:text-accent"
              >
                <a href=""><i class="fa-brands fa-facebook-f"></i></a>
              </li>
              <li
                class="w-9 h-9 border border-white border-solid rounded-full flex justify-center items-center hover:border-accent hover:text-accent"
              >
                <a href=""><i class="fa-brands fa-instagram"></i></a>
              </li>
            </ul>

            <div class="pl-3 xl:pl-7.5 hidden lg:block">
              <Button
                text="Shop Now"
                link="/"
                hoverBackgroundColor="white"
                bgArrow="#ffffff1a"
              />
            </div>

            <button
              class="bg-accent w-9.5 h-9.5 rounded-lg cursor-pointer focus:bg-white lg:hidden text-white focus:text-black"
              @click="toggleMenu"
            >
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <Banner />
  </div>

  <!--  -->
  <div
    :class="{
      'm-0 hidden': !isMenuOpen,
    }"
    class="bg-accent fixed top-0 left-0 w-screen h-full z-[100] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col"
  >
    <div
      class="h-19.5 flex justify-end items-center border-b border-solid border-darkdivider p-5 flex-shrink-0"
    >
      <button
        class="bg-white w-9.5 h-9.5 rounded-lg cursor-pointer focus:bg-black"
        @click="toggleMenu"
      >
        <i class="fa-solid fa-x text-black focus:text-white"></i>
      </button>
    </div>

    <div
      class="text-white px-5 container overflow-y-auto flex-grow font-medium leading-[1.3em]"
    >
      <div v-for="(item, index) in items" :key="index" class="px-5">
        <div class="py-2">
          <NuxtLink
            :to="item.to"
            class="focus:text-black"
            @click="clickOpenItem(item)"
          >
            {{ item.label }}
            <i
              class="fa-solid fa-angle-down ml-2 text-xs"
              v-if="item.subItems && item.subItems.length > 0"
            ></i>
          </NuxtLink>
        </div>
        <ul class="pl-2.5" v-if="item.isMenuItem">
          <li v-for="(subItem, subIndex) in item.subItems" :key="subItem.label">
            <div class="py-2">
              <NuxtLink
                :to="subItem.to"
                class="focus:text-black"
                @click="clickOpenSubItem(subItem)"
              >
                {{ subItem.label }}
                <i
                  class="fa-solid fa-angle-down ml-2 text-xs"
                  v-if="subItem.subItems && subItem.subItems.length > 0"
                ></i>
              </NuxtLink>
            </div>
            <ul class="pl-6" v-if="subItem.isMenuSubItem">
              <li
                v-for="nestedItem in subItem.subItems"
                :key="nestedItem.label"
                class="py-2"
              >
                <NuxtLink :to="nestedItem.to" class="focus:text-black">{{
                  nestedItem.label
                }}</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "~/components/Button.vue";
import Banner from "../Banner.vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const items = ref([
  {
    label: "Home",
    to: "#",
    isMenuItem: false,
    subItems: [
      { label: "Home - Main", to: "#" },
      { label: "Home - Video", to: "#" },
      { label: "Home - Slider", to: "#" },
    ],
  },
  { label: "About Us", to: "#" },
  { label: "Blog", to: "#" },
  {
    label: "Store",
    to: "#",
    isMenuItem: false,
    subItems: [
      { label: "Product", to: "#" },
      { label: "Product Single", to: "#" },
      { label: "Cart", to: "#" },
      { label: "My Account", to: "#" },
    ],
  },
  {
    label: "Pages",
    isMenuItem: false,
    to: "#",
    subItems: [
      { label: "Blog Details", to: "#" },
      { label: "Features", to: "#" },
      { label: "Testimonials", to: "#" },
      { label: "FAQs", to: "#" },
      { label: "404", to: "#" },
      {
        label: "Header Layouts",
        isMenuSubItem: false,
        to: "#",
        subItems: [
          { label: "Header Layouts 1", to: "#" },
          { label: "Header Layouts 2", to: "#" },
          { label: "Header Layouts 3", to: "#" },
          { label: "Header Layouts 4", to: "#" },
        ],
      },
      {
        label: "Footer Layouts",
        isMenuSubItem: false,
        to: "#",
        subItems: [
          { label: "Footer Layouts 1", to: "#" },
          { label: "Footer Layouts 2", to: "#" },
          { label: "Footer Layouts 3", to: "#" },
          { label: "Footer Layouts 4", to: "#" },
        ],
      },
    ],
  },
  { label: "Contact Us", to: "#" },
]);

const clickOpenItem = (item) => {
  item.isMenuItem = !item.isMenuItem;
};

const clickOpenSubItem = (subItem) => {
  subItem.isMenuSubItem = !subItem.isMenuSubItem;
};
</script>
