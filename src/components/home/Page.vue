<!-- src/components/HomePage.vue -->
<template>
  <div class=" w-full flex flex-col h-full">
    <div class="border w-full border-gray-300 rounded-lg p-2 gap-2 text-gray-700 flex flex-col bg-gray-200 flex-grow overflow-hidden"> <!-- Add overflow-hidden -->
      <FilterOptions />
      <CollectionTable class="max-w-full flex-grow overflow-auto" />
    </div>
    <div class="border w-full border-gray-300 rounded-lg p-2 gap-2 text-gray-700 mt-4 flex flex-col bg-gray-200">
      <ProductSummery />
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, reactive } from "vue";
import { IFilterOptions, ITotaling } from "./type";

import FilterOptions from "./FilterOptions.vue";
import CollectionTable from "./CollectionTable.vue";
import ProductSummery from "./ProductSummery.vue";

import { useCollectionStore } from '@/store/collection';
const collectionStore = useCollectionStore();

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
