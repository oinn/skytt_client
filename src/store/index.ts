import { createStore } from 'vuex';
import mutations from '@/store/mutations';
import rootState, { IState } from './state';

// export default new Store({
//   state: rootState,
//   mutations
// });

const store = createStore<IState>({
  state: rootState,
  mutations
});

export default store;
