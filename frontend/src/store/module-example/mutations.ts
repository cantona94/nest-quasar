import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';

const mutation: MutationTree<ExampleStateInterface> = {
  someMutation ( state: ExampleStateInterface, opened) {
    state.prop = opened;
  }
};

export default mutation;
