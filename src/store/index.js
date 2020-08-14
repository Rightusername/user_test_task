import Vue from 'vue';
import Vuex from 'vuex';

import api from 'src/utils/api.js';

Vue.use(Vuex);

import { generateID } from 'src/utils/common';

export default new Vuex.Store({
  plugins: [],
  state: {
    users: [],
  },
  getters: {
    users: state => {
      return state.users;
    },
  },
  mutations: {
    SET_STATE: (state, payload) => {
      Object.assign(state, payload);
    },
    SET_USERS(state, payload) {
      state.users = payload;
    },
    USER_ADD: (state, payload) => {
      state.users.push(payload);
    },
    USER_REMOVE: (state, id) => {
      console.log(id);
      let index = state.users.findIndex(item => item.id == id);
      if (index >= 0) {
        state.users.splice(index, 1);
      }
    },
    USER_EDIT: (state, payload) => {
      console.log(payload);
      let index = state.users.findIndex(item => item.id == payload.id);
      if (index >= 0) {
        state.users.splice(index, 1, payload);
      }
    },
  },
  actions: {
    FETCH_USERS: context => {
      return new Promise((resolve, reject) => {
        api
          .get('users')
          .then(response => {
            console.log(response);
            context.commit('SET_USERS', response.data);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    USER_ADD: (context, payload) => {
      payload.id = generateID();
      return new Promise((resolve, reject) => {
        api
          .post('users', payload)
          .then(response => {
            context.commit('USER_ADD', payload);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    USER_EDIT: (context, payload) => {
      return new Promise((resolve, reject) => {
        api
          .put(`users/${payload.id}`, payload)
          .then(response => {
            context.commit('USER_EDIT', payload);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    USER_REMOVE: (context, payload) => {
      return new Promise((resolve, reject) => {
        api
          .delete(`users/${payload.id}`)
          .then(response => {
            context.commit('USER_REMOVE', payload.id);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    SAVE_STATE: (context, payload) => {
      localStorage.setItem('state', JSON.stringify(context.state));
    },

    LOAD_STATE: (context, payload) => {
      context.commit('SET_STATE', JSON.parse(localStorage.getItem('state')));
    },
  },
  modules: {},
});
