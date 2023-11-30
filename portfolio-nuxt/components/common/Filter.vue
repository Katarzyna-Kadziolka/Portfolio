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

const isMobile = ref(false);
const showMobileMenu = ref(false);

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

onMounted(() => {
  isMobile.value = window.innerWidth < 768;

  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
  });
});
</script>

<template>
  <div class="filter_container" v-if="!isMobile">
    <span><b>Show only</b></span>
    <BaseCheckbox v-model="filter.IsChecked" :label="filter.Technology" v-for="filter in filters" />
    <div class="filter_clear" @click="clear">
      <FontAwesomeIcon icon="fa solid fa-eraser" />
      <span >Clear</span>
    </div>
  </div>

  <div class="filter_container" v-else>
    <div class="filter_mobile-menu" @click="toggleMobileMenu">
      <span><b>Show only</b></span>
      <div v-if="!showMobileMenu">
        <FontAwesomeIcon icon="fa solid fa-angle-down" />
      </div>
      <div v-else>
        <FontAwesomeIcon icon="fa solid fa-angle-up"/>
      </div>
    </div>
    <div v-if="showMobileMenu" class="filter_mobile-dropdown" >
      <div class="filter_mobile-checkboxes">
        <BaseCheckbox v-model="filter.IsChecked" :label="filter.Technology" v-for="filter in filters" />
      </div>
      <div class="filter_clear" @click="clear">
        <FontAwesomeIcon icon="fa solid fa-eraser" />
        <span >Clear</span>
      </div>
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
    @media (max-width: 768px) {
      flex-direction: column;
      row-gap: 8px;
    }
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
    @media (max-width: 768px) {
      justify-content: end;
      align-items: end;
      padding-right: 32px;
    }
  }
  &_mobile-menu {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    max-width: 90%;
    cursor: pointer;
  }
  &_mobile-dropdown {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 8px;
  }
  &_mobile-checkboxes{
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
}
</style>