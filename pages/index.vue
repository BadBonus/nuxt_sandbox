<script setup lang="ts">
  import svgTest from "@/public/images/alien-svgrepo-com.svg";
</script>

<template>
  <div class="Index">
    <NuxtImg class="w-100 h-100" src="https://i.pinimg.com/736x/91/53/05/915305d0646eb23975caae6b9115d102.jpg" />
    <h1 class="text-3xl text-amber-300 font-bold">asdasssd wor123ld!</h1>
    <svgTest />
    <Icon name="uil:github" style="color: black" />
  </div>
</template>

<style>
  .Index {
    background: red;
    h1 {
      background: green;
      width: 100px;
    }
  }
</style>
