<template>
  <UApp>
    <NuxtPage />
    <UNotifications :toaster="{ position: 'top-0 right-0' }" />
  </UApp>
</template>
<script setup lang="ts">
useServerSeoMeta({});
useHead({});
</script>
