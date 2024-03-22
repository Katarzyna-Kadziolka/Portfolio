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
      <span class="experience-card_dates">{{ experience.Dates }}</span>
      <span class="experience-card_company">{{ experience.CompanyName }}</span>
      <span class="experience-card_company-sector">{{ experience.CompanySector }}</span>
    </div>
    <Transition appear>
      <div v-show="showMore" class="experience-card_details-container">
        <hr>
        <div class="experience-card_details">
          <span class="experience-card_description">{{ experience.Description }}</span>
          <img :src="experience.Image" :alt="experience.CompanyName">
        </div>
        <div class="experience-card_tags">
          <BaseTag v-for="technology in experience.Technologies">{{technology}}</BaseTag>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 25vh;
  object-fit: contain;
  @media (max-width: 768px) {
    padding-bottom: 16px;
  }
}

hr {
  width: 100%;
}

.v-enter-active,
.v-leave-active {
  transition: max-height .5s;
  max-height: 500px;
}

.v-enter-from,
.v-leave-to {
  max-height: 0px;
  overflow: hidden;
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
    @media (max-width: 768px) {
      width: 70vw;
    }
  }

  &_title-container {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 2fr 1fr;
    row-gap: 8px;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  &_title {
    font-size: 1.5rem;
  }

  &_company {
    font-size: 1.2rem;
    justify-self: end;
    grid-column: 2;
    grid-row: 1;
  }

  &_company-sector {
    justify-self: end;
    grid-column: 2;
    grid-row: 2;
  }

  &_dates {
    grid-column: 1;
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
    padding-top: 8px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  &_description {
    @media (max-width: 768px) {
      order: 1;
    }
  }
}
</style>