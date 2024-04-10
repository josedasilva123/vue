<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useMobile } from "@/hooks/useMobile";

const isMobile = useMobile();

</script>

<template>
   <header>
      <div :class="isMobile ? 'mobile' : 'desktop'">
         <h1 v-if="isMobile">Estou no mobile</h1>
         <h1 v-else>Estou no desktop</h1>
      </div>
   </header>
</template>
