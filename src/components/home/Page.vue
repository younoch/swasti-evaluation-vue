<!-- src/components/HomePage.vue -->
<template>
  <div class="m-4 bg-slate-100 rounded">
    <FilterOptions />
  </div>
</template>

<script setup lang="ts">
import { provide, ref, reactive } from "vue";
import FilterOptions from "./FilterOptions.vue";
import { IFilterOptions, ITotaling } from "./type";

const filterOptionValues = reactive<IFilterOptions>({
  branch: '',
  fieldOfficeName: '',
  collectionType: '',
  samityDay: '',
  block: ''
});

const totalValues = reactive<ITotaling>({
  members: 0,
  loanReceible: 0,
  collections: 0,
  loan: 0,
  gs: 0,
  vs: 0,
  dps: 0
})
const searchBy = ref<string>('')

provide('search-by', searchBy);
provide('fiter-option-values', filterOptionValues);
provide('total-values', totalValues);
</script>
