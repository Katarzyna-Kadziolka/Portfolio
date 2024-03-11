<script setup lang="ts">
import BaseButton from "~/components/common/BaseButton.vue";
import {Certificate} from "~/types/certificate";

const props = defineProps<{
  certificate: Certificate
}>()

const goTo = () => {
  window.open(props.certificate.Url, '_blank');
}
</script>

<template>
  <div class="single-certificate_container">
    <img :src="certificate.ImagePath" :alt="certificate.Name">
    <hr>
    <span class="single-certificate_name">{{ certificate.Name }}</span>
    <span>{{ certificate.Date }}</span>
    <span>{{ certificate.Description }}</span>
    <BaseButton v-if="certificate.Url" class="single-certificate_button" label="Show certificate"
                :disabled="false" @click="goTo"/>
  </div>
</template>

<style scoped lang="scss">
img {
  height: 20vh;
  max-width: 30vw;
  object-fit: contain;
  padding-bottom: 16px;
  align-self: start;
  @media (max-width: 768px) {
    max-width: 100vw;
    height: 50px;
    padding-bottom: 0;
    padding-top: 32px;
  }
}
hr {
  width: 100%;
}

.single-certificate {
  &_container {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    padding-right: 32px;
    @media (max-width: 768px) {
      padding-right: 0;
    }
  }

  &_name {
    font-size: 2rem;
  }

  &_button {
    width: 50%;
    margin-top: auto;
    align-self: flex-end;
    @media (max-width: 768px) {
      margin-top: 16px;
    }
  }
}
</style>