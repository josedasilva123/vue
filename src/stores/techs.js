import { ref } from "vue";
import { defineStore } from "pinia";

export const useTechStore = defineStore("techs", () => {
   const techList = ref([
      {
         id: 1,
         name: "React",
      },
      {
         id: 2,
         name: "Vue",
      },
      {
         id: 3,
         name: "Angular",
      },
   ]);

   let id = 1;

   function addTech(formData) {
      const newTech = {
         id,
         name: formData.name,
      };

      techList.value.push(newTech);

      id++;
   }

   function removeTech(removingId) {
      const index = techList.value.findIndex((tech) => tech.id === removingId);

      if (index !== -1) {
         techList.value.splice(index, 1);
      } else {
         alert("Tecnologia inválida.");
      }
   }

   return { addTech, removeTech, techList };
});
