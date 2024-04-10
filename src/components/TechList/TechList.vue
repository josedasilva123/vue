<script setup>
import TechCard from "./TechCard/TechCard.vue";
import { useTechStore } from "@/stores/techs";
import { useMobile } from "@/hooks/useMobile";

const { techList } = useTechStore();
const isMobile = useMobile(768);

</script>

<template>
   <h1 v-if="isMobile">Estou no mobile 2</h1>
   <h1 v-else>Estou no desktop 2</h1>
   <ul class="list">
      <TechCard v-for="tech in techList" :key="tech.id" :tech="tech" />
   </ul>
</template>

<style scoped lang="scss" src="./style.scss" />
