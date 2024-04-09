<script setup>
import { ref } from "vue";
import { useTechStore } from "@/stores/techs.js";

const { addTech } = useTechStore();

const name = ref("");

function submit() {
   addTech({ name: name.value });
}
</script>

<template>
   <form @submit.prevent="submit">
      <h2>Adicionar tecnologia</h2>
      <input v-model="name" type="text" />
      <button type="submit">Criar</button>
   </form>
</template>
