// src/stores/index.ts
import { createPinia } from 'pinia';
import { useCollectionStore } from './collection';

const pinia = createPinia();

// Register the store
pinia.use(({ store }) => {
  if (store.$id === 'collection') {
    useCollectionStore();
  }
});

export default pinia;
