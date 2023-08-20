import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';

const mutation: MutationTree<ExampleStateInterface> = {
  login(state: ExampleStateInterface, user) {
    state.user = user;
    state.isAuth = true;
  },
  logout(state: ExampleStateInterface) {
    state.user = null;
    state.isAuth = false;
  },
};

export default mutation;
