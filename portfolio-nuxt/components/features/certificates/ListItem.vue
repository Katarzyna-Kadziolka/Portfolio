<script setup lang="ts">

defineProps<{
  name: string,
  organization: string,
  active: boolean
}>()

</script>

<template>
  <div class="list-item_container" :class="{'list-item_active': active}" @click="$emit('changeActiveCertificate', name)">
    <span class="list-item_name">{{name}}</span>
    <span class="list-item_organization">{{organization}}</span>
  </div>
</template>

<style scoped lang="scss">
.list-item {
  &_container {
    border-bottom: 2px solid $primary;
    display: flex;
    flex-direction: column;
    padding: 8px;
    cursor: pointer;
    &:hover {
      background: $nav-primary;
    }
  }
  &_name {
    font-size: 1.5rem;
  }
  &_organization {
  }
  &_active {
    background: $nav-primary;
  }
}
</style>