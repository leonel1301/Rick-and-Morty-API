<script setup>


</script>

<script>

import CardsComponent from "@/components/Cards-Component.vue";
import axios from 'axios';

export default{
    components: { CardsComponent} ,
    data() {
        return{
          info: []
        }
    },
    mounted(){
        axios.get('https://rickandmortyapi.com/api/character?page=1')
            .then((response) => {this.info = response.data.results;})
            .catch((error) => {alert(error)
            });

    }
}
</script>

<template>
  <main>
      <div class="container" v-if="info.length >0 ">
          <CardsComponent v-for="d in info" :key="d.id" :id="d.id" :name="d.name" :gender="d.gender" :status="d.status" :image="d.image"/>
      </div>
      <div v-else>
          <h1>{{$t('loading')}} </h1>
      </div>
  </main>
</template>

<style>
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
