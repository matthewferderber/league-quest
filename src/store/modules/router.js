import * as types from '@/store/mutation-types';
import router from '@/router';

const state = {
};

const getters = {
};
const actions = {
  route ({ commit, state }, location) {
    router.push(`/${location}`);
  }
};

const mutations = {
  [types.LOGIN_SUCCESS] (state) {
    router.push('/quests');
  },
  [types.LOGOUT] (state) {
    router.go('/');
  },
  [types.REDIRECT_LOGIN] (state) {
    router.push('/login');
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
