<script setup>
import { ref, onMounted } from "vue"
import { getMorty } from "../service/mortys"
import {useRoute} from "vue-router"
const route = useRoute()
const mortyCharSkill = ref({})
onMounted(async () => {
  mortyCharSkill.value = await getMorty(route.params.mortyPersonId)   
})
alert(mortyCharSkill.id)
</script>

<template>
  <div>
    <h1>Rick and Morty Person View {{ $route.params.mortyPersonId }}</h1>
      <div>
        <img :src = "mortyCharSkill.image">
        <h1>CharID: {{ mortyCharSkill.id }}</h1>
        <h1>name: {{ mortyCharSkill.name }}</h1>
        <h1>status: {{ mortyCharSkill.status }}</h1>
        <h1>species: {{ mortyCharSkill.species }}</h1>
        <h1>type: {{ mortyCharSkill.type }}</h1>
        <h1>gender: {{ mortyCharSkill.gender }}</h1>
        <RouterLink :to="'Morty-link'">"{{mortyCharSkill.url}}"</RouterLink>   
        <h1>created: {{ mortyCharSkill.created }}</h1>
      </div>
  </div>
</template>