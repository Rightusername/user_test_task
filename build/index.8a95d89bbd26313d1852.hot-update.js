webpackHotUpdate("index",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/components/modals/UserEditModal.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js??ref--1-1!./src/app/components/modals/UserEditModal.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n__webpack_require__(/*! app/ */ \"./src/app/index.js\");\n\nexports.default = {\n  name: 'UserCreateModal',\n  components: {},\n  props: {\n    data: {\n      type: Object,\n      default: null\n    }\n  },\n\n  data: function data() {\n    return {\n      errors: {\n        name: null,\n        email: null,\n        street: null\n      }\n    };\n  },\n\n  computed: {},\n  created: function created() {},\n  mounted: function mounted() {\n    var _this = this;\n\n    setTimeout(function () {\n      _this.$refs.name.focus();\n    }, 100);\n  },\n\n  methods: {\n    close: function close() {\n      this.$emit('close');\n    },\n    onClose: function onClose(e) {\n      if (e.target.dataset.close) {\n        this.close();\n      }\n    },\n    validate: function validate() {\n      var isValid = true;\n\n      if (this.user.name.length == 0) {\n        isValid = false;\n        this.errors.name = 'Name is required';\n      } else {\n        this.errors.name = '';\n      }\n\n      if (this.user.email.length == 0) {\n        isValid = false;\n        this.errors.email = 'Email is required';\n      } else {\n        if (!this.user.email.match(/.{1,}@.{1,}/)) {\n          isValid = false;\n          this.errors.email = 'Wrong email';\n        } else {\n          this.errors.email = '';\n        }\n      }\n\n      if (this.user.address.street.length == 0) {\n        isValid = false;\n        this.errors.street = 'Address street is required';\n      } else {\n        this.errors.street = '';\n      }\n\n      return isValid;\n    },\n    confirm: function confirm() {\n      if (this.validate()) {\n        this.$store.dispatch('USER_ADD', this.user);\n        this.close();\n      }\n    }\n  }\n}; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9Vc2VyRWRpdE1vZGFsLnZ1ZT8wZjc1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQXFGQTs7a0JBRUE7QUFDQSx5QkFEQTtBQUVBLGdCQUZBO0FBR0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQTtBQURBLEdBSEE7O0FBVUEsTUFWQSxrQkFVQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLG1CQUZBO0FBR0E7QUFIQTtBQURBO0FBT0EsR0FsQkE7O0FBbUJBLGNBbkJBO0FBb0JBLFNBcEJBLHFCQW9CQSxFQXBCQTtBQXFCQSxTQXJCQSxxQkFxQkE7QUFBQTs7QUFDQTtBQUNBO0FBQ0EsS0FGQSxFQUVBLEdBRkE7QUFHQSxHQXpCQTs7QUEwQkE7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsV0FKQSxtQkFJQSxDQUpBLEVBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVJBO0FBVUEsWUFWQSxzQkFVQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQXhDQTtBQTBDQSxXQTFDQSxxQkEwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0NBO0FBMUJBLEMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLXN2Zy1pbmxpbmUtbG9hZGVyL2Rpc3QvaW5kZXgubWluLmpzPyEuL3NyYy9hcHAvY29tcG9uZW50cy9tb2RhbHMvVXNlckVkaXRNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwiYXBwLXVzZXItZWRpdC1tb2RhbCB0LW1vZGFsXCJcclxuICAgIGRhdGEtY2xvc2U9XCJ0cnVlXCJcclxuICAgIEBtb3VzZWRvd249XCJvbkNsb3NlXCJcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIj5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5FZGl0IFVzZXI8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtYnRuXCIgZGF0YS1jbG9zZT1cInRydWVcIiBAY2xpY2s9XCJjbG9zZVwiPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbiAgICAgICAgICAgIHg9XCIwcHhcIlxyXG4gICAgICAgICAgICB5PVwiMHB4XCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcclxuICAgICAgICAgICAgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7XCJcclxuICAgICAgICAgICAgeG1sOnNwYWNlPVwicHJlc2VydmVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNTA1Ljk0Myw2LjA1OGMtOC4wNzctOC4wNzctMjEuMTcyLTguMDc3LTI5LjI0OSwwTDYuMDU4LDQ3Ni42OTNjLTguMDc3LDguMDc3LTguMDc3LDIxLjE3MiwwLDI5LjI0OVxyXG4gICAgICAgICAgICAgICAgQzEwLjA5Niw1MDkuOTgyLDE1LjM5LDUxMiwyMC42ODMsNTEyYzUuMjkzLDAsMTAuNTg2LTIuMDE5LDE0LjYyNS02LjA1OUw1MDUuOTQzLDM1LjMwNlxyXG4gICAgICAgICAgICAgICAgQzUxNC4wMTksMjcuMjMsNTE0LjAxOSwxNC4xMzUsNTA1Ljk0Myw2LjA1OHpcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTUwNS45NDIsNDc2LjY5NEwzNS4zMDYsNi4wNTljLTguMDc2LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDgsMGMtOC4wNzcsOC4wNzYtOC4wNzcsMjEuMTcxLDAsMjkuMjQ4bDQ3MC42MzYsNDcwLjYzNlxyXG4gICAgICAgICAgICAgICAgYzQuMDM4LDQuMDM5LDkuMzMyLDYuMDU4LDE0LjYyNSw2LjA1OGM1LjI5MywwLDEwLjU4Ny0yLjAxOSwxNC42MjQtNi4wNTdDNTE0LjAxOCw0OTcuODY2LDUxNC4wMTgsNDg0Ljc3MSw1MDUuOTQyLDQ3Ni42OTR6XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcmVmPVwibmFtZVwiXHJcbiAgICAgICAgICB2LW1vZGVsPVwidXNlci5uYW1lXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBjbGFzcz1cInQtaW5wdXQgbmFtZS1pbnB1dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiB2LXNob3c9XCJlcnJvcnMubmFtZVwiIGNsYXNzPVwiZXJyb3JcIj57eyBlcnJvcnMubmFtZSB9fTwvZGl2PlxyXG5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHJlZj1cImVtYWlsXCJcclxuICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmVtYWlsXCJcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgY2xhc3M9XCJ0LWlucHV0IGVtYWlsLWlucHV0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiB2LXNob3c9XCJlcnJvcnMuZW1haWxcIiBjbGFzcz1cImVycm9yXCI+e3sgZXJyb3JzLmVtYWlsIH19PC9kaXY+XHJcblxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcmVmPVwic3RyZWV0XCJcclxuICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmFkZHJlc3Muc3RyZWV0XCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBjbGFzcz1cInQtaW5wdXQgc3RyZWV0LWlucHV0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RyZWV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgdi1zaG93PVwiZXJyb3JzLnN0cmVldFwiIGNsYXNzPVwiZXJyb3JcIj57eyBlcnJvcnMuc3RyZWV0IH19PC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzLWJ0biBjYW5jZWxcIiBAY2xpY2s9XCJjbG9zZVwiPlxyXG4gICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzLWJ0biBjb25maXJtXCIgQGNsaWNrPVwiY29uZmlybVwiPlxyXG4gICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQge30gZnJvbSAnYXBwLyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ1VzZXJDcmVhdGVNb2RhbCcsXHJcbiAgY29tcG9uZW50czoge30sXHJcbiAgcHJvcHM6IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgICBzdHJlZXQ6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHt9LFxyXG4gIGNyZWF0ZWQoKSB7fSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuJHJlZnMubmFtZS5mb2N1cygpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGNsb3NlKCkge1xyXG4gICAgICB0aGlzLiRlbWl0KCdjbG9zZScpO1xyXG4gICAgfSxcclxuICAgIG9uQ2xvc2UoZSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQuZGF0YXNldC5jbG9zZSkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB2YWxpZGF0ZSgpIHtcclxuICAgICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cclxuICAgICAgaWYgKHRoaXMudXNlci5uYW1lLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXJyb3JzLm5hbWUgPSAnTmFtZSBpcyByZXF1aXJlZCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMubmFtZSA9ICcnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy51c2VyLmVtYWlsLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXJyb3JzLmVtYWlsID0gJ0VtYWlsIGlzIHJlcXVpcmVkJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIXRoaXMudXNlci5lbWFpbC5tYXRjaCgvLnsxLH1ALnsxLH0vKSkge1xyXG4gICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5lcnJvcnMuZW1haWwgPSAnV3JvbmcgZW1haWwnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVycm9ycy5lbWFpbCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMudXNlci5hZGRyZXNzLnN0cmVldC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVycm9ycy5zdHJlZXQgPSAnQWRkcmVzcyBzdHJlZXQgaXMgcmVxdWlyZWQnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZXJyb3JzLnN0cmVldCA9ICcnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaXNWYWxpZDtcclxuICAgIH0sXHJcblxyXG4gICAgY29uZmlybSgpIHtcclxuICAgICAgaWYgKHRoaXMudmFsaWRhdGUoKSkge1xyXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdVU0VSX0FERCcsIHRoaXMudXNlcik7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5AaW1wb3J0ICd+c3R5bGVzL19taXhpbnMuc2Nzcyc7XHJcblxyXG4uYXBwLXVzZXItZWRpdC1tb2RhbCB7XHJcbiAgLm1vZGFsIHtcclxuICAgIHdpZHRoOiA0NDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIC5lcnJvciB7XHJcbiAgICBjb2xvcjogI2ZmNDA1ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMThweDtcclxuICB9XHJcblxyXG4gIG1haW4ge1xyXG4gICAgLm5hbWUtaW5wdXQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAuYWRkLWJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlYy1idG4tYmcpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlYy1idG4tYm9yZGVyLWNvbG9yKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjI7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/components/modals/UserEditModal.vue?vue&type=script&lang=js&\n");

/***/ })

})