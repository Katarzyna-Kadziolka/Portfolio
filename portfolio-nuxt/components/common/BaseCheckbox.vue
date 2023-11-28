<script setup lang="ts">
defineProps<{
  label: string,
  modelValue: boolean
}>()


</script>

<template>
  <div>
    <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)"/>
    <label v-if="label" class="base-checkbox_label">{{ label }}</label>
  </div>
</template>

<style scoped lang="scss">
input[type=checkbox] {
  position: relative;
  cursor: pointer;
}

input[type=checkbox]:before {
  content: "";
  position: absolute;
  width: 13px;
  height: 13px;
  top: 0;
  left: 0;
  border: 1px solid $nav-primary;
  border-radius: 3px;
  padding: 1px;
  background-color: $nav-secondary;
}

input[type=checkbox]:checked:before {
  background-color: $p-secondary;
}

input[type=checkbox]:checked:after {
  content: "";
  display: block;
  width: 3px;
  height: 7px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  top: 2px;
  left: 6px;
}

.base-checkbox {
  &_label {
    margin-left: 8px;
  }
}
</style>