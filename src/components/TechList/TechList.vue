<script setup>
import TechCard from "./TechCard/TechCard.vue";
import { useTechStore } from "@/stores/techs";

const { techList } = useTechStore();

</script>

<template>
   <ul class="list">
      <TechCard v-for="tech in techList" :key="tech.id" :tech="tech" />
   </ul>
</template>

<style scoped lang="scss" src="./style.scss" />
