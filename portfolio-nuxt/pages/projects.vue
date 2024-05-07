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
    Technology: Technology.Angular,
    IsChecked: false
  },
  {
    Technology: Technology.Blazor,
    IsChecked: false
  },
  {
    Technology: Technology.Csharp,
    IsChecked: false
  },
  {
    Technology: Technology.Flutter,
    IsChecked: false
  },
  {
    Technology: Technology.Nuxt,
    IsChecked: false
  },
  {
    Technology: Technology.Python,
    IsChecked: false
  },
  {
    Technology: Technology.Vue,
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

const showCarrousel = ref<boolean>(false);

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
  return index.value > 0;
})

const canGoNext = computed(() => {
  return index.value < filteredProjects.value.length - 1
})

watch(showCarrousel, (newValue) => {
  if (newValue) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = 'auto'
})
const showProject = (project: Project) => {
  index.value = filteredProjects.value.findIndex((x) => x === project);
  showCarrousel.value = true;
}

const closeProject = () => {
  showCarrousel.value = false;
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
  <Carrousel v-show="showCarrousel" :class="{'projects_carrousel-visible': showCarrousel}" :project="activeProject"
             :can-go-back="canGoBack" :can-go-next="canGoNext" @close="closeProject" @back="onBack" @next="onNext"/>
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

  &_carrousel-visible {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 101;
    width: 100%;
    height: 100%;
  }
}
</style>