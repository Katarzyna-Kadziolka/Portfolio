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
    <div>
      <BaseCheckbox v-for="filter in filters" :key="filter" v-model="filter.IsChecked" :label="filter.Technology" />
    </div>
</template>