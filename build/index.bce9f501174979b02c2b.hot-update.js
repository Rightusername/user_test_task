webpackHotUpdate("index",{

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"./node_modules/babel-runtime/core-js/json/stringify.js\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ \"./node_modules/babel-runtime/core-js/promise.js\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nvar _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ \"./node_modules/babel-runtime/core-js/object/assign.js\");\n\nvar _assign2 = _interopRequireDefault(_assign);\n\nvar _vue = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _vuex2 = _interopRequireDefault(_vuex);\n\nvar _api = __webpack_require__(/*! src/utils/api.js */ \"./src/utils/api.js\");\n\nvar _api2 = _interopRequireDefault(_api);\n\nvar _common = __webpack_require__(/*! src/utils/common */ \"./src/utils/common.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_vue2.default.use(_vuex2.default);\n\nexports.default = new _vuex2.default.Store({\n  plugins: [],\n  state: {\n    users: []\n  },\n  getters: {\n    users: function users(state) {\n      return state.users;\n    }\n  },\n  mutations: {\n    SET_STATE: function SET_STATE(state, payload) {\n      (0, _assign2.default)(state, payload);\n    },\n    SET_USERS: function SET_USERS(state, payload) {\n      state.users = payload;\n    },\n\n    USER_ADD: function USER_ADD(state, payload) {\n      state.users.push(payload);\n    },\n    USER_REMOVE: function USER_REMOVE(state, id) {\n      var index = state.users.findIndex(function (item) {\n        return item.id == id;\n      });\n      if (index >= 0) {\n        state.users.splice(index, 1);\n      }\n    },\n    NOTE_EDIT: function NOTE_EDIT(state, payload) {\n      var index = state.notes.findIndex(function (item) {\n        return item.id == payload.id;\n      });\n      if (index >= 0) {\n        state.notes.splice(index, 1, payload);\n      }\n    }\n  },\n  actions: {\n    FETCH_USERS: function FETCH_USERS(context) {\n      return new _promise2.default(function (resolve, reject) {\n        _api2.default.get('users').then(function (response) {\n          console.log(response);\n          context.commit('SET_USERS', response.data);\n          resolve();\n        }).catch(function (error) {\n          reject(error);\n        });\n      });\n    },\n    USER_ADD: function USER_ADD(context, payload) {\n      payload.id = (0, _common.generateID)();\n      return new _promise2.default(function (resolve, reject) {\n        _api2.default.post('users', payload).then(function (response) {\n          context.commit('USER_ADD', payload);\n          resolve();\n        }).catch(function (error) {\n          reject(error);\n        });\n      });\n    },\n    USER_EDIT: function USER_EDIT(context, payload) {\n      context.commit('NOTE_EDIT', payload);\n      context.dispatch('SAVE_STATE');\n    },\n    USER_REMOVE: function USER_REMOVE(context, payload) {\n      // context.commit('NOTE_REMOVE', payload);\n\n      return new _promise2.default(function (resolve, reject) {\n        _api2.default.delete('users/' + payload.id).then(function (response) {\n          console.log(response);\n          context.commit('USER_REMOVE', payload);\n          resolve();\n        }).catch(function (error) {\n          reject(error);\n          console.log(error);\n        });\n      });\n    },\n\n    SAVE_STATE: function SAVE_STATE(context, payload) {\n      localStorage.setItem('state', (0, _stringify2.default)(context.state));\n    },\n\n    LOAD_STATE: function LOAD_STATE(context, payload) {\n      context.commit('SET_STATE', JSON.parse(localStorage.getItem('state')));\n    }\n  },\n  modules: {}\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanM/NDM2MCJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJWdWV4IiwiU3RvcmUiLCJwbHVnaW5zIiwic3RhdGUiLCJ1c2VycyIsImdldHRlcnMiLCJtdXRhdGlvbnMiLCJTRVRfU1RBVEUiLCJwYXlsb2FkIiwiU0VUX1VTRVJTIiwiVVNFUl9BREQiLCJwdXNoIiwiVVNFUl9SRU1PVkUiLCJpZCIsImluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsInNwbGljZSIsIk5PVEVfRURJVCIsIm5vdGVzIiwiYWN0aW9ucyIsIkZFVENIX1VTRVJTIiwicmVzb2x2ZSIsInJlamVjdCIsImFwaSIsImdldCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJjb250ZXh0IiwiY29tbWl0IiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJwb3N0IiwiVVNFUl9FRElUIiwiZGlzcGF0Y2giLCJkZWxldGUiLCJTQVZFX1NUQVRFIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkxPQURfU1RBVEUiLCJKU09OIiwicGFyc2UiLCJnZXRJdGVtIiwibW9kdWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBSUE7Ozs7QUFGQUEsY0FBSUMsR0FBSixDQUFRQyxjQUFSOztrQkFJZSxJQUFJQSxlQUFLQyxLQUFULENBQWU7QUFDNUJDLFdBQVMsRUFEbUI7QUFFNUJDLFNBQU87QUFDTEMsV0FBTztBQURGLEdBRnFCO0FBSzVCQyxXQUFTO0FBQ1BELFdBQU8sc0JBQVM7QUFDZCxhQUFPRCxNQUFNQyxLQUFiO0FBQ0Q7QUFITSxHQUxtQjtBQVU1QkUsYUFBVztBQUNUQyxlQUFXLG1CQUFDSixLQUFELEVBQVFLLE9BQVIsRUFBb0I7QUFDN0IsNEJBQWNMLEtBQWQsRUFBcUJLLE9BQXJCO0FBQ0QsS0FIUTtBQUlUQyxhQUpTLHFCQUlDTixLQUpELEVBSVFLLE9BSlIsRUFJ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ZVgsUUFBUTNCLEtBQXZCLENBQTlCO0FBQ0QsS0FyRE07O0FBdURQdUMsZ0JBQVksb0JBQUNaLE9BQUQsRUFBVXRCLE9BQVYsRUFBc0I7QUFDaENzQixjQUFRQyxNQUFSLENBQWUsV0FBZixFQUE0QlksS0FBS0MsS0FBTCxDQUFXSixhQUFhSyxPQUFiLENBQXFCLE9BQXJCLENBQVgsQ0FBNUI7QUFDRDtBQXpETSxHQWpDbUI7QUE0RjVCQyxXQUFTO0FBNUZtQixDQUFmLEMiLCJmaWxlIjoiLi9zcmMvc3RvcmUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnO1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tICdzcmMvdXRpbHMvYXBpLmpzJztcclxuXHJcblZ1ZS51c2UoVnVleCk7XHJcblxyXG5pbXBvcnQgeyBnZW5lcmF0ZUlEIH0gZnJvbSAnc3JjL3V0aWxzL2NvbW1vbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XHJcbiAgcGx1Z2luczogW10sXHJcbiAgc3RhdGU6IHtcclxuICAgIHVzZXJzOiBbXSxcclxuICB9LFxyXG4gIGdldHRlcnM6IHtcclxuICAgIHVzZXJzOiBzdGF0ZSA9PiB7XHJcbiAgICAgIHJldHVybiBzdGF0ZS51c2VycztcclxuICAgIH0sXHJcbiAgfSxcclxuICBtdXRhdGlvbnM6IHtcclxuICAgIFNFVF9TVEFURTogKHN0YXRlLCBwYXlsb2FkKSA9PiB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24oc3RhdGUsIHBheWxvYWQpO1xyXG4gICAgfSxcclxuICAgIFNFVF9VU0VSUyhzdGF0ZSwgcGF5bG9hZCkge1xyXG4gICAgICBzdGF0ZS51c2VycyA9IHBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgVVNFUl9BREQ6IChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICBzdGF0ZS51c2Vycy5wdXNoKHBheWxvYWQpO1xyXG4gICAgfSxcclxuICAgIFVTRVJfUkVNT1ZFOiAoc3RhdGUsIGlkKSA9PiB7XHJcbiAgICAgIGxldCBpbmRleCA9IHN0YXRlLnVzZXJzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT0gaWQpO1xyXG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgIHN0YXRlLnVzZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBOT1RFX0VESVQ6IChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICBsZXQgaW5kZXggPSBzdGF0ZS5ub3Rlcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09IHBheWxvYWQuaWQpO1xyXG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgIHN0YXRlLm5vdGVzLnNwbGljZShpbmRleCwgMSwgcGF5bG9hZCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBhY3Rpb25zOiB7XHJcbiAgICBGRVRDSF9VU0VSUzogY29udGV4dCA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgYXBpXHJcbiAgICAgICAgICAuZ2V0KCd1c2VycycpXHJcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgY29udGV4dC5jb21taXQoJ1NFVF9VU0VSUycsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBVU0VSX0FERDogKGNvbnRleHQsIHBheWxvYWQpID0+IHtcclxuICAgICAgcGF5bG9hZC5pZCA9IGdlbmVyYXRlSUQoKTtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBhcGlcclxuICAgICAgICAgIC5wb3N0KCd1c2VycycsIHBheWxvYWQpXHJcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KCdVU0VSX0FERCcsIHBheWxvYWQpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBVU0VSX0VESVQ6IChjb250ZXh0LCBwYXlsb2FkKSA9PiB7XHJcbiAgICAgIGNvbnRleHQuY29tbWl0KCdOT1RFX0VESVQnLCBwYXlsb2FkKTtcclxuICAgICAgY29udGV4dC5kaXNwYXRjaCgnU0FWRV9TVEFURScpO1xyXG4gICAgfSxcclxuICAgIFVTRVJfUkVNT1ZFOiAoY29udGV4dCwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICAvLyBjb250ZXh0LmNvbW1pdCgnTk9URV9SRU1PVkUnLCBwYXlsb2FkKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgYXBpXHJcbiAgICAgICAgICAuZGVsZXRlKGB1c2Vycy8ke3BheWxvYWQuaWR9YClcclxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmNvbW1pdCgnVVNFUl9SRU1PVkUnLCBwYXlsb2FkKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgU0FWRV9TVEFURTogKGNvbnRleHQsIHBheWxvYWQpID0+IHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0YXRlJywgSlNPTi5zdHJpbmdpZnkoY29udGV4dC5zdGF0ZSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBMT0FEX1NUQVRFOiAoY29udGV4dCwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICBjb250ZXh0LmNvbW1pdCgnU0VUX1NUQVRFJywgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhdGUnKSkpO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vZHVsZXM6IHt9LFxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/index.js\n");

/***/ })

})