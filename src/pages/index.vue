<script setup lang="ts">
const saleson = useSalesonStore()
const { t } = useI18n()
const showModal = ref(false)

saleson.fetchCities()
</script>

<template>
  <div class="flex-column content-center">
    <button
      id="show-modal" class="rounded-3xl border-5 p-3 bg-gray-100 border-gray-500 text-gray-500"
      @click="showModal = true"
    >
      {{ t('button.modal') }}
    </button>
    <div v-if="!saleson.loading" class="flex-column content-center">
      <SalesonForm />
      <SalesonTable />
    </div>
  </div>

  <Teleport to="body">
    <modal :show="showModal" @close="showModal = false" />
  </Teleport>
</template>

<route lang="yaml">
meta:
  layout: saleson
</route>
