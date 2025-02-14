<!-- src/components/HomePage.vue -->
<template>
  <div class="bg-gray-100 w-full">
    <div class="border w-full border-gray-300 rounded-lg p-4 gap-4 text-gray-700 bg-opacity-5 flex flex-col bg-blue-900">
      <FilterOptions />
      <CollectionTable />
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, reactive } from "vue";
import { IFilterOptions, ITotaling } from "./type";

import FilterOptions from "./FilterOptions.vue";
import CollectionTable from "./CollectionTable.vue";

import { useCollectionStore } from '@/store/collection';
const collectionStore = useCollectionStore();
setTimeout(() => {
  console.log(collectionStore);
}, 100);
console.log(collectionStore);


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

const searchBy = ref<string>("");

provide('search-by', searchBy);
provide('filter-option-values', filterOptionValues);
provide('total-values', totalValues);
</script>
