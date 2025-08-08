<template>
  <div class="relative bg-primary text-white">
    <img
      src="/images/section-bg-shape-3.png"
      alt=""
      class="absolute top-0 right-0"
    />
    <img
      src="/images/section-bg-shape-3.png"
      alt=""
      class="absolute bottom-0 left-0 scale-y-[-1] z-0"
    />

    <div class="container">
      <div
        class="pt-12.5 lg:pt-25 pb-6.25 lg:pb-12.5 flex lg:flex-row flex-col lg:gap-0 gap-2.5 relative z-50"
      >
        <div
          class="lg:w-1/3 text-left py-2.5 pl-2.5 lg:pr-12.5 pr-2.5 flex justify-between"
        >
          <div class="w-1/2 flex flex-col lg:gap-7.5 gap-3.75">
            <div class="text-xl font-bold">Quick Link</div>
            <ul class="flex flex-col gap-4">
              <li
                class="hover:text-accent cursor-pointer transition duration-300"
              >
                <a>Home</a>
              </li>
              <li
                class="hover:text-accent cursor-pointer transition duration-300"
              >
                <a>About Us</a>
              </li>
              <li
                class="hover:text-accent cursor-pointer transition duration-300"
              >
                <a>Features</a>
              </li>
              <li
                class="hover:text-accent cursor-pointer transition duration-300"
              >
                <a>Latest Blog</a>
              </li>
            </ul>
          </div>

          <div class="w-1/2 flex flex-col lg:gap-7.5 gap-3.75">
            <div class="text-xl font-bold">Help</div>
            <ul class="flex flex-col gap-4">
              <li
                class="hover:text-accent cursor-pointer transition duration-300"
              >
                <a>Help</a>
              </li>
              <li
                class="hover:text-accent cursor-pointer transition duration-300"
              >
                <a>Privacy Policy</a>
              </li>
              <li
                class="hover:text-accent cursor-pointer transition duration-300"
              >
                <a>Terms & Condition</a>
              </li>
              <li
                class="hover:text-accent cursor-pointer transition duration-300"
              >
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="lg:w-2/3 flex sm:flex-row flex-col gap-3.75 sm:gap-0">
          <div class="sm:w-1/2 flex flex-col gap-7.5 p-2.5">
            <img src="/icons/logo.svg" alt="" class="max-w-45.5 lg:mx-auto" />
            <div class="lg:text-center">
              123 High Street, London, W1A 1AA, United Kingdom
            </div>
            <div class="flex flex-col xl:flex-row gap-7.5 lg:mx-auto">
              <a
                class="cursor-pointer py-2 px-5 border border-solid border-white rounded-full hover:border-accent hover:text-accent font-bold transition duration-300"
              >
                +91 - 123 468 963
              </a>
              <a
                class="cursor-pointer py-2 px-5 border border-solid border-white rounded-full hover:border-accent hover:text-accent font-bold transition duration-300"
              >
                info@domain.com
              </a>
            </div>
          </div>

          <div
            class="sm:w-1/2 py-2.5 sm:pl-5 pr-2.5 lg:pl-17.5 pl-2.5 gap-3.75 lg:gap-7.5 flex flex-col"
          >
            <div class="font-bold text-xl">Newsletter</div>
            <form class="flex items-center">
              <input
                type="text"
                placeholder="Enter Your Email"
                class="bg-darkdivider h-12.5 sm:h-15 px-4 rounded-full text-white placeholder:text-white w-full focus:outline-none"
              />
              <button
                type="submit"
                class="overflow-hidden bg-accent rounded-full hover:bg-darkdivider object-contain w-12.5 h-12.5 sm:w-15 sm:h-15 flex items-center justify-center flex-shrink-0 cursor-pointer transition duration-300"
              >
                <img src="/icons/submit.svg" class="object-contain" alt="" />
              </button>
            </form>
            <ul class="text-white gap-3.75 items-center flex">
              <li
                class="w-9 h-9 border border-white border-solid rounded-full flex justify-center items-center hover:border-accent hover:text-accent cursor-pointer transition duration-300"
              >
                <a href=""><i class="fa-brands fa-pinterest-p"></i></a>
              </li>
              <li
                class="w-9 h-9 border border-white border-solid rounded-full flex justify-center items-center hover:border-accent hover:text-accent cursor-pointer transition duration-300"
              >
                <a href=""><i class="fa-brands fa-x-twitter"></i></a>
              </li>
              <li
                class="w-9 h-9 border border-white border-solid rounded-full flex justify-center items-center hover:border-accent hover:text-accent cursor-pointer transition duration-300"
              >
                <a href=""><i class="fa-brands fa-facebook-f"></i></a>
              </li>
              <li
                class="w-9 h-9 border border-white border-solid rounded-full flex justify-center items-center hover:border-accent hover:text-accent cursor-pointer transition duration-300"
              >
                <a href=""><i class="fa-brands fa-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div
      class="text-center border-t border-darkdivider border-solid py-5 lg:py-10"
    >
      Copyright © 2025 All Rights Reserved.
    </div>
  </div>
</template>
