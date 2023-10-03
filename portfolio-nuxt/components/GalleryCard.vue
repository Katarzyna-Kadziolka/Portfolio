<script setup lang="ts">
import BaseTag from "~/components/common/BaseTag.vue";
import {Technology} from "~/types/technology";

defineProps<{
  title: string,
  description: string,
  technologies: Technology[]
}>()
</script>

<template>
  <div class="gallery-card_container">
    <img src="../assets/images/doscvolTools-mini.png" alt="Doscvol tools" class="gallery-card_image">
    <div class="gallery-card_content">
      <span class="gallery-card_title"><b>{{title}}</b></span>
      <span>{{description}}</span>
      <hr>
      <div class="gallery-card_tags">
        <BaseTag v-for="technology in technologies" :key="technology" :label="technology" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
hr {
  background: $primary;
  height: 1px;
  width: 100%;
}
.gallery-card {
  &_container {
    box-shadow: 8px 8px 23px 0px rgba(66, 68, 90, 1);
    border-radius: 15px;
  }
  &_image {
    width: inherit;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }
  &_content {
    display: flex;
    flex-direction: column;
    padding: 16px;
    row-gap: 8px;
  }
  &_title {
    font-size: 1.2rem;
  }
  &_tags {
    display: flex;
    flex-direction: row;
    column-gap: 8px;
  }
}
</style>