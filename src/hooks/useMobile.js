import { onMounted, onUnmounted, ref } from "vue";

export const useMobile = (breakpoint = 1024) => {
   const isMobile = ref(false);

   function handleResize() {
      if (window.innerWidth < breakpoint) {
         if (!isMobile.value) isMobile.value = true;
      } else {
         if (isMobile.value) isMobile.value = false;
      }
   }

   onMounted(() => {
      handleResize();

      window.addEventListener("resize", handleResize);
   });
   onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
   });

   return isMobile;
};
