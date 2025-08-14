<template>
  <div class="overflow-x-hidden">
    <Header />

    <AboutUs />

    <OurApproach />

    <OurKeyPoints />

    <OurCoreValues />

    <TraditionInnovation />

    <OurCommitment />

    <BenefitsofOil />

    <Testimonials />

    <FAQs />

    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
import AboutUs from "~/components/AboutUs.vue";
import OurKeyPoints from "~/components/OurKeyPoints.vue";
import BenefitsofOil from "~/components/BenefitsofOil.vue";
import Testimonials from "~/components/Testimonials.vue";
import FAQs from "~/components/FAQs.vue";
import OurApproach from "~/components/OurApproach.vue";
import OurCoreValues from "~/components/OurCoreValues.vue";
import TraditionInnovation from "~/components/Tradition&Innovation.vue";
import OurCommitment from "~/components/OurCommitment.vue";

definePageMeta({
  banner: "BannerAll",
});
</script>

<style lang="scss" scoped></style>
