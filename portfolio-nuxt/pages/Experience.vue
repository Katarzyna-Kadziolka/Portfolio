<script setup lang="ts">
import ExperienceCard from "~/components/features/experiences/ExperienceCard.vue";
import {experiences} from "~/data/experiences"

</script>

<template>
    <ExperienceCard v-for="experience in experiences" :experience="experience" :key="experience" />
</template>