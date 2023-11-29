<script setup lang="ts">
import BaseCheckbox from "~/components/common/BaseCheckbox.vue";
import {TechnologyFilter} from "~/types/technologyFilter";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps<{
  filters: TechnologyFilter[]
}>()

const clear = () => {
  props.filters.forEach((filter) => {
    filter.IsChecked = false;
  })
}
</script>

<template>
  <div class="filter_container">
    <span><b>Show only:</b></span>
    <BaseCheckbox v-model="filter.IsChecked" :label="filter.Technology" v-for="filter in filters" />
    <div class="filter_clear" @click="clear">
      <FontAwesomeIcon icon="fa solid fa-eraser" />
      <span >Clear</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.filter {
  &_container {
    display: flex;
    background-color: #302c34;
    border: 1px solid #34343c;
    padding: 8px 16px;
    column-gap: 16px;
    color: $p-secondary;
    position: fixed;
    width: 100vw;
    z-index: 2;
    font-size: 1.1rem;
  }
  &_clear {
    margin-left: 16px;
    display: flex;
    column-gap: 8px;
    align-items: center;
    cursor: pointer;
    &:hover {
      opacity: 75%;
    }
  }
}
</style>