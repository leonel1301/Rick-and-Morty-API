<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from "@/components/Header-Component.vue";
import FooterComponent from "@/components/Footer-Component.vue";
import CardsComponent from "@/components/Cards-Component.vue";
//import CardsComponent from "@/components/Cards-Component.vue";
</script>

<template>
  <header-component/>
  <RouterView />
  <footer-component/>
</template>

<style scoped>
</style>
