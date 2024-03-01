<script setup lang="ts">
import {Technology} from "~/types/technology";
import {TechnologyFilter} from "~/types/technologyFilter";
import {projects} from "~/data/projects"
import Filter from "~/components/common/Filter.vue";
import Carrousel from "~/components/features/projects/Carrousel.vue";
import GalleryCard from "~/components/features/projects/GalleryCard.vue";
import {ref} from "vue";
import {Project} from "~/types/project";

const filters: TechnologyFilter[] = reactive([
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
  if (filters.every((a) => !a.IsChecked)) return projects;
  return projects.filter(p => {
    return p.MainTechnologies.some(tech => {
      const correspondingFilter = filters.find(f => f.Technology === tech);
      return correspondingFilter && correspondingFilter.IsChecked;
    });
  });
})

const dialog = ref<HTMLDialogElement>()

const index = ref<number>(0)
const activeProject = computed(() => {
  return filteredProjects.value[index.value];
})

const onBack = () => {
  index.value = index.value - 1;
}

const onNext = () => {
  index.value = index.value + 1;
}

const canGoBack = computed(() => {
  return index.value>0;
})

const canGoNext = computed(() => {
  return index.value<filteredProjects.value.length - 1
})
const showProject = (project: Project) => {
  index.value = filteredProjects.value.findIndex((x) => x === project);
  if (dialog.value) dialog.value.showModal();
}

const closeProject = () => {
  if (dialog.value) dialog.value.close();
}

</script>

<template>
  <Filter :filters="filters"/>
  <div class="projects_container">
    <div class="projects_gallery">
      <GalleryCard
          v-for="project in filteredProjects"
          :key="project.Name"
          :title="project.Name"
          :description="project.ShortDescription"
          :technologies="project.MainTechnologies"
          :image-path="project.MiniImagePath"
          @click="showProject(project)"
          class="projects_gallery-card"/>
    </div>
  </div>
  <dialog ref="dialog">
    <Carrousel class="projects_carousel" :project="activeProject" :can-go-back="canGoBack"
               :can-go-next="canGoNext" @close="closeProject" @back="onBack" @next="onNext"/>
  </dialog>
</template>

<style scoped lang="scss">
dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid $nav-secondary;
  border-radius: 15px;

  &::backdrop {
    background: $nav-primary;
    opacity: 75%;
  }
}

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
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &_gallery-card {
    width: 30vw;
    justify-self: center;
    @media (max-width: 768px) {
      width: 80vw;
    }
  }

  &_title {
    font-size: 1.5rem;
  }

}
</style>