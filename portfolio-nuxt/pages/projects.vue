<script setup lang="ts">
import {Technology} from "~/types/technology";
import {TechnologyFilter} from "~/types/technologyFilter";
import {projects} from "~/data/projects"
import Filter from "~/components/common/Filter.vue";

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
  {
    Technology: Technology.Python,
    IsChecked: false
  },
]);

const filteredProjects = computed(() => {
  if(filters.every((a) => !a.IsChecked)) return projects;
  return projects.filter(p => {
    return p.MainTechnologies.some(tech => {
      const correspondingFilter = filters.find(f => f.Technology === tech);
      return correspondingFilter && correspondingFilter.IsChecked;
    });
  });
})

</script>

<template>
  <Filter :filters="filters" />
  <div class="projects_container">
    <div class="projects_gallery">
      <GalleryCard
          v-for="project in filteredProjects"
          :key="project.Name"
          :title="project.Name"
          :description="project.ShortDescription"
          :technologies="project.MainTechnologies"
          :image-path="project.MiniImagePath"
          class="projects_gallery-card"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.projects {
  &_container {
    padding: 64px 24px 24px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    max-width: 100vw;
  }
  &_gallery {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 40px;
    column-gap: 16px;
    max-width: 100vw;
  }
  &_gallery-card {
    width: 30vw;
    justify-self: center;
  }
  &_title {
    font-size: 1.5rem;
  }
}
</style>