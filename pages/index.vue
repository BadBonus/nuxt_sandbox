<script setup lang="ts">
  import svgTest from "@/public/images/alien-svgrepo-com.svg";

  const plans = [
    { name: "Startup", ram: "12GB", cpus: "6 CPUs", disk: "256GB SSD disk" },
    { name: "Business", ram: "16GB", cpus: "8 CPUs", disk: "512GB SSD disk" },
    { name: "Enterprise", ram: "32GB", cpus: "12 CPUs", disk: "1TB SSD disk" },
  ];

  const plan = ref(plans[0]);
</script>

<template>
  <div class="Index">
    <NuxtImg class="w-100 h-100" src="https://i.pinimg.com/736x/91/53/05/915305d0646eb23975caae6b9115d102.jpg" />
    <h1 class="text-3xl text-red-300 font-bold">aKEKSIJ sdasssd woasdasdasdr123ld!</h1>
    <svgTest />
    <Icon name="uil:github" style="color: black" />
  </div>
</template>

<style>
  .Index {
  }
</style>
