import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';

const mutation: MutationTree<ExampleStateInterface> = {
  someMutation ( state: ExampleStateInterface, user) {
    state.user = user;
    state.isAuth = true;
  }
};

export default mutation;
