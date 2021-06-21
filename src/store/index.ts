import Vue from 'vue'
import Vuex from 'vuex'
import { userService } from '../services/user.service'

Vue.use(Vuex)

var localUser;
if (sessionStorage.user) localUser = JSON.parse(sessionStorage.user);

export default new Vuex.Store({
  state: {
    currUser: localUser
  },
  getters: {
    currUser(state) {
      return state.currUser
    }
  },
  mutations: {
    setCurrUser(state, { user }) {
      state.currUser = user;
    },
  },
  actions: {
    async login({ commit }, { creds }) {
      try {
        const user = await userService.login(creds);
        commit({ type: 'setCurrUser', user });
        return user;
      } catch (err) {
        console.error('Cannot login', err);
        throw err;
      }
    },
    async logout({ commit }) {
      try {
        await userService.logout();
        commit({ type: 'setUser', user: null });
      } catch (err) {
        console.error('Cannot logout', err);
        throw err;
      }
    },
  },
  modules: {
  }
})
