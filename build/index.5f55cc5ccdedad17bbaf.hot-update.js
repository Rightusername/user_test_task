webpackHotUpdate("index",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/Main.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js??ref--1-1!./src/app/views/Main.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _UserCreateModal = __webpack_require__(/*! app/components/modals/UserCreateModal.vue */ \"./src/app/components/modals/UserCreateModal.vue\");\n\nvar _UserCreateModal2 = _interopRequireDefault(_UserCreateModal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n  name: 'Main',\n  components: {},\n  data: function data() {\n    return {};\n  },\n\n  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['users'])),\n\n  created: function created() {},\n  beforeDestroy: function beforeDestroy() {},\n  mounted: function mounted() {},\n\n\n  methods: {\n    createUser: function createUser() {\n      this.$modal.show(_UserCreateModal2.default, {}, {\n        transition: 'fade'\n      });\n    },\n    removeUser: function removeUser(user) {\n      console.log(user);\n      this.$store.dispatch('USER_REMOVE', user);\n    }\n  }\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC92aWV3cy9NYWluLnZ1ZT9kNjI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFvQkE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQUVBO0FBQ0EsY0FEQTtBQUVBLGdCQUZBO0FBR0EsTUFIQSxrQkFHQTtBQUNBO0FBQ0EsR0FMQTs7QUFNQSx1Q0FDQSxnQ0FEQSxDQU5BOztBQVVBLFNBVkEscUJBVUEsRUFWQTtBQVlBLGVBWkEsMkJBWUEsRUFaQTtBQWNBLFNBZEEscUJBY0EsRUFkQTs7O0FBZ0JBO0FBQ0EsY0FEQSx3QkFDQTtBQUNBLHVCQUNBLHlCQURBLEVBRUEsRUFGQSxFQUdBO0FBQ0E7QUFEQSxPQUhBO0FBT0EsS0FUQTtBQVdBLGNBWEEsc0JBV0EsSUFYQSxFQVdBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFoQkEsQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtc3ZnLWlubGluZS1sb2FkZXIvZGlzdC9pbmRleC5taW4uanM/IS4vc3JjL2FwcC92aWV3cy9NYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImFwcC1tYWluXCI+XHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICA8aDE+XHJcbiAgICAgICAgVXNlcnNcclxuICAgICAgPC9oMT5cclxuICAgICAgPGRpdiBjbGFzcz1cInByaW1hcnktYnRuXCIgQGNsaWNrPVwiY3JlYXRlVXNlclwiPkNyZWF0ZSBVc2VyPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuXHJcbiAgICA8ZGl2IHYtaWY9XCIhdXNlcnMgfHwgdXNlcnMubGVuZ3RoID09IDBcIiBjbGFzcz1cIm5vLXVzZXJzXCI+Tm8gdXNlcnM8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ1c2Vycy1saXN0XCI+XHJcbiAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIHVzZXJzXCIgOmtleT1cIml0ZW0uaWRcIiBjbGFzcz1cInVzZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnt7IGl0ZW0ubmFtZSB9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgQGNsaWNrPVwicmVtb3ZlVXNlcihpdGVtKVwiPnJlbW92ZTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xyXG5cclxuaW1wb3J0IFVzZXJDcmVhdGVNb2RhbCBmcm9tICdhcHAvY29tcG9uZW50cy9tb2RhbHMvVXNlckNyZWF0ZU1vZGFsLnZ1ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ01haW4nLFxyXG4gIGNvbXBvbmVudHM6IHt9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgLi4ubWFwR2V0dGVycyhbJ3VzZXJzJ10pLFxyXG4gIH0sXHJcblxyXG4gIGNyZWF0ZWQoKSB7fSxcclxuXHJcbiAgYmVmb3JlRGVzdHJveSgpIHt9LFxyXG5cclxuICBtb3VudGVkKCkge30sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGNyZWF0ZVVzZXIoKSB7XHJcbiAgICAgIHRoaXMuJG1vZGFsLnNob3coXHJcbiAgICAgICAgVXNlckNyZWF0ZU1vZGFsLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246ICdmYWRlJyxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlbW92ZVVzZXIodXNlcikge1xyXG4gICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ1VTRVJfUkVNT1ZFJywgdXNlcik7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5AaW1wb3J0ICd+c3R5bGVzL19taXhpbnMuc2Nzcyc7XHJcblxyXG4uYXBwLW1haW4ge1xyXG4gIG1heC13aWR0aDogMTEwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBub25lO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICBoZWFkZXIge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLm5vLXVzZXJzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW5wdXQtYm9yZGVyLWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC51c2Vycy1saXN0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG4gICAgQGluY2x1ZGUgc2Nyb2xsYmFyKDJweCk7XHJcblxyXG4gICAgLnVzZXIge1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/Main.vue?vue&type=script&lang=js&\n");

/***/ })

})