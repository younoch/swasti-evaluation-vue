<template>
  <div
    class="table-container"
    :style="{
      '--sl-position': `${columns[0].position}px`,
      '--member-id-position': `${columns[1].position}px`,
      '--member-name-position': `${columns[2].position}px`,
      '--dwm-position': `${columns[3].position}px`,
      '--dwm-confirm': `${columns[4].position}px`,
      '--ac-no-position': `${columns[5].position}px`,
      '--loan-position': `${columns[6].position}px`,
      '--gs-position': `${columns[7].position}px`,
      '--vs-position': `${columns[8].position}px`,
      '--emds-position': `${columns[9].position}px`,
    }"
  >
    <pre>{{ columns[8].position }}</pre>
    <table class="custom-table">
      <thead>
        <tr>
          <th
            :ref="(el) => (columns[0].element = el as HTMLElement)"
            rowspan="2"
            class="sticky-column"
          >
            SL
          </th>
          <th
            :ref="(el) => (columns[1].element = el as HTMLElement)"
            rowspan="3"
            class="sticky-column"
          >
            Member
          </th>
          <th
            :ref="(el) => (columns[2].element = el as HTMLElement)"
            rowspan="2"
            class="sticky-column"
          >
            Name
          </th>
          <th
            :ref="(el) => (columns[3].element = el as HTMLElement)"
            rowspan="2"
            class="sticky-column"
          >
            D/W/M
          </th>
          <th
            :ref="(el) => (columns[4].element = el as HTMLElement)"
            class="sticky-column"
          >
            Confirm
          </th>
          <th
            :ref="(el) => (columns[5].element = el as HTMLElement)"
            rowspan="2"
            class="sticky-column"
          >
            A/C No.
          </th>
          <th
            :ref="(el) => (columns[6].element = el as HTMLElement)"
            rowspan="2"
            class="sticky-column"
          >
            Loan
          </th>
          <th
            :ref="(el) => (columns[7].element = el as HTMLElement)"
            rowspan="2"
            class="sticky-column"
          >
            GS
          </th>
          <th
            :ref="(el) => (columns[8].element = el as HTMLElement)"
            rowspan="2"
            class="sticky-column"
          >
            VS
          </th>
          <th
            :ref="(el) => (columns[9].element = el as HTMLElement)"
            rowspan="2"
            class="sticky-column"
          >
            EMDS
          </th>
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
          <th>
            <input
              type="checkbox"
              v-model="confirmAll"
              class="h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
            />
          </th>
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
          <td class="sticky-column">
            <input
              type="checkbox"
              v-model="row.confirm"
              class="h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
            />
          </td>
          <td class="sticky-column">{{ row.acNo }}</td>
          <td class="sticky-column"><input v-model="row.loanAmount" /></td>
          <td class="sticky-column">{{ row.gsAmount }}</td>
          <td class="sticky-column">{{ row.vsAmount }}</td>
          <td class="sticky-column">{{ row.emdsAmount }}</td>
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
          <td class="sticky-column">
            <button @click="viewDetails(row)">🔍</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, reactive, ref, watchEffect } from "vue";

import { useCollectionStore } from "@/store/collection";

interface IColumn {
  name: string;
  element: HTMLElement | null;
  width: number;
  position: number;
}

const collectionStore = useCollectionStore();

const confirmAll = ref<boolean>(false)

const tableData = computed(() => collectionStore.getCollections);

const columns = reactive<IColumn[]>([
  { name: "sl", element: null, width: 0, position: 0 },
  { name: "memberId", element: null, width: 0, position: 0 },
  { name: "memberName", element: null, width: 0, position: 0 },
  { name: "DWM", element: null, width: 0, position: 0 },
  { name: "confirm", element: null, width: 0, position: 0 },
  { name: "ACNo", element: null, width: 0, position: 0 },
  { name: "loan", element: null, width: 0, position: 0 },
  { name: "GS", element: null, width: 0, position: 0 },
  { name: "VS", element: null, width: 0, position: 0 },
  { name: "EMDS", element: null, width: 0, position: 0 },
]);
const getElementWidth = (element: HTMLElement | null): number => {
  return element ? element.offsetWidth : 0;
};

const viewDetails = (test: any) => {
  const dsf = test ? test.offsetWidth : 0;
};

watchEffect(async () => {
  await nextTick();

  columns.forEach((column) => {
    console.log(getElementWidth(column.element));
    column.width = getElementWidth(column.element);
  });

  let previousPosition = 0;
  columns.forEach((column) => {
    column.position = previousPosition;
    previousPosition += column.width;
  });
});
</script>

<style lang="scss" scoped>
.table-container {
  .custom-table {
    @apply w-full border-collapse table-auto;

    th,
    td {
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
      @apply sticky z-20;

      &::after {
        content: "";
        @apply absolute top-0 bottom-0 right-0 w-px bg-stone-400;
      }

      &:nth-child(1) {
        left: var(--sl-position, 0);
      }
      &:nth-child(2) {
        left: var(--member-id-position, 0);
      }
      &:nth-child(3) {
        left: var(--member-name-position, 0);
      }
      &:nth-child(4) {
        left: var(--dwm-position, 0);
      }
      &:nth-child(5) {
        left: var(--dwm-confirm, 0);
      }
      &:nth-child(6) {
        left: var(--ac-no-position, 0);
      }
      &:nth-child(7) {
        left: var(--loan-position, 0);
      }
      &:nth-child(8) {
        left: var(--gs-position, 0);
      }
      &:nth-child(9) {
        left: var(--vs-position, 0);
      }
      &:nth-child(10) {
        left: var(--emds-position, 0);
      }
      &:last-child {
        right: 0;
      }
    }

    thead .sticky-column {
      z-index: 2;
    }
  }
}
</style>
