// import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';
import { IState } from '@/store/state';

declare module '@vue/runtime-core' {
  // eslint-disable-next-line no-shadow
  interface ComponentCustomProperties {
    $store: Store<IState>
  }
}
