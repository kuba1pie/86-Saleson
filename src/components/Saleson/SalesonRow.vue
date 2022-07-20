<script setup lang="ts">
const item = defineProps({
  person: { type: Object, default: () => ({}) },
})
</script>

<template>
  <tr class="border-r-5 border-l-5 border-gray-500">
    <td class=" px-5 py-2">
      {{ item.person.name }}
    </td>
    <td class="px-5 py-2" :class="{ results: item.person.result }">
      {{ item.person.surname }}
    </td>
  </tr>
</template>
