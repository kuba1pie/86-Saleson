<script setup lang="ts">
const saleson = useSalesonStore()
const { t } = useI18n()
</script>

<template>
  <table class="mx-a my-20">
    <tr class="border-5 border-gray-500">
      <th>
        {{ t('table.name') }}
      </th>
      <th>
        {{ t('table.lastname') }}
      </th>
    </tr>
    <SalesonRow v-for="item in saleson.filteredPerson" :key="item.name" :person="item" />
    <tr class="text-gray-500 border-5 border-gray-500">
      <td>
        {{ t('table.total') }}
      </td>
      <td>
        {{ saleson.list.length }}
      </td>
    </tr>
  </table>
</template>

<style>
td
 { width: 10em;}
</style>
