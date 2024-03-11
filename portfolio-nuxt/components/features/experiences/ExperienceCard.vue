<script setup lang="ts">
import {Experience} from "~/types/experience";
import {ref} from "vue";
import BaseTag from "~/components/common/BaseTag.vue";

defineProps<{
  experience: Experience
}>();

const showMore = ref<boolean>(false);
</script>

<template>
  <div class="experience-card_container" @click="showMore = !showMore">
    <div class="experience-card_title-container">
      <span class="experience-card_title">{{ experience.Position }}</span>
      <span class="experience-card_company">{{ experience.CompanyName }}</span>
      <span>{{ experience.Dates }}</span>
      <span class="experience-card_company-sector">{{ experience.CompanySector }}</span>
    </div>
    <div v-if="showMore" class="experience-card_details-container">
      <hr>
      <div class="experience-card_details">
        <span>{{ experience.Description }}</span>
        <img :src="experience.Image" :alt="experience.CompanyName">
      </div>
      <div class="experience-card_tags">
        <BaseTag v-for="technology in experience.Technologies" :label="technology"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 25vh;
  object-fit: contain;
  @media (max-width: 768px) {
  }
}
hr {
  width: 100%;
}

.experience-card {
  &_container {
    padding: 8px 16px;
    border: 2px solid $primary;
    border-radius: 15px;
    width: 50vw;
    align-self: center;
    background: $nav-primary;
    cursor: pointer;
  }

  &_title-container {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 2fr 1fr;
    row-gap: 8px;
  }

  &_title {
    font-size: 1.5rem;
  }

  &_company {
    font-size: 1.2rem;
    justify-self: end;
  }

  &_company-sector {
    justify-self: end;
  }

  &_details-container {
    display: flex;
    flex-direction: column;
    column-gap: 32px;
    padding-top: 8px;
  }

  &_tags {
    width: inherit;
    display: flex;
    padding: 16px 0 8px 0;
    column-gap: 8px;
    row-gap: 8px;
    flex-wrap: wrap;
  }

  &_details {
    display: flex;
    column-gap: 8px;
  }
}
</style>