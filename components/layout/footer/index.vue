<template>
  <div class="bg-[#0A2C0F] text-white px-2.5">
    <div
      class="max-w-[1300px] lg:pt-[100px] pt-12.5 lg:pb-12.5 pb-[25px] mx-auto flex lg:flex-row flex-col lg:gap-0 gap-2.5"
    >
      <div
        class="lg:w-1/3 text-left py-2.5 pl-2.5 lg:pr-12.5 pr-2.5 flex justify-between"
      >
        <div class="w-[calc(50%-15px)] flex flex-col lg:gap-7.5 gap-[15px]">
          <div class="text-[20px] font-bold">Quick Link</div>
          <ul class="flex flex-col gap-4">
            <li class="hover:text-[#d1a132] cursor-pointer"><a>Home</a></li>
            <li class="hover:text-[#d1a132] cursor-pointer"><a>About Us</a></li>
            <li class="hover:text-[#d1a132] cursor-pointer"><a>Features</a></li>
            <li class="hover:text-[#d1a132] cursor-pointer">
              <a>Latest Blog</a>
            </li>
          </ul>
        </div>

        <div class="w-[calc(50%-15px)] flex flex-col lg:gap-7.5 gap-[15px]">
          <div class="text-[20px] font-bold">Help</div>
          <ul class="flex flex-col gap-4">
            <li class="hover:text-[#d1a132] cursor-pointer"><a>Help</a></li>
            <li class="hover:text-[#d1a132] cursor-pointer">
              <a>Privacy Policy</a>
            </li>
            <li class="hover:text-[#d1a132] cursor-pointer">
              <a>Terms & Condition</a>
            </li>
            <li class="hover:text-[#d1a132] cursor-pointer">
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="lg:w-2/3 flex sm:flex-row flex-col gap-[15px] sm:gap-0">
        <div class="sm:w-1/2 flex flex-col gap-7.5 p-2.5">
          <img
            src="/public/icons/icon.svg"
            alt=""
            class="max-w-[182px] lg:mx-auto"
          />
          <div class="lg:text-center">
            123 High Street, London, W1A 1AA, United Kingdom
          </div>
          <div
            class="flex flex-col min-[366px]:flex-row lg:max-[1250px]:flex-col xl:flex-row gap-7.5 lg:mx-auto sm:flex-row"
          >
            <button
              class="cursor-pointer py-2 px-5 border border-solid border-white rounded-full hover:border-[#d1a132] hover:text-[#d1a132]"
            >
              +91 - 123 468 963
            </button>
            <button
              class="cursor-pointer py-2 px-5 border border-solid border-white rounded-full hover:border-[#d1a132] hover:text-[#d1a132]"
            >
              info@domain.com
            </button>
          </div>
        </div>

        <div
          class="sm:w-1/2 py-2.5 sm:pl-5 pr-2.5 lg:pl-17.5 pl-2.5 gap-[15px] lg:gap-7.5 flex flex-col"
        >
          <div>Newsletter</div>
          <form class="flex items-center">
            <input
              type="text"
              placeholder="Enter Your Email"
              class="bg-[#ffffff1a] py-[15px] px-4 rounded-full text-white placeholder:text-white w-full"
            />
            <button type="submit">
              <img
                src="/public/icons/submit.svg"
                class="p-2.5 sm:p-4 rounded-full bg-[#d1a132]"
                alt=""
              />
            </button>
          </form>
          <ul
            class="text-white gap-[15px] items-center flex border-r border-solid border-[#ffffff1a]"
          >
            <li
              class="w-9 h-9 border border-white border-solid rounded-full flex justify-center items-center hover:border-[#d1a132] hover:text-[#d1a132]"
            >
              <a href=""><i class="fa-brands fa-pinterest-p"></i></a>
            </li>
            <li
              class="w-9 h-9 border border-white border-solid rounded-full flex justify-center items-center hover:border-[#d1a132] hover:text-[#d1a132]"
            >
              <a href=""><i class="fa-brands fa-x-twitter"></i></a>
            </li>
            <li
              class="w-9 h-9 border border-white border-solid rounded-full flex justify-center items-center hover:border-[#d1a132] hover:text-[#d1a132]"
            >
              <a href=""><i class="fa-brands fa-facebook-f"></i></a>
            </li>
            <li
              class="w-9 h-9 border border-white border-solid rounded-full flex justify-center items-center hover:border-[#d1a132] hover:text-[#d1a132]"
            >
              <a href=""><i class="fa-brands fa-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="text-center border-t border-[#FFFFFF1A] border-solid lg:py-12.5 py-[25px]"
    >
      Copyright © 2025 All Rights Reserved.
    </div>
  </div>
</template>
