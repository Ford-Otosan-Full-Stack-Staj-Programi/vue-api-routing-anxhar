<script setup>
import { ref, onMounted } from "vue"
import { getAllMortys } from "../service/mortys"
import {RouterLink} from "vue-router"
const mortys = ref([])
onMounted(async () => {
    mortys.value = await getAllMortys()
})
</script>

<template>
  <main>
    <h1>Rick And Morty List</h1>
    <ul>
      <li v-for="morty in mortys">
        <RouterLink :to="'mortyPerson/' + morty.id">{{morty.name}}</RouterLink>
      </li>
    </ul>
  </main>
</template>