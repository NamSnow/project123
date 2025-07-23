<template>
  <div>
    <Header />

    <!-- 1.About Us-->
    <AboutUs />

    <!-- 2.Why Choose Us -->
    <WhyChooseUs />

    <!-- 3.Our Product -->
    <OurProduct />

    <!-- 4.What We Do ? -->
    <WhatWeDo />

    <!-- 5.Our Key Points -->
    <OurKeyPoints />

    <!-- 6.Premium Dropper-->
    <PremiumDropper />

    <!-- 7.Benefits of Oil -->
    <BenefitsofOil />

    <!-- 8.Get 50% off Premium oil -->
    <Get50offPremiumoil />

    <!-- 9.FAQ's -->
    <FAQs />

    <!-- 10.Testimonials -->
    <Testimonials />

    <!-- 11.Latest Blog -->
    <LatestBlog />

    <Footer />
  </div>
</template>

<script setup>
import Button from "~/components/Button.vue";
import { ref } from "vue";
import Title from "~/components/Title.vue";
import AboutUs from "~/components/AboutUs.vue";
import WhyChooseUs from "~/components/WhyChooseUs.vue";
import OurProduct from "~/components/OurProduct.vue";
import WhatWeDo from "~/components/WhatWeDo.vue";
import OurKeyPoints from "~/components/OurKeyPoints.vue";
import PremiumDropper from "~/components/PremiumDropper.vue";
import BenefitsofOil from "~/components/BenefitsofOil.vue";
import FAQs from "~/components/FAQs.vue";
import Get50offPremiumoil from "~/components/Get50offPremiumoil.vue";
import Testimonials from "~/components/Testimonials.vue";
import LatestBlog from "~/components/LatestBlog.vue";
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
</script>
