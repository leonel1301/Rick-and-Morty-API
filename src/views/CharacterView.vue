<template>
  <div>
      <h2>{{ this.character.name}}</h2>

  </div>
</template>

<script setup>
import axios from 'axios';
import CardsComponent from "@/App.vue";
</script>

<script>

export default {
    name: "CharacterView",

    data(){
        return{
            character: {},
        };
    },
    created(){
        axios.get(`https://rickandmortyapi.com/api/character/${this.$route.params.id}`)
            .then((response)=>{
                this.character = response.data;
            })
            .catch((err)=>{
                alert(err);
            })
    },


}
</script>

<style scoped>

</style>