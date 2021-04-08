import GRenderer from '@/classes/GRenderer';

export interface IState {
  renderer: undefined | GRenderer;
}

const state: IState = {
  renderer: undefined
};

export default state;
