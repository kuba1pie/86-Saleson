<script setup lang="ts">
const saleson = useSalesonStore()
const { t } = useI18n()
</script>

<template>
  <div class="p-5">
    <label for="lname"> {{ t('form.label') }} </label>
    <input id="lname" v-model="saleson.filterText" type="text" class="p-2 text-black border-gray-500 border-5">
  </div>
</template>
