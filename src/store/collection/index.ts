// src/stores/collection.ts
import { defineStore } from 'pinia';
import collectionData from '../../../data/collection.json';
import { ICollection } from './type';
interface CollectState {
  collection: ICollection[];
}

export const useCollectionStore = defineStore('collection', {
  state: (): CollectState => ({
    collection: collectionData, 
  }),
  getters: {
    getCollections: (state) => state.collection,
    getTotalConfirmedCollection: (state) => {
      return state.collection
        .filter(item => item.confirm)
        .reduce((total, item) => total + Number(item.loanAmount), 0);
    },
  },
  actions: {
    toggleConfirmAll(confirmAll: boolean) {
      this.collection.forEach((item) => {
        item.confirm = confirmAll;
      });
    },
  },
});
