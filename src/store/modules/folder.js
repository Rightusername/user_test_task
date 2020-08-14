/* eslint-disable no-unused-vars */

const folder = {
  namespaced: true,
  mutations: {
    edit(state, item) {
      for (let i = 0; i < state.folders.length; i++) {
        if (state.folders[i].id == item.id) {
          for (let key in item) {
            state.folders[i][key] = item[key];
          }
          break;
        }
      }
    },
    add(state, item) {
      console.log(state);
      // state.folders.push(item);
    },
    delete(state, id) {
      for (let i = 0; i < state.folders.length; i++) {
        if (state.folders[i].id == id) {
          state.folders.splice(i, 1);
          break;
        }
      }
    },
    set(state, items) {
      if (state.offset == 0) {
        state.folders = items;
      } else {
        for (let i = 0; i < items.length; i++) {
          state.folders.push(items[i]);
        }
      }
    },
  },
  actions: {
    edit(context, payload) {
      context.commit('edit', payload);
    },
    add(context, payload) {
      context.commit('add', payload);
    },
    delete(context, payload) {
      context.commit('delete', payload);
    },
  },

  getters: {
    folders: state => {
      return state.folders;
    },
  },
};

export { folder };
