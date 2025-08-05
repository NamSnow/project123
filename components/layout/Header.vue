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
              class="text-white hidden lg:flex gap-5 min-[1200px]:gap-7.5 items-center pl-3 xl:pl-9 z-10"
            >
              <div class="relative group">
                <a
                  href="#"
                  class="inline-flex items-center text-xs min-[1200px]:text-base hover:text-accent"
                >
                  Home <i class="fa-solid fa-angle-down ml-2 text-xs"></i>
                </a>
                <ul
                  class="absolute hidden group-hover:block bg-accent text-white min-w-59 rounded-[20px] shadow-lg z-10 top-full left-0 origin-top animate-fade-in-down"
                >
                  <li class="my-2 mx-4">
                    <a
                      href="#"
                      class="block text-base rounded-t-md hover:text-black"
                      >Home - Main</a
                    >
                  </li>
                  <li class="my-2 mx-4">
                    <a href="#" class="block text-base hover:text-black"
                      >Home - Video</a
                    >
                  </li>
                  <li class="my-2 mx-4">
                    <a
                      href="#"
                      class="block text-base rounded-b-md hover:text-black"
                      >Home - Slider</a
                    >
                  </li>
                </ul>
              </div>

              <div class="">
                <a
                  href="#"
                  class="text-xs min-[1200px]:text-base hover:text-accent inline"
                  >About Us</a
                >
              </div>

              <div class="">
                <a
                  href="#"
                  class="text-xs min-[1200px]:text-base hover:text-accent"
                  >Blog</a
                >
              </div>

              <div class="relative group">
                <a
                  href="#"
                  class="inline-flex items-center text-xs min-[1200px]:text-base hover:text-accent"
                >
                  Store <i class="fa-solid fa-angle-down ml-2 text-xs"></i>
                </a>
                <ul
                  class="absolute hidden group-hover:block text-white bg-accent min-w-59 rounded-[20px] shadow-lg z-10 top-full left-0 origin-top animate-fade-in-down"
                >
                  <li class="my-2 mx-4">
                    <a href="#" class="block text-base hover:text-black"
                      >Products</a
                    >
                  </li>
                  <li class="my-2 mx-4">
                    <a href="#" class="block text-base hover:text-black"
                      >Product Single</a
                    >
                  </li>
                  <li class="my-2 mx-4">
                    <a href="#" class="block text-base hover:text-black"
                      >Cart</a
                    >
                  </li>
                  <li class="my-2 mx-4">
                    <a
                      href="#"
                      class="block text-base rounded-b-md hover:text-black"
                      >My account</a
                    >
                  </li>
                </ul>
              </div>

              <div class="relative group">
                <a
                  href="#"
                  class="inline-flex items-center text-xs min-[1200px]:text-base hover:text-accent"
                >
                  Page <i class="fa-solid fa-angle-down ml-2 text-xs"></i>
                </a>
                <ul
                  class="absolute hidden group-hover:block bg-accent text-white min-w-59 rounded-[20px] shadow-lg z-10 top-full left-0 origin-top animate-fade-in-down"
                >
                  <li>
                    <a
                      href="#"
                      class="block text-base rounded-t-md hover:text-black px-5 py-2"
                      >Blog Details</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block text-base hover:text-black px-5 py-2"
                      >Features</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block text-base hover:text-black px-5 py-2"
                      >Testimonials</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block text-base hover:text-black px-5 py-2"
                      >FAQs</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block text-base hover:text-black px-5 py-2"
                      >404</a
                    >
                  </li>

                  <li class="relative group/nested">
                    <a
                      href="#"
                      class="flex items-center justify-between text-base hover:text-black px-5 py-2"
                    >
                      Header Layouts
                      <i class="fa-solid fa-angle-right ml-auto text-xs"></i>
                    </a>
                    <ul
                      class="absolute hidden group-hover/nested:block bg-accent text-white min-w-40 left-full top-0 rounded-md shadow-lg z-20 origin-left animate-fade-in-right"
                    >
                      <li>
                        <a
                          href="#"
                          class="block text-base rounded-t-md hover:text-black px-5 py-2"
                          >Header Layout 1</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block text-base hover:text-black px-5 py-2"
                          >Header Layout 2</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block text-base hover:text-black px-5 py-2"
                          >Header Layout 3</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block text-base rounded-b-md hover:text-black px-5 py-2"
                          >Header Layout 4</a
                        >
                      </li>
                    </ul>
                  </li>

                  <li class="relative group/nested">
                    <a
                      href="#"
                      class="flex items-center justify-between text-base rounded-b-md hover:text-black px-5 py-2"
                    >
                      Footer Layouts
                      <i class="fa-solid fa-angle-right ml-auto text-xs"></i>
                    </a>
                    <ul
                      class="absolute hidden group-hover/nested:block bg-accent text-white min-w-40 left-full top-0 rounded-md shadow-lg z-20 origin-left animate-fade-in-right"
                    >
                      <li>
                        <a
                          href="#"
                          class="block text-base rounded-t-md hover:text-black px-5 py-2"
                          >Footer Layout 1</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block text-base hover:text-black px-5 py-2"
                          >Footer Layout 2</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block text-base hover:text-black px-5 py-2"
                          >Footer Layout 3</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block text-base rounded-b-md hover:text-black px-5 py-2"
                          >Footer Layout 4</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div class="">
                <a
                  href="#"
                  class="text-xs min-[1200px]:text-base hover:text-accent"
                  >Contact Us</a
                >
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
      'm-0 hidden translate-x-full ': !isMenuOpen,
    }"
    class="bg-accent fixed top-0 left-0 w-screen h-full z-[100] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col"
  >
    <div
      class="h-19.5 flex justify-end items-center border-b border-solid border-white p-5 flex-shrink-0"
    >
      <button
        class="bg-white w-9.5 h-9.5 rounded-lg cursor-pointer focus:bg-black"
        @click="toggleMenu"
      >
        <i class="fa-solid fa-x text-black focus:text-white"></i>
      </button>
    </div>

    <div class="text-white py-2.5 container overflow-y-auto flex-grow">
      <div v-for="(item, index) in items" :key="index" class="px-5">
        <a href="#" @click="toggleItem(index)" class="py-2 focus:text-black">
          {{ item.label }}
          <i
            class="fa-solid fa-angle-down ml-2 text-xs"
            v-if="item.subItems && item.subItems.length > 0"
          ></i>
        </a>
        <ul class="pl-2.5" v-if="openItem[index]">
          <li v-for="(subItem, subIndex) in item.subItems" :key="subItem.label">
            <a :href="subItem.href" class="py-2 focus:text-black">
              {{ subItem.label }}
              <i
                class="fa-solid fa-angle-down ml-2 text-xs"
                v-if="subItem.subItems && subItem.subItems.length > 0"
              ></i>
            </a>
            <ul class="pl-6">
              <li
                v-for="nestedItem in subItem.subItems"
                :key="nestedItem.label"
              >
                <a :href="nestedItem.href" class="focus:text-black py-2">{{
                  nestedItem.label
                }}</a>
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
    subItems: [
      { label: "Home - Main", href: "#" },
      { label: "Home - Video", href: "#" },
      { label: "Home - Slider", href: "#" },
    ],
  },
  { label: "About Us" },
  { label: "Blog" },
  {
    label: "Store",
    subItems: [
      { label: "Product", href: "#" },
      { label: "Product Single", href: "#" },
      { label: "Cart", href: "#" },
      { label: "My Account", href: "#" },
    ],
  },
  {
    label: "Pages",
    subItems: [
      { label: "Blog Details", href: "#" },
      { label: "Features", href: "#" },
      { label: "Testimonials", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "404", href: "#" },
      {
        label: "Header Layouts",
        href: "#",
        subItems: [
          { label: "Header Layouts 1", href: "#" },
          { label: "Header Layouts 2", href: "#" },
          { label: "Header Layouts 3", href: "#" },
          { label: "Header Layouts 4", href: "#" },
        ],
      },
      {
        label: "Footer Layouts",
        href: "#",
        subItems: [
          { label: "Footer Layouts 1", href: "#" },
          { label: "Footer Layouts 2", href: "#" },
          { label: "Footer Layouts 3", href: "#" },
          { label: "Footer Layouts 4", href: "#" },
        ],
      },
    ],
  },
  { label: "Contact Us" },
]);

const openItem = ref(items.value.map(() => false));
// const openSubItem = ref(items.subItems.value.map(() => false));

const toggleItem = (index) => {
  openItem.value[index] = !openItem.value[index];
};
</script>
