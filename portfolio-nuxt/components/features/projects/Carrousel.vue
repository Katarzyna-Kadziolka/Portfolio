<script setup lang="ts">


import BaseTag from "~/components/common/BaseTag.vue";
import {Technology} from "~/types/technology";
import BaseButton from "~/components/common/BaseButton.vue";
</script>

<template>
  <div class="carrousel_container">
    <div class="carrousel_img-container">
      <img src="~/assets/images/doskvolTools.png" alt="Doskvol tools">
    </div>
    <div class="carrousel_content">
      <span class="carrousel_title">Doskvol Tools</span>
      <span>09.2023-09.2023</span>
      <span class="carrousel_description">I have written a web application to facilitate the use of the tables in the Blades in the Dark game manual. The game master can quickly generate the result, correct any mismatched elements and copy the result to the notes.</span>
    </div>
    <div class="carrousel_tags">
      <BaseTag :label=Technology.Vue />
      <BaseTag :label=Technology.TypeScript />
      <BaseTag :label=Technology.Html />
      <BaseTag :label=Technology.Scss />
      <BaseTag :label=Technology.WebStorm />
      <BaseTag :label=Technology.Git />
    </div>
    <div class="carrousel_buttons">
      <BaseButton label="Github" class="carrousel_button" ></BaseButton>
      <BaseButton label="Website" class="carrousel_button"></BaseButton>
    </div>
    <div class="carrousel_navigations">
      <BaseButton class="carrousel_nav-button" label="<"></BaseButton>
      <BaseButton class="carrousel_nav-button" label=">"></BaseButton>
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
}
</style>