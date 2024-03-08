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
  Certificates
</template>