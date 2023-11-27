<script setup lang="ts">
import BaseTag from "~/components/common/BaseTag.vue";
import {Technology} from "~/types/technology";
import BaseButton from "~/components/common/BaseButton.vue";

const props = defineProps<{
  title: string,
  description: string,
  technologies: Technology[],
  imagePath: string,
}>()

const imageUrl = new URL(props.imagePath, import.meta.url)


</script>

<template>
  <div class="gallery-card_container">
    <div class="gallery-card_img-container">
      <img :src="imageUrl" :alt="title" class="gallery-card_img">
    </div>
    <div class="gallery-card_content">
      <span class="gallery-card_title"><b>{{title}}</b></span>
      <span>{{description}}</span>
      <div class="gallery-card_button-container">
        <BaseButton class="gallery-card_button" label="Show more" />
      </div>
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
    margin: 0px 0px 1.5em;
    position: relative;
    cursor: pointer;
    object-fit: cover;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    border-radius: 9px;
    break-inside: avoid;
    height: 50vh;
  }
  &_img {
    object-fit: cover;
  }
  &_content {
    opacity: 0;
    transform: translateY(10%);
    transition: opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s;
  }

  &_img-container {
    position: absolute;
    object-fit: cover;
    width: 100% !important;
    height: 100% !important;
    left: 0 !important;
    top: 0 !important;
  }




  &_title {
    font-size: 1.2rem;
  }
  &_tags {
    display: flex;
    flex-direction: row;
    column-gap: 8px;
    row-gap: 8px;
    flex-wrap: wrap;
  }
  &_button-container {
    display: flex;
    justify-content: flex-end;
  }
  &_button {
    width: 100px;
  }
}
</style>