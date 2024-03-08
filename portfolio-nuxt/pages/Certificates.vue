<script setup lang="ts">
import {certificates} from "~/data/certificates"
import ListItem from "~/components/features/certificates/ListItem.vue";

const activeCertificateName = ref(certificates[0].Name)
const onChangeActiveCertificate = (activeName: string) => {
  activeCertificateName.value = activeName
}

</script>

<template>
  <div class="certificates_container">
    <div>
      <ListItem v-for="certificate in certificates" :key="certificate" :name="certificate.Name" :organization="certificate.Organization" :active="certificate.Name === activeCertificateName" @changeActiveCertificate="onChangeActiveCertificate"/>
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
    padding: 32px 24px 24px;
    max-width: 100vw;
    column-gap: 32px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
}
</style>