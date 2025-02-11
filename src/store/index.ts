// src/store/index.ts
import { createStore } from 'vuex'
import collection from './collection'

const store = createStore({
  modules: {
    collection,
  }
})

export default store
