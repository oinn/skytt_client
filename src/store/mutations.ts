import { IState } from '@/store/state';
import { MutationTree } from 'vuex';

export interface IMutations {
  setFPSCounter(state: IState, value: number): void;
}

const mutations: MutationTree<IState> & IMutations = {
  setFPSCounter(state: IState, value: number) {
    state.fPSCounter = value;
  }
};

export default mutations;
