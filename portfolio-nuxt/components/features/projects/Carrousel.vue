<script setup lang="ts">
import BaseTag from "~/components/common/BaseTag.vue";
import {Technology} from "~/types/technology";
import BaseButton from "~/components/common/BaseButton.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps<{
  title: string,
  description: string,
  technologies: Technology[],
  imagePath: string,
  date: string,
}>()

const imageUrl = new URL(props.imagePath, import.meta.url)
</script>

<template>
  <div class="carrousel_container">
    <div class="carrousel_exit-button" @click="$emit('close')">
      <FontAwesomeIcon icon="fa solid fa-xmark" />
    </div>
    <div class="carrousel_img-container">
      <img :src="imagePath" :alt="title">
    </div>
    <div class="carrousel_content">
      <span class="carrousel_title">{{ title }}</span>
      <span>{{ date }}</span>
      <span class="carrousel_description">{{ description }}</span>
    </div>
    <div class="carrousel_tags">
      <BaseTag v-for="technology in technologies" :label="technology" />
    </div>
    <div class="carrousel_buttons">
      <BaseButton label="Github" class="carrousel_button" />
      <BaseButton label="Website" class="carrousel_button" />
    </div>
    <div class="carrousel_navigations">
      <BaseButton class="carrousel_nav-button" label="<" />
      <BaseButton class="carrousel_nav-button" label=">" />
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
}
.carrousel {
  &_container {
    background: $nav-primary;
    width: 90vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
  }
  &_img-container {
    height: 50%;
    width: 100%;
    overflow: hidden;
    border-bottom: 3px solid $nav-secondary;
  }
  &_title {
    font-size: 2rem;
  }
  &_content {
    display: flex;
    flex-direction: column;
    padding: 16px;
    row-gap: 8px;
  }
  &_description {
    font-size: 1.5rem;
  }
  &_tags {
    display: flex;
    column-gap: 8px;
    padding: 16px;
  }
  &_buttons {
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 8px;
  }
  &_button {
    width: 150px;
  }
  &_navigations {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
    margin-top: auto;
  }
  &_nav-button {
    width: 25px;
  }
  &_exit-button {
    position: absolute;
    top: 16px;
    right: 16px;
    background: $nav-primary;
    border: 2px solid $primary;
    cursor: pointer;
    font-size: 1.5rem;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $primary;
  }
}
</style>