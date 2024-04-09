<script setup>
import { useTechStore } from "@/stores/techs.js";

const { removeTech } = useTechStore();

defineProps({
   tech: Object,
});
</script>

<template>
   <li>
      <h3>{{ tech.name }}</h3>
      <button @click="removeTech(tech.id)">Remover</button>
   </li>
</template>
