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
  },
  actions: {
    // Add your actions here if needed
  },
});
