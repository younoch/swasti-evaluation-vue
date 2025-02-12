<template>
    <div class="flex flex-col flex-grow">
      <label :for="id">{{ label }}</label>
      <select
        :id="id"
        v-model="selectedValue"
        class="w-full max-w-md px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mt-1"
        @change="updateValue"
      >
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits, ref, watch } from 'vue';
  
  const props = defineProps({
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array as () => string[],
      required: true
    },
    modelValue: {
      type: String,
      required: true
    }
  });
  
  const emits = defineEmits(['update:modelValue']);
  
  const selectedValue = ref(props.modelValue);
  
  watch(selectedValue, (newValue) => {
    emits('update:modelValue', newValue);
  });
  
  const updateValue = () => {
    emits('update:modelValue', selectedValue.value);
  };
  </script>