<script setup lang="ts">
import ExperienceCard from "~/components/features/experiences/ExperienceCard.vue";
import {experiences} from "~/data/experiences"

</script>

<template>
  <div class="experience_container">
    <ExperienceCard v-for="experience in experiences" :experience="experience" :key="experience" />
  </div>
</template>

<style scoped lang="scss">
.experience {
  &_container {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    padding: 32px;
  }
}
</style>