<template>
  <div class="table-container">
    <table class="custom-table">
      <thead>
        <tr>
          <th rowspan="2">SL</th>
          <th rowspan="3">Member</th>
          <th rowspan="2">Name</th>
          <th rowspan="2">D/W/M</th>
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
          <th rowspan="2">View Details</th>
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
          <td>{{ row.sl }}</td>
          <td>{{ row.memberId }}</td>
          <td>{{ row.memberName }}</td>
          <td>{{ row.DWM }}</td>
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
          <td>
            <button @click="viewDetails(row)">🔍</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useCollectionStore } from "@/store/collection";
const collectionStore = useCollectionStore();

const tableData = computed(() => collectionStore.getCollections);

const viewDetails = (row: any) => {
  alert(`Viewing details for ${row.memberName}`);
};
</script>

<style lang="scss" scoped>
.table-container {
  @apply max-w-full overflow-x-auto; // Constrain width and enable scrolling

  .custom-table {
    @apply w-full border-collapse table-auto;

    th,
    td {
      @apply border border-stone-400 p-2 min-w-12 whitespace-nowrap; // Prevent text wrapping
    }

    th {
      @apply bg-blue-500 bg-opacity-50 border-gray-100;
    }

    td {
      input {
        @apply max-w-20;
      }
    }
  }
}
</style>
