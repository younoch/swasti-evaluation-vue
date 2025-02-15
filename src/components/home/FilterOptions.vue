<template>
  <div
    class="grid grid-cols-12 gap-2"
  >
    <form class="col-span-9 flex gap-2" @submit.prevent="showData">
      <ReusableSelect
        id="branch"
        label="Branch"
        :options="['Branch 1', 'Branch 2']"
        v-model="filterOptionValues.branch"
      />
      <ReusableSelect
        id="fieldOfficeName"
        label="Field Office Name"
        :options="['Field Office 1', 'Field Office 2']"
        v-model="filterOptionValues.fieldOfficeName"
      />
      <ReusableSelect
        id="collectionType"
        label="Collection Type"
        :options="['Type 1', 'Type 2']"
        v-model="filterOptionValues.collectionType"
      />
      <ReusableSelect
        id="samityDay"
        label="Samity Day"
        :options="['Day 1', 'Day 2']"
        v-model="filterOptionValues.samityDay"
      />
      <ReusableSelect
        id="block"
        label="Block"
        :options="['Block 1', 'Block 2']"
        v-model="filterOptionValues.block"
      />
      <div class="flex flex-col justify-between">
        <div></div>
        <button
          class="px-2 py-1 rounded-md bg-blue-500 text-white"
          type="submit"
        >
          Show Data
        </button>
      </div>
    </form>
    <form class="col-span-2 col-start-11">
      <input
        type="text"
        v-model="searchBy"
        class="w-full max-w-md px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        placeholder="Search by software ID, Member ID"
      />
    </form>
    <div class="col-span-12 text-left flex justify-between">
      <div class=" min-w-32"> <span>Total Member: </span> <span class="text-lg min-w-5">0</span> </div>
      <div class=" min-w-32"> <span>Loan Revocable: </span> <span class="text-lg min-w-5">0</span> </div>
      <div class=" min-w-32"> <span>Total Collection: </span> <span class="text-lg min-w-5">0</span> </div>
      <div class=" min-w-32"> <span>Loan: </span> <span class="text-lg min-w-5">0</span> </div>
      <div class=" min-w-32"> <span>GS: </span> <span class="text-lg min-w-5">0</span> </div>
      <div class=" min-w-32"> <span>VS: </span> <span class="text-lg min-w-5">0</span> </div>
      <div class=" min-w-32"> <span>DPS: </span> <span class="text-lg min-w-5">0</span> </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { IFilterOptions, ITotaling } from "./type";
import ReusableSelect from "@/components/reusable/Select.vue";

const defaultFilterOptions: IFilterOptions = {
  branch: "",
  fieldOfficeName: "",
  collectionType: "",
  samityDay: "",
  block: "",
};

const defaultTotalValues : ITotaling = {
  members: 0,
  loanReceible: 0,
  collections: 0,
  loan: 0,
  gs: 0,
  vs: 0,
  dps: 0
}

const filterOptionValues = inject<IFilterOptions>("filter-option-values") ?? defaultFilterOptions;
const totalValues = inject<ITotaling>("total-values") ?? defaultTotalValues;
const searchBy = inject<string>("search-by") ?? "";

const showData = () => {};
</script>
