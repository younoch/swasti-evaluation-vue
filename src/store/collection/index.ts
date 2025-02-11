// src/store/collection/index.ts
import { Module } from 'vuex'

interface User {
  name: string
}

interface CollectState {
  collection: User | null
}

const state: CollectState = {
  collection: null,
}

const getters = {
}

const actions = {
}

const mutations = {
}

const collectionModule: Module<CollectState, any> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default collectionModule
