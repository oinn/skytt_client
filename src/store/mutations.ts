import { IState } from '@/store/state';
import { MutationTree } from 'vuex';
import GRenderer from '@/classes/GRenderer';

export interface IMutations {
  setRenderer(state: IState, renderer: GRenderer | undefined): void;
}

const mutations: MutationTree<IState> & IMutations = {
  setRenderer(state: IState, renderer: GRenderer | undefined) {
    state.renderer = renderer;
  }
};

export default mutations;
