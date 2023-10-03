<script setup lang="ts">
defineProps<{
  label: string,
  modelValue: boolean
}>()


</script>

<template>
  <div>
    <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)"/>
    <label v-if="label">{{ label }}</label>
  </div>
</template>

<style scoped lang="scss">
input[type=checkbox] {
  accent-color: $p-secondary;
}

</style>