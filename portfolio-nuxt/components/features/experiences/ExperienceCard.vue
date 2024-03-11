<script setup lang="ts">
import {Experience} from "~/types/experience";

defineProps<{
  experience: Experience
}>()
</script>

<template>
  <div>
    <div>
      <span>{{experience.Position}}</span>
      <span>{{experience.Dates}}</span>
      <span>{{experience.CompanyName}}</span>
      <span>{{experience.CompanySector}}</span>
    </div>
    <div>
      <div>
        <span>{{experience.Description}}</span>
        <span>{{experience.Technologies}}</span>
      </div>
      <img :src="experience.Image" :alt="experience.CompanyName">
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>