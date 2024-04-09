<script setup>
import { useTechStore } from "@/stores/techs.js"

const { techList, removeTech } = useTechStore();

</script>

<template>
   <ul class="list">
      <li v-for="tech in techList" :key="tech.id">
         <h3>{{ tech.name }}</h3>
         <button @click="removeTech(tech.id)">Remover</button>
      </li>
   </ul>
</template>

<style scoped lang="scss" src="./style.scss" />
