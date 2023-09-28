<script setup lang="ts">
import BaseCheckbox from "~/components/common/BaseCheckbox.vue";
import {Technology} from "~/types/technology";
import {TechnologyFilter} from "~/types/technologyFilter";

const filters : TechnologyFilter[] = reactive([
  {
    Technology: Technology.Csharp,
    IsChecked: false
  },
  {
    Technology: Technology.Vue,
    IsChecked: false
  },
  {
    Technology: Technology.Angular,
    IsChecked: false
  },
  {
    Technology: Technology.Flutter,
    IsChecked: false
  },
]);
</script>

<template>
  <div class="projects_container">
    <div>
      <BaseCheckbox v-for="filter in filters" :key="filter" v-model="filter.IsChecked" :label="filter.Technology" />
    </div>
    <div class="projects_gallery">
      <GalleryCard class="projects_gallery-card"/>
      <GalleryCard class="projects_gallery-card"/>
      <GalleryCard class="projects_gallery-card"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.projects {
  &_container {
    padding: 24px;
  }
  &_gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &_gallery-card {
    width: 30vw;
  }
}
</style>