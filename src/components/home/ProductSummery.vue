<template>
  <div class="grid grid-cols-3">
    <p class="col-span-3 text-start font-bold text-base">
      Product Wise Collection Summary
    </p>
    <div class="border-b-2 col-span-3 -mx-2"></div>
    <div
      v-for="(item, index) in summaryData"
      :key="index"
      class="summary-container"
    >
      <div class="summary-header">{{ item.header }}</div>
      <div class="summary-amount-header">{{ item.amountHeader }}</div>
      <div class="summary-total-label">{{ item.totalLabel }}</div>
      <div class="summary-total-value">{{ item.totalValue }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watchEffect } from "vue";
import { useCollectionStore } from "@/store/collection";

interface SummaryItem {
  header: string;
  amountHeader: string;
  totalLabel: string;
  totalValue: string | number;
}

const summaryData = reactive<SummaryItem[]>([
  {
    header: "Loan Collections",
    amountHeader: "Amount",
    totalLabel: "Total Collection",
    totalValue: 0,
  },
  {
    header: "Savings Collections",
    amountHeader: "Amount",
    totalLabel: "Total Collection",
    totalValue: 0,
  },
  {
    header: "Special Savings Collection",
    amountHeader: "Amount",
    totalLabel: "Total Collection",
    totalValue: 0,
  },
]);

const collectionStore = useCollectionStore();

const totalConfirmedCollection = computed(() => collectionStore.getTotalConfirmedCollection);

watchEffect(() => {
  summaryData[0].totalValue = totalConfirmedCollection.value;
});

</script>

<style scoped lang="scss">
.summary-container {
  @apply grid grid-cols-3 border;
}
.summary-header {
  @apply col-span-2 bg-blue-500 p-2 text-start;
}
.summary-amount-header {
  @apply bg-blue-500 p-2 w-full;
}
.summary-total-label {
  @apply col-span-2 p-2 text-start bg-white;
}
.summary-total-value {
  @apply text-right bg-white py-1 px-2 text-lg font-semibold;
}
</style>