<script setup lang="ts">
import Filter from "~/components/common/Filter.vue";
import {TechnologyFilter} from "~/types/technologyFilter";
import {Technology} from "~/types/technology";

const filters: TechnologyFilter[] = reactive([
  {
    Technology: Technology.Csharp,
    IsChecked: false
  },
  {
    Technology: Technology.Vue,
    IsChecked: false
  },
]);
</script>

<template>
  <Filter :filters="filters"/>
  <div class="certificates_container">
    <div>
      Certificates
    </div>
    <div>
      Single certificate
    </div>
  </div>
</template>

<style scoped lang="scss">
.certificates {
  &_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 64px 24px 24px;
    max-width: 100vw;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
}
</style>