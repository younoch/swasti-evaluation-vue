<template>
  <div class="table-container"
  :style="{
      '--sl-col-width': `${slColWidth}px`,
      '--member-id-col-width': `${memberIdColWidth}px`,
      '--member-name-col-width': `${memberNameColWidth}px`,
      '--dwm-col-width': `${DWMColWidth}px`
    }"
    :key="DWMColWidth"
  >
    <table class="custom-table">
      <thead>
        <tr>
          <th ref="slElement" rowspan="2" class="sticky-column">SL</th>
          <th ref="memberIdElement" rowspan="3" class="sticky-column">Member</th>
          <th ref="memberNameElement" rowspan="2" class="sticky-column">Name</th>
          <th ref="DWMElement" rowspan="2" class="sticky-column">D/W/M</th>
          <th rowspan="2">Confirm</th>
          <th rowspan="2">A/C No.</th>
          <th rowspan="2">Loan</th>
          <th rowspan="2">GS</th>
          <th rowspan="2">VS</th>
          <th rowspan="2">EMDS</th>
          <th colspan="3">Loan Collection Split</th>
          <th colspan="3">Loan Recoverable</th>
          <th colspan="2">Loan Due/ -Adv (PA+SC)</th>
          <th colspan="3">Loan Balance</th>
          <th rowspan="2">Disburse Date</th>
          <th rowspan="2">Disbursed Amount</th>
          <th rowspan="2">GS Balance</th>
          <th rowspan="2">VS Balance</th>
          <th rowspan="2">DPS Balance</th>
          <th rowspan="2">Guardian Name</th>
          <th rowspan="2" class="sticky-column">View Details</th>
        </tr>
        <tr>
          <th>PA</th>
          <th>SC</th>
          <th>Total</th>
          <th>PA</th>
          <th>SC</th>
          <th>Total</th>
          <th>New Due</th>
          <th>Closing Due</th>
          <th>Total</th>
          <th>PA</th>
          <th>SC</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableData" :key="index">
          <td class="sticky-column">{{ row.sl }}</td>
          <td class="sticky-column">{{ row.memberId }}</td>
          <td class="sticky-column">{{ row.memberName }}</td>
          <td class="sticky-column">{{ row.DWM }}</td>
          <td>
            <input
              type="checkbox"
              v-model="row.confirm"
              class="h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
            />
          </td>
          <td>{{ row.acNo }}</td>
          <td><input v-model="row.loanAmount" /></td>
          <td>{{ row.gsAmount }}</td>
          <td>{{ row.vsAmount }}</td>
          <td>{{ row.emdsAmount }}</td>
          <td>{{ row.loanCollectionSplit.pa }}</td>
          <td>{{ row.loanCollectionSplit.sc }}</td>
          <td>{{ row.loanCollectionSplit.total }}</td>
          <td>{{ row.loanRecoverable.pa }}</td>
          <td>{{ row.loanRecoverable.sc }}</td>
          <td>{{ row.loanRecoverable.total }}</td>
          <td>{{ row.loanDueAdvPASc.new }}</td>
          <td>{{ row.loanDueAdvPASc.closeing }}</td>
          <td>{{ row.loanBalance.pa }}</td>
          <td>{{ row.loanBalance.sc }}</td>
          <td>{{ row.loanBalance.total }}</td>
          <td>{{ row.disburseDate }}</td>
          <td>{{ row.disbursedAmount }}</td>
          <td>{{ row.gsBalance }}</td>
          <td>{{ row.vsBalance }}</td>
          <td>{{ row.dpsBalance }}</td>
          <td>{{ row.guardianName }}</td>
          <td class="sticky-column"> <button @click="viewDetails(row)">🔍</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watchEffect } from "vue";

import { useCollectionStore } from "@/store/collection";
const collectionStore = useCollectionStore();

const tableData = computed(() => collectionStore.getCollections);

const slElement = ref<HTMLElement| null>(null);
const memberIdElement = ref<HTMLElement| null>(null);
const memberNameElement = ref<HTMLElement| null>(null);
const DWMElement = ref<HTMLElement| null>(null);

const slColWidth = ref<number>(0);
const memberIdColWidth = ref<number>(0);
const memberNameColWidth = ref<number>(0);
const DWMColWidth = ref<number>(0);

const getElementWidth = (element: HTMLElement | null): number => {
  
  return element ? element.offsetWidth : 0;
};
const viewDetails = (test: any)  => {
   const dsf = test ? test.offsetWidth : 0;
};

watchEffect(async () => {
  await nextTick();
  slColWidth.value = getElementWidth(slElement.value);
  memberIdColWidth.value = getElementWidth(memberIdElement.value);
  memberNameColWidth.value = getElementWidth(memberNameElement.value);
  DWMColWidth.value = getElementWidth(DWMElement.value);
});
</script>

<style lang="scss" scoped>
.table-container {

  .custom-table {
    @apply w-full border-collapse table-auto;

    th, td {
      @apply border border-stone-400 p-1 min-w-12 whitespace-nowrap;
    }

    th {
      @apply bg-blue-400 border-gray-100;
    }

    td {
      @apply bg-blue-50;
      input {
        @apply max-w-20 bg-blue-50;
      }
    }

    .sticky-column {
      @apply sticky z-10 ;
       
      &::after {
        content: '';
        @apply absolute top-0 bottom-0 right-0 w-px bg-stone-400;
      }

      &:nth-child(1) {
        left: 0;
      }
      &:nth-child(2) {
        left: var(--sl-col-width, 0);
      }
      &:nth-child(3) {
        left: calc(var(--sl-col-width, 0) + var(--member-id-col-width, 0));
      }
      &:nth-child(4) {
        left: calc(
          var(--sl-col-width, 0) + 
          var(--member-id-col-width, 0) + 
          var(--member-name-col-width, 0)
        );
      }
      &:last-child {
        right: 0;
      }
    }

    th.sticky-column {
      @apply border-red-100;
    }

    thead .sticky-column {
      z-index: 2;
    }
  }
}
</style>