webpackHotUpdate("index",{

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"./node_modules/babel-runtime/core-js/json/stringify.js\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ \"./node_modules/babel-runtime/core-js/promise.js\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nvar _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ \"./node_modules/babel-runtime/core-js/object/assign.js\");\n\nvar _assign2 = _interopRequireDefault(_assign);\n\nvar _vue = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _vuex2 = _interopRequireDefault(_vuex);\n\nvar _api = __webpack_require__(/*! src/utils/api.js */ \"./src/utils/api.js\");\n\nvar _api2 = _interopRequireDefault(_api);\n\nvar _common = __webpack_require__(/*! src/utils/common */ \"./src/utils/common.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_vue2.default.use(_vuex2.default);\n\nexports.default = new _vuex2.default.Store({\n  plugins: [],\n  state: {\n    users: []\n  },\n  getters: {\n    users: function users(state) {\n      return state.users;\n    }\n  },\n  mutations: {\n    SET_STATE: function SET_STATE(state, payload) {\n      (0, _assign2.default)(state, payload);\n    },\n    SET_USERS: function SET_USERS(state, payload) {\n      state.users = payload;\n    },\n\n    USER_ADD: function USER_ADD(state, payload) {\n      state.users.push(payload);\n    },\n    USER_REMOVE: function USER_REMOVE(state, id) {\n      console.log(id);\n      var index = state.users.findIndex(function (item) {\n        return item.id == id;\n      });\n      if (index >= 0) {\n        state.users.splice(index, 1);\n      }\n    },\n    NOTE_EDIT: function NOTE_EDIT(state, payload) {\n      var index = state.notes.findIndex(function (item) {\n        return item.id == payload.id;\n      });\n      if (index >= 0) {\n        state.notes.splice(index, 1, payload);\n      }\n    }\n  },\n  actions: {\n    FETCH_USERS: function FETCH_USERS(context) {\n      return new _promise2.default(function (resolve, reject) {\n        _api2.default.get('users').then(function (response) {\n          console.log(response);\n          context.commit('SET_USERS', response.data);\n          resolve();\n        }).catch(function (error) {\n          reject(error);\n        });\n      });\n    },\n    USER_ADD: function USER_ADD(context, payload) {\n      payload.id = (0, _common.generateID)();\n      return new _promise2.default(function (resolve, reject) {\n        _api2.default.post('users', payload).then(function (response) {\n          context.commit('USER_ADD', payload);\n          resolve();\n        }).catch(function (error) {\n          reject(error);\n        });\n      });\n    },\n    USER_EDIT: function USER_EDIT(context, payload) {\n      return new _promise2.default(function (resolve, reject) {\n        _api2.default.put('users/' + payload.id, payload).then(function (response) {\n          context.commit('USER_REMOVE', payload.id);\n          resolve();\n        }).catch(function (error) {\n          reject(error);\n        });\n      });\n    },\n    USER_REMOVE: function USER_REMOVE(context, payload) {\n      return new _promise2.default(function (resolve, reject) {\n        _api2.default.delete('users/' + payload.id).then(function (response) {\n          context.commit('USER_REMOVE', payload.id);\n          resolve();\n        }).catch(function (error) {\n          reject(error);\n        });\n      });\n    },\n\n    SAVE_STATE: function SAVE_STATE(context, payload) {\n      localStorage.setItem('state', (0, _stringify2.default)(context.state));\n    },\n\n    LOAD_STATE: function LOAD_STATE(context, payload) {\n      context.commit('SET_STATE', JSON.parse(localStorage.getItem('state')));\n    }\n  },\n  modules: {}\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanM/NDM2MCJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJWdWV4IiwiU3RvcmUiLCJwbHVnaW5zIiwic3RhdGUiLCJ1c2VycyIsImdldHRlcnMiLCJtdXRhdGlvbnMiLCJTRVRfU1RBVEUiLCJwYXlsb2FkIiwiU0VUX1VTRVJTIiwiVVNFUl9BREQiLCJwdXNoIiwiVVNFUl9SRU1PVkUiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJOT1RFX0VESVQiLCJub3RlcyIsImFjdGlvbnMiLCJGRVRDSF9VU0VSUyIsInJlc29sdmUiLCJyZWplY3QiLCJhcGkiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb250ZXh0IiwiY29tbWl0IiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJwb3N0IiwiVVNFUl9FRElUIiwicHV0IiwiZGVsZXRlIiwiU0FWRV9TVEFURSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJMT0FEX1NUQVRFIiwiSlNPTiIsInBhcnNlIiwiZ2V0SXRlbSIsIm1vZHVsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUlBOzs7O0FBRkFBLGNBQUlDLEdBQUosQ0FBUUMsY0FBUjs7a0JBSWUsSUFBSUEsZUFBS0MsS0FBVCxDQUFlO0FBQzVCQyxXQUFTLEVBRG1CO0FBRTVCQyxTQUFPO0FBQ0xDLFdBQU87QUFERixHQUZxQjtBQUs1QkMsV0FBUztBQUNQRCxXQUFPLHNCQUFTO0FBQ2QsYUFBT0QsTUFBTUMsS0FBYjtBQUNEO0FBSE0sR0FMbUI7QUFVNUJFLGFBQVc7QUFDVEMsZUFBVyxtQkFBQ0osS0FBRCxFQUFRSyxPQUFSLEVBQW9CO0FBQzdCLDRCQUFjTCxLQUFkLEVBQXFCSyxPQUFyQjtBQUNELEtBSFE7QUFJVEMsYUFKUyxxQkFJQ04sS0FKRCxFQUlRSyxPQUpSLEVBSWlCO0FB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LGlCQUFTO0FBQ2RSLGlCQUFPUyxLQUFQO0FBQ0QsU0FSSDtBQVNELE9BVk0sQ0FBUDtBQVdELEtBdERNOztBQXdEUEssZ0JBQVksb0JBQUNULE9BQUQsRUFBVXRCLE9BQVYsRUFBc0I7QUFDaENnQyxtQkFBYUMsT0FBYixDQUFxQixPQUFyQixFQUE4Qix5QkFBZVgsUUFBUTNCLEtBQXZCLENBQTlCO0FBQ0QsS0ExRE07O0FBNERQdUMsZ0JBQVksb0JBQUNaLE9BQUQsRUFBVXRCLE9BQVYsRUFBc0I7QUFDaENzQixjQUFRQyxNQUFSLENBQWUsV0FBZixFQUE0QlksS0FBS0MsS0FBTCxDQUFXSixhQUFhSyxPQUFiLENBQXFCLE9BQXJCLENBQVgsQ0FBNUI7QUFDRDtBQTlETSxHQWxDbUI7QUFrRzVCQyxXQUFTO0FBbEdtQixDQUFmLEMiLCJmaWxlIjoiLi9zcmMvc3RvcmUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnO1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tICdzcmMvdXRpbHMvYXBpLmpzJztcclxuXHJcblZ1ZS51c2UoVnVleCk7XHJcblxyXG5pbXBvcnQgeyBnZW5lcmF0ZUlEIH0gZnJvbSAnc3JjL3V0aWxzL2NvbW1vbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XHJcbiAgcGx1Z2luczogW10sXHJcbiAgc3RhdGU6IHtcclxuICAgIHVzZXJzOiBbXSxcclxuICB9LFxyXG4gIGdldHRlcnM6IHtcclxuICAgIHVzZXJzOiBzdGF0ZSA9PiB7XHJcbiAgICAgIHJldHVybiBzdGF0ZS51c2VycztcclxuICAgIH0sXHJcbiAgfSxcclxuICBtdXRhdGlvbnM6IHtcclxuICAgIFNFVF9TVEFURTogKHN0YXRlLCBwYXlsb2FkKSA9PiB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24oc3RhdGUsIHBheWxvYWQpO1xyXG4gICAgfSxcclxuICAgIFNFVF9VU0VSUyhzdGF0ZSwgcGF5bG9hZCkge1xyXG4gICAgICBzdGF0ZS51c2VycyA9IHBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgVVNFUl9BREQ6IChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICBzdGF0ZS51c2Vycy5wdXNoKHBheWxvYWQpO1xyXG4gICAgfSxcclxuICAgIFVTRVJfUkVNT1ZFOiAoc3RhdGUsIGlkKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgbGV0IGluZGV4ID0gc3RhdGUudXNlcnMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PSBpZCk7XHJcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgc3RhdGUudXNlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIE5PVEVfRURJVDogKHN0YXRlLCBwYXlsb2FkKSA9PiB7XHJcbiAgICAgIGxldCBpbmRleCA9IHN0YXRlLm5vdGVzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT0gcGF5bG9hZC5pZCk7XHJcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgc3RhdGUubm90ZXMuc3BsaWNlKGluZGV4LCAxLCBwYXlsb2FkKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFjdGlvbnM6IHtcclxuICAgIEZFVENIX1VTRVJTOiBjb250ZXh0ID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBhcGlcclxuICAgICAgICAgIC5nZXQoJ3VzZXJzJylcclxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmNvbW1pdCgnU0VUX1VTRVJTJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFVTRVJfQUREOiAoY29udGV4dCwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICBwYXlsb2FkLmlkID0gZ2VuZXJhdGVJRCgpO1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGFwaVxyXG4gICAgICAgICAgLnBvc3QoJ3VzZXJzJywgcGF5bG9hZClcclxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29udGV4dC5jb21taXQoJ1VTRVJfQUREJywgcGF5bG9hZCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFVTRVJfRURJVDogKGNvbnRleHQsIHBheWxvYWQpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBhcGlcclxuICAgICAgICAgIC5wdXQoYHVzZXJzLyR7cGF5bG9hZC5pZH1gLCBwYXlsb2FkKVxyXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb250ZXh0LmNvbW1pdCgnVVNFUl9SRU1PVkUnLCBwYXlsb2FkLmlkKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgVVNFUl9SRU1PVkU6IChjb250ZXh0LCBwYXlsb2FkKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgYXBpXHJcbiAgICAgICAgICAuZGVsZXRlKGB1c2Vycy8ke3BheWxvYWQuaWR9YClcclxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29udGV4dC5jb21taXQoJ1VTRVJfUkVNT1ZFJywgcGF5bG9hZC5pZCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBTQVZFX1NUQVRFOiAoY29udGV4dCwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RhdGUnLCBKU09OLnN0cmluZ2lmeShjb250ZXh0LnN0YXRlKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIExPQURfU1RBVEU6IChjb250ZXh0LCBwYXlsb2FkKSA9PiB7XHJcbiAgICAgIGNvbnRleHQuY29tbWl0KCdTRVRfU1RBVEUnLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGF0ZScpKSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW9kdWxlczoge30sXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/index.js\n");

/***/ })

})