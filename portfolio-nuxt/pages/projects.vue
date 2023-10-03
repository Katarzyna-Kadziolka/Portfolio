<script setup lang="ts">
import BaseCheckbox from "~/components/common/BaseCheckbox.vue";
import {Technology} from "~/types/technology";
import {TechnologyFilter} from "~/types/technologyFilter";
import {projects} from "~/data/projects"

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
    <div class="projects_filters">
      <span><b>Show only:</b> </span>
      <BaseCheckbox v-for="filter in filters" :key="filter" v-model="filter.IsChecked" :label="filter.Technology" class="projects_checkbox" />
    </div>
    <div class="projects_gallery">
      <GalleryCard
          v-for="project in projects"
          :key="project.Name"
          :title="project.Name"
          :description="project.ShortDescription"
          :technologies="project.Technologies"
          :image-path="project.MiniImagePath"
          class="projects_gallery-card"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.projects {
  &_container {
    padding: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
  &_gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 40px;
  }
  &_gallery-card {
    width: 30vw;
  }
  &_title {
    font-size: 1.5rem;
  }
  &_filters {
    border: $primary solid 2px;
    background: $p-accent;
    padding: 8px;
    border-radius: 15px;
    display: flex;
    column-gap: 16px;
    align-items: center;
    width: 30%;
    flex-wrap: wrap;
  }
}
</style>