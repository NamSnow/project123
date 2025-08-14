<template>
  <div class="bg-background">
    <div class="container">
      <div class="py-12.5 lg:py-25 flex flex-col gap-10 lg:gap-20">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5 p-2.5"
        >
          <div
            v-for="(product, index) in productItems"
            :key="index"
            class="relative @container"
          >
            <div class="h-56.25 sm:max-h-65 lg:max-h-55.5">
              <img
                :src="product.image"
                alt=""
                class="object-cover rounded-[20px] w-full h-full"
              />
            </div>

            <NuxtLink
              to=""
              class="flex gap-5 absolute bottom-7.5 left-7.5 right-7.5 cursor-pointer group items-center"
            >
              <div
                class="w-12.5 h-12.5 bg-accent rounded-full flex justify-center items-center text-white group-hover:text-black group-hover:bg-white transition duration-500"
              >
                <component :is="product.icon" />
              </div>

              <div class="text-white">
                <div class="font-bold text-lg sm:text-xl mb-1.25">
                  {{ product.title }}
                </div>

                <div>{{ product.content }}</div>
              </div>
            </NuxtLink>
          </div>
        </div>

        <div class="p-2.5">
          <div
            class="bg-white flex justify-between rounded-[20px] flex-col lg:flex-row min-h-full"
          >
            <div class="p-5 sm:p-7.5 lg:p-10 flex flex-col gap-3.75 lg:w-1/2">
              <div class="mb-5 lg:mb-6.25">
                <Title
                  :title="{
                    content: 'Contact Us',
                    mainTitle: 'Get in touch',
                    subTitle: 'with us',
                  }"
                />
              </div>

              <form action="" class="flex flex-col gap-4">
                <div class="flex max-sm:flex-col gap-4 sm:gap-7.5">
                  <input
                    type="text"
                    placeholder="First Name"
                    class="px-3.75 py-3 max-lg:h-12.5 lg:py-4.25 lg:px-5 border border-solid border-divider rounded-[10px] font-normal leading-[3/2] text-text w-full focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    class="px-3.75 py-3 max-lg:h-12.5 lg:py-4.25 lg:px-5 border border-solid border-divider rounded-[10px] font-normal leading-[3/2] text-text w-full focus:outline-none"
                  />
                </div>

                <div class="">
                  <input
                    type="email"
                    placeholder="Email"
                    class="px-3.75 py-3 max-lg:h-12.5 lg:py-4.25 lg:px-5 border border-solid border-divider rounded-[10px] font-normal leading-[3/2] text-text w-full focus:outline-none"
                  />
                </div>

                <div>
                  <input
                    type="number"
                    placeholder="Phone"
                    class="px-3.75 py-3 max-lg:h-12.5 lg:py-4.25 lg:px-5 border border-solid border-divider rounded-[10px] font-normal leading-[3/2] text-text w-full focus:outline-none"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Write Message..."
                    class="px-3.75 py-3 max-lg:h-12.5 lg:py-4.25 lg:px-5 border border-solid border-divider rounded-[10px] font-normal leading-[3/2] text-text w-full min-h-24.5 lg:min-h-27 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="bg-accent block mt-6 py-3.75 px-5 lg:py-4.25 lg:px-7.5 font-bold text-white rounded-full cursor-pointer hover:bg-black transition-all duration-500"
                >
                  Submit Message
                </button>
              </form>
            </div>

            <div class="lg:w-1/2">
              <iframe
                class="object-cover w-full min-h-87.5 sm:min-h-112.5 lg:min-h-full max-lg:rounded-b-[20px] lg:rounded-r-[20px]"
                loading="lazy"
                src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                title="London Eye, London, United Kingdom"
                aria-label="London Eye, London, United Kingdom"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "~/components/Title.vue";
import Email from "~/components/icons/e_email_us.vue";
import Location from "~/components/icons/location.vue";
import ContactUs from "~/components/icons/contact_us.vue";
import { textarea } from "#build/ui";

const productItems = ref([
  {
    image: "/images/hero-bg.jpg",
    icon: Email,
    title: "Contact Us",
    content: "+91 123 456 789",
  },
  {
    image: "/images/contact-info-img-2.jpg",
    icon: ContactUs,
    icon: Email,
    title: "E-Mail Us",
    content: "info@domainname.com",
  },
  {
    image: "/images/contact-info-img-3.jpg",
    icon: Location,
    icon: Email,
    title: "Location",
    content: "1058 Meadowbrook , CA 95050",
  },
]);
</script>

<style lang="scss" scoped></style>
