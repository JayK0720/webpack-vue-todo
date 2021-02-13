(self["webpackChunkvue_todolist"] = self["webpackChunkvue_todolist"] || []).push([["src_views_todo_index_vue"],{

/***/ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/components/filter-tab/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/components/filter-tab/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/_core-js@3.8.3@core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var ALL = "all";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "filter-tab",
  data: function data() {
    return {
      tabs: [{
        name: 'All',
        value: 'all'
      }, {
        name: 'Unfinished',
        value: 'unfinished'
      }, {
        name: 'Finished',
        value: 'finished'
      }]
    };
  },
  props: {
    current_filter: {
      type: String,
      "default": ALL
    },
    unfinished_todo_length: {
      type: Number,
      "default": 0
    }
  },
  methods: {
    set_filter: function set_filter(filter) {
      this.$emit('set_filter', filter);
    },
    clear: function clear() {
      this.$emit("clear");
    }
  }
});

/***/ }),

/***/ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/components/todo-list/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/components/todo-list/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/_core-js@3.8.3@core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_jinkang_Desktop_vue_todolist_node_modules_babel_runtime_7_12_13_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.12.13@@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.12.13@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var ant_design_vue_es_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ant-design-vue/es/icon/style/css */ "./node_modules/_ant-design-vue@1.7.2@ant-design-vue/es/icon/style/css.js");
/* harmony import */ var ant_design_vue_es_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ant-design-vue/es/icon */ "./node_modules/_ant-design-vue@1.7.2@ant-design-vue/es/icon/index.js");
/* harmony import */ var ant_design_vue_es_checkbox_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ant-design-vue/es/checkbox/style/css */ "./node_modules/_ant-design-vue@1.7.2@ant-design-vue/es/checkbox/style/css.js");
/* harmony import */ var ant_design_vue_es_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ant-design-vue/es/checkbox */ "./node_modules/_ant-design-vue@1.7.2@ant-design-vue/es/checkbox/index.js");







var _components;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "todo-list",
  props: {
    list: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  components: (_components = {}, (0,_Users_jinkang_Desktop_vue_todolist_node_modules_babel_runtime_7_12_13_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_components, ant_design_vue_es_checkbox__WEBPACK_IMPORTED_MODULE_4__.default.name, ant_design_vue_es_checkbox__WEBPACK_IMPORTED_MODULE_4__.default), (0,_Users_jinkang_Desktop_vue_todolist_node_modules_babel_runtime_7_12_13_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_components, ant_design_vue_es_icon__WEBPACK_IMPORTED_MODULE_5__.default.name, ant_design_vue_es_icon__WEBPACK_IMPORTED_MODULE_5__.default), _components),
  methods: {
    delete_todo: function delete_todo(id) {
      this.$emit("delete", id);
    }
  }
});

/***/ }),

/***/ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/views/todo/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/views/todo/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/_core-js@3.8.3@core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/_core-js@3.8.3@core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/_core-js@3.8.3@core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/_core-js@3.8.3@core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/_core-js@3.8.3@core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/_core-js@3.8.3@core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_jinkang_Desktop_vue_todolist_node_modules_babel_runtime_7_12_13_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.12.13@@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.12.13@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var ant_design_vue_es_empty_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ant-design-vue/es/empty/style/css */ "./node_modules/_ant-design-vue@1.7.2@ant-design-vue/es/empty/style/css.js");
/* harmony import */ var ant_design_vue_es_empty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ant-design-vue/es/empty */ "./node_modules/_ant-design-vue@1.7.2@ant-design-vue/es/empty/index.js");
/* harmony import */ var ant_design_vue_es_input_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ant-design-vue/es/input/style/css */ "./node_modules/_ant-design-vue@1.7.2@ant-design-vue/es/input/style/css.js");
/* harmony import */ var ant_design_vue_es_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ant-design-vue/es/input */ "./node_modules/_ant-design-vue@1.7.2@ant-design-vue/es/input/index.js");
/* harmony import */ var _components_todo_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/todo-list */ "./src/components/todo-list/index.vue");
/* harmony import */ var _components_filter_tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/filter-tab */ "./src/components/filter-tab/index.vue");












var _components;



var ALL = 'all',
    UNFINISHED = 'unfinished',
    FINISHED = 'finished';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "todo",
  data: function data() {
    return {
      todo: "",
      todo_list: [],
      current_filter: ALL
    };
  },
  components: (_components = {}, (0,_Users_jinkang_Desktop_vue_todolist_node_modules_babel_runtime_7_12_13_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)(_components, ant_design_vue_es_input__WEBPACK_IMPORTED_MODULE_11__.default.name, ant_design_vue_es_input__WEBPACK_IMPORTED_MODULE_11__.default), (0,_Users_jinkang_Desktop_vue_todolist_node_modules_babel_runtime_7_12_13_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)(_components, "TodoList", _components_todo_list__WEBPACK_IMPORTED_MODULE_9__.default), (0,_Users_jinkang_Desktop_vue_todolist_node_modules_babel_runtime_7_12_13_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)(_components, ant_design_vue_es_empty__WEBPACK_IMPORTED_MODULE_12__.default.name, ant_design_vue_es_empty__WEBPACK_IMPORTED_MODULE_12__.default), (0,_Users_jinkang_Desktop_vue_todolist_node_modules_babel_runtime_7_12_13_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)(_components, "FilterTab", _components_filter_tab__WEBPACK_IMPORTED_MODULE_10__.default), _components),
  computed: {
    filter_todo_list: function filter_todo_list() {
      if (this.current_filter == ALL) {
        return this.todo_list;
      } // if(this.current_filter == FINISHED){
      // 	return this.todo_list.filter(todo => todo['completed'])
      // }else{
      // 	return this.todo_list.filter(todo => !todo['completed'])
      // }
      // 先计算当前点击的是 已经完成还是未完成,然后再根据todo的completed属性


      var completed = this.current_filter == FINISHED ? true : false;
      return this.todo_list.filter(function (todo) {
        return todo['completed'] == completed;
      });
    },
    unfinished_todo_length: function unfinished_todo_length() {
      return this.todo_list.filter(function (todo) {
        return !todo.completed;
      }).length;
    }
  },
  methods: {
    add_todo: function add_todo() {
      var _this = this;

      if (!this.todo) {
        this.$message.warning("添加的事项不能为空");
        return;
      }

      var find_todo = this.todo_list.find(function (todo) {
        return todo['text'] == _this.todo;
      });

      if (find_todo) {
        this.$message.warning("该事项已经添加,请勿重复操作");
        return;
      }

      var id = new Date().getTime();
      this.todo_list.unshift({
        completed: false,
        id: id,
        text: this.todo
      });
      this.todo = "";
    },
    set_filter: function set_filter(filter) {
      this.current_filter = filter;
    },
    delete_todo: function delete_todo(id) {
      var _this2 = this;

      var h = this.$createElement;
      this.$confirm({
        title: "删除事项",
        content: function content(h) {
          return h("div", {
            "style": "color:#f81d22;"
          }, ["\u786E\u5B9A\u5220\u9664\u6B64\u6761\u8BB0\u5F55\u5417"]);
        },
        okText: "确定",
        cancelText: "我再想想",
        okType: "danger",
        onOk: function onOk() {
          _this2.todo_list.splice(_this2.todo_list.findIndex(function (todo) {
            return todo['id'] == id;
          }), 1);
        }
      });
    },
    clear: function clear() {
      var _this3 = this;

      var h = this.$createElement;

      if (!this.todo_list.length) {
        this.$message.error("当前没有可删除的事项记录");
        return;
      }

      this.$confirm({
        title: "清空事项",
        content: function content(h) {
          return h("div", {
            "style": "color:#f81d22;"
          }, ["\u786E\u5B9A\u6E05\u7A7A\u6240\u6709\u4E8B\u9879\u8BB0\u5F55\u5417?"]);
        },
        onText: "确定",
        cancelText: "我再想想",
        okType: "danger",
        onOk: function onOk() {
          _this3.todo_list = [];
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/_css-loader@5.0.1@css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[0]!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@5.0.0@postcss-loader/dist/cjs.js!./node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/components/filter-tab/index.vue?vue&type=style&index=0&id=0a3e7746&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@5.0.1@css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[0]!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@5.0.0@postcss-loader/dist/cjs.js!./node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/components/filter-tab/index.vue?vue&type=style&index=0&id=0a3e7746&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/_css-loader@5.0.1@css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/_css-loader@5.0.1@css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_5_0_1_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_css-loader@5.0.1@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@5.0.1@css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_5_0_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_5_0_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_5_0_1_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".filter-wrapper[data-v-0a3e7746] {\n  padding-top: 8px;\n  padding-bottom: 5px;\n  display: flex;\n  line-height: 40px;\n  justify-content: space-between;\n  font-size: 14px;\n  border-bottom: 1px solid #f1f1f1;\n}\n.filter-wrapper .unfinished-length[data-v-0a3e7746] {\n    color: #f81d22;\n}\n.filter-wrapper .filter-container[data-v-0a3e7746] {\n    padding-left: 24px;\n    flex: 1;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.filter-wrapper .clear-text[data-v-0a3e7746] {\n    color: rgba(0, 0, 0, 0.45);\n    cursor: pointer;\n}\n.filter-wrapper .clear-text[data-v-0a3e7746]:hover {\n      color: #f81d22;\n}\n.filter-wrapper .filter-text[data-v-0a3e7746] {\n    padding: 0 10px;\n    color: #314659;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.filter-wrapper .filter-text[data-v-0a3e7746]:hover {\n      color: #1890ff;\n      text-decoration: underline;\n}\n.filter-wrapper .filter-text.active[data-v-0a3e7746] {\n      color: #1890ff;\n}\n", "",{"version":3,"sources":["webpack://./src/components/filter-tab/index.vue"],"names":[],"mappings":"AA2DA;EACC,gBAAe;EACf,mBAAkB;EAClB,aAAY;EACZ,iBAAgB;EAChB,8BAA6B;EAC7B,eAAc;EACd,gCAA+B;AAAA;AAPhC;IASE,cAAa;AAAA;AATf;IAYE,kBAAiB;IACjB,OAAM;IACN,yBAAgB;OAAhB,sBAAgB;QAAhB,qBAAgB;YAAhB,iBAAgB;AAAA;AAdlB;IAiBE,0BAAqB;IACrB,eAAc;AAAA;AAlBhB;MAoBG,cAAa;AAAA;AApBhB;IAwBE,eAAc;IACd,cAAa;IACb,eAAc;IACd,yBAAgB;OAAhB,sBAAgB;QAAhB,qBAAgB;YAAhB,iBAAgB;AAAA;AA3BlB;MA6BG,cAAa;MACb,0BAAyB;AAAA;AA9B5B;MAiCG,cAAa;AAAA","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.filter-wrapper{\n\tpadding-top:8px;\n\tpadding-bottom:5px;\n\tdisplay:flex;\n\tline-height:40px;\n\tjustify-content:space-between;\n\tfont-size:14px;\n\tborder-bottom:1px solid #f1f1f1;\n\t.unfinished-length{\n\t\tcolor:#f81d22;\n\t}\n\t.filter-container{\n\t\tpadding-left:24px;\n\t\tflex:1;\n\t\tuser-select:none;\n\t}\n\t.clear-text{\n\t\tcolor:rgba(0,0,0,.45);\n\t\tcursor:pointer;\n\t\t&:hover{\n\t\t\tcolor:#f81d22;\n\t\t}\n\t}\n\t.filter-text{\n\t\tpadding:0 10px;\n\t\tcolor:#314659;\n\t\tcursor:pointer;\n\t\tuser-select:none;\n\t\t&:hover{\n\t\t\tcolor:#1890ff;\n\t\t\ttext-decoration:underline;\n\t\t}\n\t\t&.active{\n\t\t\tcolor:#1890ff;\n\t\t}\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/_css-loader@5.0.1@css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[0]!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@5.0.0@postcss-loader/dist/cjs.js!./node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/components/todo-list/index.vue?vue&type=style&index=0&id=11265530&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@5.0.1@css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[0]!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@5.0.0@postcss-loader/dist/cjs.js!./node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/components/todo-list/index.vue?vue&type=style&index=0&id=11265530&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/_css-loader@5.0.1@css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/_css-loader@5.0.1@css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_5_0_1_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_css-loader@5.0.1@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@5.0.1@css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_5_0_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_5_0_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_5_0_1_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".todo-item[data-v-11265530] {\n  display: flex;\n  height: 56px;\n  line-height: 56px;\n  align-items: center;\n  padding: 0 10px;\n  border-bottom: 1px solid #e8e8e8;\n}\n.todo-item:hover .delete-text[data-v-11265530] {\n    opacity: 1;\n}\n.todo-item .todo-text[data-v-11265530] {\n    flex: 1;\n    padding-left: 10px;\n    align-items: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.todo-item .todo-text.completed[data-v-11265530] {\n      color: rgba(0, 0, 0, 0.3);\n      text-decoration: line-through;\n}\n.todo-item .delete-text[data-v-11265530] {\n    cursor: pointer;\n    color: rgba(0, 0, 0, 0.45);\n    font-size: 13px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    opacity: 0;\n}\n.todo-item .delete-text[data-v-11265530]:hover {\n      color: #ff4d4f;\n}\n.todo-item .delete-text .close-icon[data-v-11265530] {\n      font-size: 16px;\n}\n", "",{"version":3,"sources":["webpack://./src/components/todo-list/index.vue"],"names":[],"mappings":"AAwCA;EACC,aAAY;EACZ,YAAW;EACX,iBAAgB;EAChB,mBAAkB;EAClB,eAAc;EACd,gCAA+B;AAAA;AANhC;IASG,UAAS;AAAA;AATZ;IAaE,OAAM;IACN,kBAAiB;IACjB,mBAAkB;IAClB,yBAAgB;OAAhB,sBAAgB;QAAhB,qBAAgB;YAAhB,iBAAgB;AAAA;AAhBlB;MAkBG,yBAAoB;MACpB,6BAA4B;AAAA;AAnB/B;IAuBE,eAAc;IACd,0BAAqB;IACrB,eAAc;IACd,yBAAgB;OAAhB,sBAAgB;QAAhB,qBAAgB;YAAhB,iBAAgB;IAChB,UAAS;AAAA;AA3BX;MA6BG,cAAa;AAAA;AA7BhB;MAgCG,eAAc;AAAA","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.todo-item{\n\tdisplay:flex;\n\theight:56px;\n\tline-height:56px;\n\talign-items:center;\n\tpadding:0 10px;\n\tborder-bottom:1px solid #e8e8e8;\n\t&:hover{\n\t\t.delete-text{\n\t\t\topacity:1;\n\t\t}\n\t}\n\t.todo-text{\n\t\tflex:1;\n\t\tpadding-left:10px;\n\t\talign-items:center;\n\t\tuser-select:none;\n\t\t&.completed{\n\t\t\tcolor:rgba(0,0,0,.3);\n\t\t\ttext-decoration:line-through;\n\t\t}\n\t}\n\t.delete-text{\n\t\tcursor:pointer;\n\t\tcolor:rgba(0,0,0,.45);\n\t\tfont-size:13px;\n\t\tuser-select:none;\n\t\topacity:0;\n\t\t&:hover{\n\t\t\tcolor:#ff4d4f;\n\t\t}\n\t\t.close-icon{\n\t\t\tfont-size:16px;\n\t\t}\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/_css-loader@5.0.1@css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[0]!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@5.0.0@postcss-loader/dist/cjs.js!./node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/views/todo/index.vue?vue&type=style&index=0&id=2aee42ac&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@5.0.1@css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[0]!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@5.0.0@postcss-loader/dist/cjs.js!./node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/views/todo/index.vue?vue&type=style&index=0&id=2aee42ac&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/_css-loader@5.0.1@css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/_css-loader@5.0.1@css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_5_0_1_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_css-loader@5.0.1@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@5.0.1@css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_5_0_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_5_0_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_5_0_1_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ant-modal-confirm-title[data-v-2aee42ac] {\n  color: rgba(0, 0, 0, 0.65);\n}\n.todo-page .title[data-v-2aee42ac] {\n  padding-top: 20px;\n  font-style: italic;\n  text-align: center;\n  color: #c41d7f;\n  font-size: 36px;\n  line-height: 54px;\n}\n.todo-page .todo-wrapper[data-v-2aee42ac] {\n  margin: 15px auto 0;\n  padding: 24px 15px;\n  width: 680px;\n  font-size: 16px;\n  background-color: #ffffff;\n  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.01);\n  border-radius: 6px;\n}\n.todo-page .input-wrapper[data-v-2aee42ac] {\n  width: 100%;\n  display: flex;\n}\n.todo-page .input-wrapper .todo-input[data-v-2aee42ac] {\n    border-radius: 0;\n}\n.todo-page .confirm-button[data-v-2aee42ac] {\n  border-radius: 0;\n}\n.todo-page .ant-empty[data-v-2aee42ac] {\n  padding-top: 20px;\n  color: rgba(0, 0, 0, 0.5);\n}\n", "",{"version":3,"sources":["webpack://./src/views/todo/index.vue"],"names":[],"mappings":"AA2HA;EACC,0BAAqB;AAAA;AAEtB;EAEE,iBAAgB;EAChB,kBAAiB;EACjB,kBAAiB;EACjB,cAAa;EACb,eAAc;EACd,iBAAgB;AAAA;AAPlB;EAUE,mBAAkB;EAClB,kBAAiB;EACjB,YAAW;EACX,eAAc;EACd,yBAAwB;EACxB,6CAAyC;EACzC,kBAAiB;AAAA;AAhBnB;EAmBE,WAAU;EACV,aAAY;AAAA;AApBd;IAsBG,gBAAe;AAAA;AAtBlB;EA0BE,gBAAe;AAAA;AA1BjB;EA6BE,iBAAgB;EAChB,yBAAoB;AAAA","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.ant-modal-confirm-title{\n\tcolor:rgba(0,0,0,.65);\n}\n.todo-page{\n\t.title{\n\t\tpadding-top:20px;\n\t\tfont-style:italic;\n\t\ttext-align:center;\n\t\tcolor:#c41d7f;\n\t\tfont-size:36px;\n\t\tline-height:54px;\n\t}\n\t.todo-wrapper{\n\t\tmargin:15px auto 0;\n\t\tpadding:24px 15px;\n\t\twidth:680px;\n\t\tfont-size:16px;\n\t\tbackground-color:#ffffff;\n\t\tbox-shadow: 10px 10px 5px rgba(0,0,0,.01);\n\t\tborder-radius:6px;\n\t}\n\t.input-wrapper{\n\t\twidth:100%;\n\t\tdisplay:flex;\n\t\t.todo-input{\n\t\t\tborder-radius:0;\n\t\t}\n\t}\n\t.confirm-button{\n\t\tborder-radius:0;\n\t}\n\t.ant-empty{\n\t\tpadding-top:20px;\n\t\tcolor:rgba(0,0,0,.5);\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/filter-tab/index.vue":
/*!*********************************************!*\
  !*** ./src/components/filter-tab/index.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_0a3e7746_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0a3e7746&scoped=true& */ "./src/components/filter-tab/index.vue?vue&type=template&id=0a3e7746&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/components/filter-tab/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_0a3e7746_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=0a3e7746&lang=scss&scoped=true& */ "./src/components/filter-tab/index.vue?vue&type=style&index=0&id=0a3e7746&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_0a3e7746_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_0a3e7746_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0a3e7746",
  null
  
)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/todo-list/index.vue":
/*!********************************************!*\
  !*** ./src/components/todo-list/index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_11265530_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=11265530&scoped=true& */ "./src/components/todo-list/index.vue?vue&type=template&id=11265530&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/components/todo-list/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_11265530_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=11265530&lang=scss&scoped=true& */ "./src/components/todo-list/index.vue?vue&type=style&index=0&id=11265530&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_11265530_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_11265530_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "11265530",
  null
  
)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/views/todo/index.vue":
/*!**********************************!*\
  !*** ./src/views/todo/index.vue ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_2aee42ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2aee42ac&scoped=true& */ "./src/views/todo/index.vue?vue&type=template&id=2aee42ac&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/todo/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_2aee42ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=2aee42ac&lang=scss&scoped=true& */ "./src/views/todo/index.vue?vue&type=style&index=0&id=2aee42ac&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_2aee42ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_2aee42ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2aee42ac",
  null
  
)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/filter-tab/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/components/filter-tab/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/components/filter-tab/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/todo-list/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/components/todo-list/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/components/todo-list/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/views/todo/index.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/views/todo/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/views/todo/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/filter-tab/index.vue?vue&type=style&index=0&id=0a3e7746&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./src/components/filter-tab/index.vue?vue&type=style&index=0&id=0a3e7746&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_0_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_5_0_0_postcss_loader_dist_cjs_js_node_modules_sass_loader_10_1_1_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0a3e7746_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_css-loader@5.0.1@css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[0]!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@5.0.0@postcss-loader/dist/cjs.js!../../../node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=0a3e7746&lang=scss&scoped=true& */ "./node_modules/_css-loader@5.0.1@css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[0]!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@5.0.0@postcss-loader/dist/cjs.js!./node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/components/filter-tab/index.vue?vue&type=style&index=0&id=0a3e7746&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/components/todo-list/index.vue?vue&type=style&index=0&id=11265530&lang=scss&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/components/todo-list/index.vue?vue&type=style&index=0&id=11265530&lang=scss&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_0_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_5_0_0_postcss_loader_dist_cjs_js_node_modules_sass_loader_10_1_1_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_11265530_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_css-loader@5.0.1@css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[0]!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@5.0.0@postcss-loader/dist/cjs.js!../../../node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=11265530&lang=scss&scoped=true& */ "./node_modules/_css-loader@5.0.1@css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[0]!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@5.0.0@postcss-loader/dist/cjs.js!./node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/components/todo-list/index.vue?vue&type=style&index=0&id=11265530&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/views/todo/index.vue?vue&type=style&index=0&id=2aee42ac&lang=scss&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/views/todo/index.vue?vue&type=style&index=0&id=2aee42ac&lang=scss&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_5_0_1_css_loader_dist_cjs_js_clonedRuleSet_2_0_rules_0_use_0_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_5_0_0_postcss_loader_dist_cjs_js_node_modules_sass_loader_10_1_1_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2aee42ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_css-loader@5.0.1@css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[0]!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@5.0.0@postcss-loader/dist/cjs.js!../../../node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=2aee42ac&lang=scss&scoped=true& */ "./node_modules/_css-loader@5.0.1@css-loader/dist/cjs.js??clonedRuleSet-2[0].rules[0].use[0]!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@5.0.0@postcss-loader/dist/cjs.js!./node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/views/todo/index.vue?vue&type=style&index=0&id=2aee42ac&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/components/filter-tab/index.vue?vue&type=template&id=0a3e7746&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./src/components/filter-tab/index.vue?vue&type=template&id=0a3e7746&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0a3e7746_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0a3e7746_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0a3e7746_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=0a3e7746&scoped=true& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/components/filter-tab/index.vue?vue&type=template&id=0a3e7746&scoped=true&");


/***/ }),

/***/ "./src/components/todo-list/index.vue?vue&type=template&id=11265530&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./src/components/todo-list/index.vue?vue&type=template&id=11265530&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_11265530_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_11265530_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_11265530_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=11265530&scoped=true& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/components/todo-list/index.vue?vue&type=template&id=11265530&scoped=true&");


/***/ }),

/***/ "./src/views/todo/index.vue?vue&type=template&id=2aee42ac&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./src/views/todo/index.vue?vue&type=template&id=2aee42ac&scoped=true& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2aee42ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2aee42ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2aee42ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=2aee42ac&scoped=true& */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/views/todo/index.vue?vue&type=template&id=2aee42ac&scoped=true&");


/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/components/filter-tab/index.vue?vue&type=template&id=0a3e7746&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/components/filter-tab/index.vue?vue&type=template&id=0a3e7746&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"filter-wrapper"},[_c('div',{staticClass:"unfinished-length"},[_vm._v(_vm._s(_vm.unfinished_todo_length)+" items left")]),_vm._v(" "),_c('section',{staticClass:"filter-container"},_vm._l((_vm.tabs),function(tab,index){return _c('span',{key:'tab-'+index,staticClass:"filter-text",class:{active:_vm.current_filter == tab['value'] ? true : false},on:{"click":function($event){$event.stopPropagation();return _vm.set_filter(tab['value'])}}},[_vm._v(_vm._s(tab['name']))])}),0),_vm._v(" "),_c('div',{staticClass:"clear-text",on:{"click":function($event){$event.stopPropagation();return _vm.clear($event)}}},[_vm._v("清空")])])}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/components/todo-list/index.vue?vue&type=template&id=11265530&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/components/todo-list/index.vue?vue&type=template&id=11265530&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"todo-list"},_vm._l((_vm.list),function(todo,index){return _c('li',{key:'todo-'+index,staticClass:"todo-item"},[_c('a-checkbox',{attrs:{"id":'todo-'+index},model:{value:(todo["completed"]),callback:function ($$v) {_vm.$set(todo, "completed", $$v)},expression:"todo[\"completed\"]"}}),_vm._v(" "),_c('label',{staticClass:"todo-text",class:{'completed': todo.completed ? true : false},attrs:{"for":'todo-'+index}},[_vm._v(_vm._s(todo['text']))]),_vm._v(" "),_c('span',{staticClass:"delete-text",on:{"click":function($event){$event.stopPropagation();return _vm.delete_todo(todo['id'])}}},[_c('a-icon',{staticClass:"close-icon",attrs:{"type":"close"}})],1)],1)}),0)}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/views/todo/index.vue?vue&type=template&id=2aee42ac&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js??vue-loader-options!./src/views/todo/index.vue?vue&type=template&id=2aee42ac&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"todo-page"},[_c('h1',{staticClass:"title"},[_vm._v("Just to do")]),_vm._v(" "),_c('div',{staticClass:"todo-wrapper"},[_c('div',{staticClass:"input-wrapper"},[_c('a-input',{staticClass:"todo-input",attrs:{"placeholder":"What next to do","autoFocus":true},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.add_todo($event)}},model:{value:(_vm.todo),callback:function ($$v) {_vm.todo=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"todo"}}),_vm._v(" "),_c('a-button',{staticClass:"confirm-button",attrs:{"type":"primary"},on:{"click":function($event){$event.stopPropagation();return _vm.add_todo($event)}}},[_vm._v("确定")])],1),_vm._v(" "),_c('filter-tab',{attrs:{"current_filter":_vm.current_filter,"unfinished_todo_length":_vm.unfinished_todo_length},on:{"set_filter":_vm.set_filter,"clear":_vm.clear}}),_vm._v(" "),(_vm.filter_todo_list.length)?_c('div',{staticClass:"todo-list-wrapper"},[_c('todo-list',{attrs:{"list":_vm.filter_todo_list},on:{"delete":_vm.delete_todo}})],1):_c('a-empty',{attrs:{"description":"暂无数据"}})],1)])}
var staticRenderFns = []



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtdG9kb2xpc3Qvc3JjL2NvbXBvbmVudHMvZmlsdGVyLXRhYi9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vdnVlLXRvZG9saXN0L3NyYy9jb21wb25lbnRzL3RvZG8tbGlzdC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vdnVlLXRvZG9saXN0L3NyYy92aWV3cy90b2RvL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly92dWUtdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy9maWx0ZXItdGFiL2luZGV4LnZ1ZT8zYjYzIiwid2VicGFjazovL3Z1ZS10b2RvbGlzdC8uL3NyYy9jb21wb25lbnRzL3RvZG8tbGlzdC9pbmRleC52dWU/ZGM0YSIsIndlYnBhY2s6Ly92dWUtdG9kb2xpc3QvLi9zcmMvdmlld3MvdG9kby9pbmRleC52dWU/NGY0OSIsIndlYnBhY2s6Ly92dWUtdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy9maWx0ZXItdGFiL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly92dWUtdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy90b2RvLWxpc3QvaW5kZXgudnVlIiwid2VicGFjazovL3Z1ZS10b2RvbGlzdC8uL3NyYy92aWV3cy90b2RvL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly92dWUtdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy9maWx0ZXItdGFiL2luZGV4LnZ1ZT80YTUzIiwid2VicGFjazovL3Z1ZS10b2RvbGlzdC8uL3NyYy9jb21wb25lbnRzL3RvZG8tbGlzdC9pbmRleC52dWU/M2VhMSIsIndlYnBhY2s6Ly92dWUtdG9kb2xpc3QvLi9zcmMvdmlld3MvdG9kby9pbmRleC52dWU/YmNhNCIsIndlYnBhY2s6Ly92dWUtdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy9maWx0ZXItdGFiL2luZGV4LnZ1ZT9mYThkIiwid2VicGFjazovL3Z1ZS10b2RvbGlzdC8uL3NyYy9jb21wb25lbnRzL3RvZG8tbGlzdC9pbmRleC52dWU/NGUyYSIsIndlYnBhY2s6Ly92dWUtdG9kb2xpc3QvLi9zcmMvdmlld3MvdG9kby9pbmRleC52dWU/Y2VjNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLGFBQ0E7QUFDQSxtQkFEQTtBQUVBO0FBRkEsT0FEQSxFQUtBO0FBQ0EsMEJBREE7QUFFQTtBQUZBLE9BTEEsRUFTQTtBQUNBLHdCQURBO0FBRUE7QUFGQSxPQVRBO0FBREE7QUFnQkEsR0FuQkE7QUFvQkE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBS0E7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFMQSxHQXBCQTtBQThCQTtBQUNBLGNBREEsc0JBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsU0FKQSxtQkFJQTtBQUNBO0FBQ0E7QUFOQTtBQTlCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBREEsR0FGQTtBQVVBLHVNQUNBLG9FQURBLDBPQUVBLGdFQUZBLDRFQVZBO0FBY0E7QUFDQSxlQURBLHVCQUNBLEVBREEsRUFDQTtBQUNBO0FBQ0E7QUFIQTtBQWRBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2FBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBLGNBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSxjQURBO0FBRUEsbUJBRkE7QUFHQTtBQUhBO0FBS0EsR0FSQTtBQVNBLHVNQUNBLGtFQURBLG9QQUVBLDBEQUZBLHlLQUdBLGtFQUhBLHFQQUlBLDREQUpBLGVBVEE7QUFlQTtBQUNBLG9CQURBLDhCQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsQ0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUNBO0FBQ0E7QUFB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aWV3c190b2RvX2luZGV4X3Z1ZS5jOWE3ZGJkYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImZpbHRlci13cmFwcGVyXCI+XG5cdFx0PGRpdiBjbGFzcz1cInVuZmluaXNoZWQtbGVuZ3RoXCI+e3t1bmZpbmlzaGVkX3RvZG9fbGVuZ3RofX0gaXRlbXMgbGVmdDwvZGl2PlxuXHRcdDxzZWN0aW9uIGNsYXNzPVwiZmlsdGVyLWNvbnRhaW5lclwiPlxuXHRcdFx0PHNwYW4gXG5cdFx0XHRcdHYtZm9yPVwiKHRhYixpbmRleCkgaW4gdGFic1wiIDprZXk9XCIndGFiLScraW5kZXhcIlxuXHRcdFx0XHRAY2xpY2suc3RvcD1cInNldF9maWx0ZXIodGFiWyd2YWx1ZSddKVwiXG5cdFx0XHRcdGNsYXNzPVwiZmlsdGVyLXRleHRcIlxuXHRcdFx0XHQ6Y2xhc3M9XCJ7YWN0aXZlOmN1cnJlbnRfZmlsdGVyID09IHRhYlsndmFsdWUnXSA/IHRydWUgOiBmYWxzZX1cIlxuXHRcdFx0Pnt7dGFiWyduYW1lJ119fTwvc3Bhbj5cblx0XHQ8L3NlY3Rpb24+XG5cdFx0PGRpdiBjbGFzcz1cImNsZWFyLXRleHRcIiBAY2xpY2suc3RvcD1cImNsZWFyXCI+5riF56m6PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0Y29uc3QgQUxMID0gXCJhbGxcIjtcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6XCJmaWx0ZXItdGFiXCIsXG5cdFx0ZGF0YSgpe1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0YWJzOltcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bmFtZTonQWxsJyxcblx0XHRcdFx0XHRcdFx0dmFsdWU6J2FsbCdcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdG5hbWU6J1VuZmluaXNoZWQnLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTondW5maW5pc2hlZCdcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdG5hbWU6J0ZpbmlzaGVkJyxcblx0XHRcdFx0XHRcdFx0dmFsdWU6J2ZpbmlzaGVkJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHByb3BzOntcblx0XHRcdGN1cnJlbnRfZmlsdGVyOntcblx0XHRcdFx0dHlwZTpTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6QUxMXG5cdFx0XHR9LFxuXHRcdFx0dW5maW5pc2hlZF90b2RvX2xlbmd0aDp7XG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxuXHRcdFx0XHRkZWZhdWx0OjBcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6e1xuXHRcdFx0c2V0X2ZpbHRlcihmaWx0ZXIpe1xuXHRcdFx0XHR0aGlzLiRlbWl0KCdzZXRfZmlsdGVyJyxmaWx0ZXIpO1xuXHRcdFx0fSxcblx0XHRcdGNsZWFyKCl7XG5cdFx0XHRcdHRoaXMuJGVtaXQoXCJjbGVhclwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cdC5maWx0ZXItd3JhcHBlcntcblx0XHRwYWRkaW5nLXRvcDo4cHg7XG5cdFx0cGFkZGluZy1ib3R0b206NXB4O1xuXHRcdGRpc3BsYXk6ZmxleDtcblx0XHRsaW5lLWhlaWdodDo0MHB4O1xuXHRcdGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuXHRcdGZvbnQtc2l6ZToxNHB4O1xuXHRcdGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNmMWYxZjE7XG5cdFx0LnVuZmluaXNoZWQtbGVuZ3Roe1xuXHRcdFx0Y29sb3I6I2Y4MWQyMjtcblx0XHR9XG5cdFx0LmZpbHRlci1jb250YWluZXJ7XG5cdFx0XHRwYWRkaW5nLWxlZnQ6MjRweDtcblx0XHRcdGZsZXg6MTtcblx0XHRcdHVzZXItc2VsZWN0Om5vbmU7XG5cdFx0fVxuXHRcdC5jbGVhci10ZXh0e1xuXHRcdFx0Y29sb3I6cmdiYSgwLDAsMCwuNDUpO1xuXHRcdFx0Y3Vyc29yOnBvaW50ZXI7XG5cdFx0XHQmOmhvdmVye1xuXHRcdFx0XHRjb2xvcjojZjgxZDIyO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuZmlsdGVyLXRleHR7XG5cdFx0XHRwYWRkaW5nOjAgMTBweDtcblx0XHRcdGNvbG9yOiMzMTQ2NTk7XG5cdFx0XHRjdXJzb3I6cG9pbnRlcjtcblx0XHRcdHVzZXItc2VsZWN0Om5vbmU7XG5cdFx0XHQmOmhvdmVye1xuXHRcdFx0XHRjb2xvcjojMTg5MGZmO1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xuXHRcdFx0fVxuXHRcdFx0Ji5hY3RpdmV7XG5cdFx0XHRcdGNvbG9yOiMxODkwZmY7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuXHQ8dWwgY2xhc3M9XCJ0b2RvLWxpc3RcIj5cblx0XHQ8bGkgdi1mb3I9XCIodG9kbyxpbmRleCkgaW4gbGlzdFwiIDprZXk9XCIndG9kby0nK2luZGV4XCIgY2xhc3M9XCJ0b2RvLWl0ZW1cIj5cblx0XHRcdDxhLWNoZWNrYm94IHYtbW9kZWw9J3RvZG9bXCJjb21wbGV0ZWRcIl0nIDppZD1cIid0b2RvLScraW5kZXhcIj48L2EtY2hlY2tib3g+XG5cdFx0XHQ8bGFiZWwgXG5cdFx0XHRcdGNsYXNzPVwidG9kby10ZXh0XCIgOmNsYXNzPVwieydjb21wbGV0ZWQnOiB0b2RvLmNvbXBsZXRlZCA/IHRydWUgOiBmYWxzZX1cIlxuXHRcdFx0XHQ6Zm9yPVwiJ3RvZG8tJytpbmRleFwiXG5cdFx0XHQ+e3t0b2RvWyd0ZXh0J119fTwvbGFiZWw+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImRlbGV0ZS10ZXh0XCIgQGNsaWNrLnN0b3A9XCJkZWxldGVfdG9kbyh0b2RvWydpZCddKVwiPlxuXHRcdFx0XHQ8YS1pY29uIHR5cGU9XCJjbG9zZVwiIGNsYXNzPVwiY2xvc2UtaWNvblwiLz5cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L2xpPlxuXHQ8L3VsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHtDaGVja2JveCxJY29ufSBmcm9tICdhbnQtZGVzaWduLXZ1ZSdcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6XCJ0b2RvLWxpc3RcIixcblx0XHRwcm9wczp7XG5cdFx0XHRsaXN0Ontcblx0XHRcdFx0dHlwZTpBcnJheSxcblx0XHRcdFx0ZGVmYXVsdDpmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHJldHVybiBbXVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wb25lbnRzOntcblx0XHRcdFtDaGVja2JveC5uYW1lXTpDaGVja2JveCxcblx0XHRcdFtJY29uLm5hbWVdOkljb25cblx0XHR9LFxuXHRcdG1ldGhvZHM6e1xuXHRcdFx0ZGVsZXRlX3RvZG8oaWQpe1xuXHRcdFx0XHR0aGlzLiRlbWl0KFwiZGVsZXRlXCIsaWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cblx0LnRvZG8taXRlbXtcblx0XHRkaXNwbGF5OmZsZXg7XG5cdFx0aGVpZ2h0OjU2cHg7XG5cdFx0bGluZS1oZWlnaHQ6NTZweDtcblx0XHRhbGlnbi1pdGVtczpjZW50ZXI7XG5cdFx0cGFkZGluZzowIDEwcHg7XG5cdFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2U4ZThlODtcblx0XHQmOmhvdmVye1xuXHRcdFx0LmRlbGV0ZS10ZXh0e1xuXHRcdFx0XHRvcGFjaXR5OjE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC50b2RvLXRleHR7XG5cdFx0XHRmbGV4OjE7XG5cdFx0XHRwYWRkaW5nLWxlZnQ6MTBweDtcblx0XHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcblx0XHRcdHVzZXItc2VsZWN0Om5vbmU7XG5cdFx0XHQmLmNvbXBsZXRlZHtcblx0XHRcdFx0Y29sb3I6cmdiYSgwLDAsMCwuMyk7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5kZWxldGUtdGV4dHtcblx0XHRcdGN1cnNvcjpwb2ludGVyO1xuXHRcdFx0Y29sb3I6cmdiYSgwLDAsMCwuNDUpO1xuXHRcdFx0Zm9udC1zaXplOjEzcHg7XG5cdFx0XHR1c2VyLXNlbGVjdDpub25lO1xuXHRcdFx0b3BhY2l0eTowO1xuXHRcdFx0Jjpob3Zlcntcblx0XHRcdFx0Y29sb3I6I2ZmNGQ0Zjtcblx0XHRcdH1cblx0XHRcdC5jbG9zZS1pY29ue1xuXHRcdFx0XHRmb250LXNpemU6MTZweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJ0b2RvLXBhZ2VcIj5cblx0XHQ8aDEgY2xhc3M9XCJ0aXRsZVwiPkp1c3QgdG8gZG88L2gxPlxuXHRcdDxkaXYgY2xhc3M9XCJ0b2RvLXdyYXBwZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwcGVyXCI+XG5cdFx0XHRcdDxhLWlucHV0IFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiV2hhdCBuZXh0IHRvIGRvXCIgXG5cdFx0XHRcdFx0Y2xhc3M9XCJ0b2RvLWlucHV0XCIgXG5cdFx0XHRcdFx0di1tb2RlbC50cmltPVwidG9kb1wiIFxuXHRcdFx0XHRcdEBrZXl1cC5lbnRlcj0nYWRkX3RvZG8nXG5cdFx0XHRcdFx0OmF1dG9Gb2N1cz1cInRydWVcIlxuXHRcdFx0XHQ+PC9hLWlucHV0PlxuXHRcdFx0XHQ8YS1idXR0b24gdHlwZT1cInByaW1hcnlcIiBjbGFzcz1cImNvbmZpcm0tYnV0dG9uXCIgQGNsaWNrLnN0b3A9XCJhZGRfdG9kb1wiPuehruWumjwvYS1idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxmaWx0ZXItdGFiIFxuXHRcdFx0XHQ6Y3VycmVudF9maWx0ZXI9XCJjdXJyZW50X2ZpbHRlclwiIFxuXHRcdFx0XHRAc2V0X2ZpbHRlcj1cInNldF9maWx0ZXJcIiBcblx0XHRcdFx0QGNsZWFyPVwiY2xlYXJcIlxuXHRcdFx0XHQ6dW5maW5pc2hlZF90b2RvX2xlbmd0aD1cInVuZmluaXNoZWRfdG9kb19sZW5ndGhcIlxuXHRcdFx0Lz5cblx0XHRcdDxkaXYgY2xhc3M9XCJ0b2RvLWxpc3Qtd3JhcHBlclwiIHYtaWY9XCJmaWx0ZXJfdG9kb19saXN0Lmxlbmd0aFwiPlxuXHRcdFx0XHQ8dG9kby1saXN0IDpsaXN0PVwiZmlsdGVyX3RvZG9fbGlzdFwiIEBkZWxldGU9XCJkZWxldGVfdG9kb1wiPjwvdG9kby1saXN0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8YS1lbXB0eSB2LWVsc2UgZGVzY3JpcHRpb249XCLmmoLml6DmlbDmja5cIi8+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHtJbnB1dCxFbXB0eX0gZnJvbSAnYW50LWRlc2lnbi12dWUnXG5cdGltcG9ydCBUb2RvTGlzdCBmcm9tICdAL2NvbXBvbmVudHMvdG9kby1saXN0J1xuXHRpbXBvcnQgRmlsdGVyVGFiIGZyb20gJ0AvY29tcG9uZW50cy9maWx0ZXItdGFiJ1xuXHRjb25zdCBBTEwgPSAnYWxsJywgVU5GSU5JU0hFRCA9ICd1bmZpbmlzaGVkJywgRklOSVNIRUQgPSAnZmluaXNoZWQnO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTpcInRvZG9cIixcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR0b2RvOlwiXCIsXG5cdFx0XHRcdHRvZG9fbGlzdDpbXSxcblx0XHRcdFx0Y3VycmVudF9maWx0ZXI6QUxMXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wb25lbnRzOntcblx0XHRcdFtJbnB1dC5uYW1lXTpJbnB1dCxcblx0XHRcdFRvZG9MaXN0LFxuXHRcdFx0W0VtcHR5Lm5hbWVdOkVtcHR5LFxuXHRcdFx0RmlsdGVyVGFiXG5cdFx0fSxcblx0XHRjb21wdXRlZDp7XG5cdFx0XHRmaWx0ZXJfdG9kb19saXN0KCl7XG5cdFx0XHRcdGlmKHRoaXMuY3VycmVudF9maWx0ZXIgPT0gQUxMKXtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy50b2RvX2xpc3Q7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC8vIGlmKHRoaXMuY3VycmVudF9maWx0ZXIgPT0gRklOSVNIRUQpe1xuXHRcdFx0XHQvLyBcdHJldHVybiB0aGlzLnRvZG9fbGlzdC5maWx0ZXIodG9kbyA9PiB0b2RvWydjb21wbGV0ZWQnXSlcblx0XHRcdFx0Ly8gfWVsc2V7XG5cdFx0XHRcdC8vIFx0cmV0dXJuIHRoaXMudG9kb19saXN0LmZpbHRlcih0b2RvID0+ICF0b2RvWydjb21wbGV0ZWQnXSlcblx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRcblx0XHRcdFx0Ly8g5YWI6K6h566X5b2T5YmN54K55Ye755qE5pivIOW3sue7j+WujOaIkOi/mOaYr+acquWujOaIkCznhLblkI7lho3moLnmja50b2Rv55qEY29tcGxldGVk5bGe5oCnXG5cdFx0XHRcdGxldCBjb21wbGV0ZWQgPSB0aGlzLmN1cnJlbnRfZmlsdGVyID09IEZJTklTSEVEID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy50b2RvX2xpc3QuZmlsdGVyKHRvZG8gPT4gdG9kb1snY29tcGxldGVkJ10gPT0gY29tcGxldGVkKTtcblx0XHRcdH0sXG5cdFx0XHR1bmZpbmlzaGVkX3RvZG9fbGVuZ3RoKCl7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvZG9fbGlzdC5maWx0ZXIodG9kbyA9PiAhdG9kby5jb21wbGV0ZWQpLmxlbmd0aDtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6e1xuXHRcdFx0YWRkX3RvZG8oKXtcblx0XHRcdFx0aWYoIXRoaXMudG9kbyl7XG5cdFx0XHRcdFx0dGhpcy4kbWVzc2FnZS53YXJuaW5nKFwi5re75Yqg55qE5LqL6aG55LiN6IO95Li656m6XCIpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgZmluZF90b2RvID0gdGhpcy50b2RvX2xpc3QuZmluZCgodG9kbykgPT4gdG9kb1sndGV4dCddID09IHRoaXMudG9kbyk7XG5cdFx0XHRcdGlmKGZpbmRfdG9kbyl7XG5cdFx0XHRcdFx0dGhpcy4kbWVzc2FnZS53YXJuaW5nKFwi6K+l5LqL6aG55bey57uP5re75YqgLOivt+WLv+mHjeWkjeaTjeS9nFwiKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IGlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0XHRcdHRoaXMudG9kb19saXN0LnVuc2hpZnQoe1xuXHRcdFx0XHRcdGNvbXBsZXRlZDpmYWxzZSxcblx0XHRcdFx0XHRpZCxcblx0XHRcdFx0XHR0ZXh0OnRoaXMudG9kb1xuXHRcdFx0XHR9KVxuXHRcdFx0XHR0aGlzLnRvZG8gPSBcIlwiO1xuXHRcdFx0fSxcblx0XHRcdHNldF9maWx0ZXIoZmlsdGVyKXtcblx0XHRcdFx0dGhpcy5jdXJyZW50X2ZpbHRlciA9IGZpbHRlcjtcblx0XHRcdH0sXG5cdFx0XHRkZWxldGVfdG9kbyhpZCl7XG5cdFx0XHRcdHRoaXMuJGNvbmZpcm0oe1xuXHRcdFx0XHRcdHRpdGxlOlwi5Yig6Zmk5LqL6aG5XCIsXG5cdFx0XHRcdFx0Y29udGVudDpoID0+IDxkaXYgc3R5bGU9XCJjb2xvcjojZjgxZDIyO1wiPuehruWumuWIoOmZpOatpOadoeiusOW9leWQlzwvZGl2Pixcblx0XHRcdFx0XHRva1RleHQ6XCLnoa7lrppcIixcblx0XHRcdFx0XHRjYW5jZWxUZXh0Olwi5oiR5YaN5oOz5oOzXCIsXG5cdFx0XHRcdFx0b2tUeXBlOlwiZGFuZ2VyXCIsXG5cdFx0XHRcdFx0b25PazooKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnRvZG9fbGlzdC5zcGxpY2UoIHRoaXMudG9kb19saXN0LmZpbmRJbmRleCh0b2RvID0+IHRvZG9bJ2lkJ10gPT0gaWQpLDEpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Y2xlYXIoKXtcblx0XHRcdFx0aWYoIXRoaXMudG9kb19saXN0Lmxlbmd0aCl7XG5cdFx0XHRcdFx0dGhpcy4kbWVzc2FnZS5lcnJvcihcIuW9k+WJjeayoeacieWPr+WIoOmZpOeahOS6i+mhueiusOW9lVwiKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy4kY29uZmlybSh7XG5cdFx0XHRcdFx0dGl0bGU6XCLmuIXnqbrkuovpoblcIixcblx0XHRcdFx0XHRjb250ZW50OmggPT4gPGRpdiBzdHlsZT1cImNvbG9yOiNmODFkMjI7XCI+56Gu5a6a5riF56m65omA5pyJ5LqL6aG56K6w5b2V5ZCXPzwvZGl2Pixcblx0XHRcdFx0XHRvblRleHQ6XCLnoa7lrppcIixcblx0XHRcdFx0XHRjYW5jZWxUZXh0Olwi5oiR5YaN5oOz5oOzXCIsXG5cdFx0XHRcdFx0b2tUeXBlOlwiZGFuZ2VyXCIsXG5cdFx0XHRcdFx0b25PazooKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnRvZG9fbGlzdCA9IFtdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cdC5hbnQtbW9kYWwtY29uZmlybS10aXRsZXtcblx0XHRjb2xvcjpyZ2JhKDAsMCwwLC42NSk7XG5cdH1cblx0LnRvZG8tcGFnZXtcblx0XHQudGl0bGV7XG5cdFx0XHRwYWRkaW5nLXRvcDoyMHB4O1xuXHRcdFx0Zm9udC1zdHlsZTppdGFsaWM7XG5cdFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0XHRcdGNvbG9yOiNjNDFkN2Y7XG5cdFx0XHRmb250LXNpemU6MzZweDtcblx0XHRcdGxpbmUtaGVpZ2h0OjU0cHg7XG5cdFx0fVxuXHRcdC50b2RvLXdyYXBwZXJ7XG5cdFx0XHRtYXJnaW46MTVweCBhdXRvIDA7XG5cdFx0XHRwYWRkaW5nOjI0cHggMTVweDtcblx0XHRcdHdpZHRoOjY4MHB4O1xuXHRcdFx0Zm9udC1zaXplOjE2cHg7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XG5cdFx0XHRib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IHJnYmEoMCwwLDAsLjAxKTtcblx0XHRcdGJvcmRlci1yYWRpdXM6NnB4O1xuXHRcdH1cblx0XHQuaW5wdXQtd3JhcHBlcntcblx0XHRcdHdpZHRoOjEwMCU7XG5cdFx0XHRkaXNwbGF5OmZsZXg7XG5cdFx0XHQudG9kby1pbnB1dHtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czowO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuY29uZmlybS1idXR0b257XG5cdFx0XHRib3JkZXItcmFkaXVzOjA7XG5cdFx0fVxuXHRcdC5hbnQtZW1wdHl7XG5cdFx0XHRwYWRkaW5nLXRvcDoyMHB4O1xuXHRcdFx0Y29sb3I6cmdiYSgwLDAsMCwuNSk7XG5cdFx0fVxuXHR9XG48L3N0eWxlPlxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckA1LjAuMUBjc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJANS4wLjFAY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZmlsdGVyLXdyYXBwZXJbZGF0YS12LTBhM2U3NzQ2XSB7XFxuICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xcbn1cXG4uZmlsdGVyLXdyYXBwZXIgLnVuZmluaXNoZWQtbGVuZ3RoW2RhdGEtdi0wYTNlNzc0Nl0ge1xcbiAgICBjb2xvcjogI2Y4MWQyMjtcXG59XFxuLmZpbHRlci13cmFwcGVyIC5maWx0ZXItY29udGFpbmVyW2RhdGEtdi0wYTNlNzc0Nl0ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxuICAgIGZsZXg6IDE7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5maWx0ZXItd3JhcHBlciAuY2xlYXItdGV4dFtkYXRhLXYtMGEzZTc3NDZdIHtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZpbHRlci13cmFwcGVyIC5jbGVhci10ZXh0W2RhdGEtdi0wYTNlNzc0Nl06aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjZjgxZDIyO1xcbn1cXG4uZmlsdGVyLXdyYXBwZXIgLmZpbHRlci10ZXh0W2RhdGEtdi0wYTNlNzc0Nl0ge1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIGNvbG9yOiAjMzE0NjU5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5maWx0ZXItd3JhcHBlciAuZmlsdGVyLXRleHRbZGF0YS12LTBhM2U3NzQ2XTpob3ZlciB7XFxuICAgICAgY29sb3I6ICMxODkwZmY7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5maWx0ZXItd3JhcHBlciAuZmlsdGVyLXRleHQuYWN0aXZlW2RhdGEtdi0wYTNlNzc0Nl0ge1xcbiAgICAgIGNvbG9yOiAjMTg5MGZmO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9maWx0ZXItdGFiL2luZGV4LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUEyREE7RUFDQyxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLDhCQUE2QjtFQUM3QixlQUFjO0VBQ2QsZ0NBQStCO0FBQUE7QUFQaEM7SUFTRSxjQUFhO0FBQUE7QUFUZjtJQVlFLGtCQUFpQjtJQUNqQixPQUFNO0lBQ04seUJBQWdCO09BQWhCLHNCQUFnQjtRQUFoQixxQkFBZ0I7WUFBaEIsaUJBQWdCO0FBQUE7QUFkbEI7SUFpQkUsMEJBQXFCO0lBQ3JCLGVBQWM7QUFBQTtBQWxCaEI7TUFvQkcsY0FBYTtBQUFBO0FBcEJoQjtJQXdCRSxlQUFjO0lBQ2QsY0FBYTtJQUNiLGVBQWM7SUFDZCx5QkFBZ0I7T0FBaEIsc0JBQWdCO1FBQWhCLHFCQUFnQjtZQUFoQixpQkFBZ0I7QUFBQTtBQTNCbEI7TUE2QkcsY0FBYTtNQUNiLDBCQUF5QjtBQUFBO0FBOUI1QjtNQWlDRyxjQUFhO0FBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLmZpbHRlci13cmFwcGVye1xcblxcdHBhZGRpbmctdG9wOjhweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTo1cHg7XFxuXFx0ZGlzcGxheTpmbGV4O1xcblxcdGxpbmUtaGVpZ2h0OjQwcHg7XFxuXFx0anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuXFx0Zm9udC1zaXplOjE0cHg7XFxuXFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2YxZjFmMTtcXG5cXHQudW5maW5pc2hlZC1sZW5ndGh7XFxuXFx0XFx0Y29sb3I6I2Y4MWQyMjtcXG5cXHR9XFxuXFx0LmZpbHRlci1jb250YWluZXJ7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OjI0cHg7XFxuXFx0XFx0ZmxleDoxO1xcblxcdFxcdHVzZXItc2VsZWN0Om5vbmU7XFxuXFx0fVxcblxcdC5jbGVhci10ZXh0e1xcblxcdFxcdGNvbG9yOnJnYmEoMCwwLDAsLjQ1KTtcXG5cXHRcXHRjdXJzb3I6cG9pbnRlcjtcXG5cXHRcXHQmOmhvdmVye1xcblxcdFxcdFxcdGNvbG9yOiNmODFkMjI7XFxuXFx0XFx0fVxcblxcdH1cXG5cXHQuZmlsdGVyLXRleHR7XFxuXFx0XFx0cGFkZGluZzowIDEwcHg7XFxuXFx0XFx0Y29sb3I6IzMxNDY1OTtcXG5cXHRcXHRjdXJzb3I6cG9pbnRlcjtcXG5cXHRcXHR1c2VyLXNlbGVjdDpub25lO1xcblxcdFxcdCY6aG92ZXJ7XFxuXFx0XFx0XFx0Y29sb3I6IzE4OTBmZjtcXG5cXHRcXHRcXHR0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xcblxcdFxcdH1cXG5cXHRcXHQmLmFjdGl2ZXtcXG5cXHRcXHRcXHRjb2xvcjojMTg5MGZmO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDUuMC4xQGNzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckA1LjAuMUBjc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50b2RvLWl0ZW1bZGF0YS12LTExMjY1NTMwXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA1NnB4O1xcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XFxufVxcbi50b2RvLWl0ZW06aG92ZXIgLmRlbGV0ZS10ZXh0W2RhdGEtdi0xMTI2NTUzMF0ge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4udG9kby1pdGVtIC50b2RvLXRleHRbZGF0YS12LTExMjY1NTMwXSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLnRvZG8taXRlbSAudG9kby10ZXh0LmNvbXBsZXRlZFtkYXRhLXYtMTEyNjU1MzBdIHtcXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4udG9kby1pdGVtIC5kZWxldGUtdGV4dFtkYXRhLXYtMTEyNjU1MzBdIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4udG9kby1pdGVtIC5kZWxldGUtdGV4dFtkYXRhLXYtMTEyNjU1MzBdOmhvdmVyIHtcXG4gICAgICBjb2xvcjogI2ZmNGQ0ZjtcXG59XFxuLnRvZG8taXRlbSAuZGVsZXRlLXRleHQgLmNsb3NlLWljb25bZGF0YS12LTExMjY1NTMwXSB7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy90b2RvLWxpc3QvaW5kZXgudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXdDQTtFQUNDLGFBQVk7RUFDWixZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZ0NBQStCO0FBQUE7QUFOaEM7SUFTRyxVQUFTO0FBQUE7QUFUWjtJQWFFLE9BQU07SUFDTixrQkFBaUI7SUFDakIsbUJBQWtCO0lBQ2xCLHlCQUFnQjtPQUFoQixzQkFBZ0I7UUFBaEIscUJBQWdCO1lBQWhCLGlCQUFnQjtBQUFBO0FBaEJsQjtNQWtCRyx5QkFBb0I7TUFDcEIsNkJBQTRCO0FBQUE7QUFuQi9CO0lBdUJFLGVBQWM7SUFDZCwwQkFBcUI7SUFDckIsZUFBYztJQUNkLHlCQUFnQjtPQUFoQixzQkFBZ0I7UUFBaEIscUJBQWdCO1lBQWhCLGlCQUFnQjtJQUNoQixVQUFTO0FBQUE7QUEzQlg7TUE2QkcsY0FBYTtBQUFBO0FBN0JoQjtNQWdDRyxlQUFjO0FBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLnRvZG8taXRlbXtcXG5cXHRkaXNwbGF5OmZsZXg7XFxuXFx0aGVpZ2h0OjU2cHg7XFxuXFx0bGluZS1oZWlnaHQ6NTZweDtcXG5cXHRhbGlnbi1pdGVtczpjZW50ZXI7XFxuXFx0cGFkZGluZzowIDEwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2U4ZThlODtcXG5cXHQmOmhvdmVye1xcblxcdFxcdC5kZWxldGUtdGV4dHtcXG5cXHRcXHRcXHRvcGFjaXR5OjE7XFxuXFx0XFx0fVxcblxcdH1cXG5cXHQudG9kby10ZXh0e1xcblxcdFxcdGZsZXg6MTtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6MTBweDtcXG5cXHRcXHRhbGlnbi1pdGVtczpjZW50ZXI7XFxuXFx0XFx0dXNlci1zZWxlY3Q6bm9uZTtcXG5cXHRcXHQmLmNvbXBsZXRlZHtcXG5cXHRcXHRcXHRjb2xvcjpyZ2JhKDAsMCwwLC4zKTtcXG5cXHRcXHRcXHR0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoO1xcblxcdFxcdH1cXG5cXHR9XFxuXFx0LmRlbGV0ZS10ZXh0e1xcblxcdFxcdGN1cnNvcjpwb2ludGVyO1xcblxcdFxcdGNvbG9yOnJnYmEoMCwwLDAsLjQ1KTtcXG5cXHRcXHRmb250LXNpemU6MTNweDtcXG5cXHRcXHR1c2VyLXNlbGVjdDpub25lO1xcblxcdFxcdG9wYWNpdHk6MDtcXG5cXHRcXHQmOmhvdmVye1xcblxcdFxcdFxcdGNvbG9yOiNmZjRkNGY7XFxuXFx0XFx0fVxcblxcdFxcdC5jbG9zZS1pY29ue1xcblxcdFxcdFxcdGZvbnQtc2l6ZToxNnB4O1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDUuMC4xQGNzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckA1LjAuMUBjc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5hbnQtbW9kYWwtY29uZmlybS10aXRsZVtkYXRhLXYtMmFlZTQyYWNdIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbn1cXG4udG9kby1wYWdlIC50aXRsZVtkYXRhLXYtMmFlZTQyYWNdIHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNjNDFkN2Y7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBsaW5lLWhlaWdodDogNTRweDtcXG59XFxuLnRvZG8tcGFnZSAudG9kby13cmFwcGVyW2RhdGEtdi0yYWVlNDJhY10ge1xcbiAgbWFyZ2luOiAxNXB4IGF1dG8gMDtcXG4gIHBhZGRpbmc6IDI0cHggMTVweDtcXG4gIHdpZHRoOiA2ODBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wMSk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi50b2RvLXBhZ2UgLmlucHV0LXdyYXBwZXJbZGF0YS12LTJhZWU0MmFjXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50b2RvLXBhZ2UgLmlucHV0LXdyYXBwZXIgLnRvZG8taW5wdXRbZGF0YS12LTJhZWU0MmFjXSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcbi50b2RvLXBhZ2UgLmNvbmZpcm0tYnV0dG9uW2RhdGEtdi0yYWVlNDJhY10ge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuLnRvZG8tcGFnZSAuYW50LWVtcHR5W2RhdGEtdi0yYWVlNDJhY10ge1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3MvdG9kby9pbmRleC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBMkhBO0VBQ0MsMEJBQXFCO0FBQUE7QUFFdEI7RUFFRSxpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixjQUFhO0VBQ2IsZUFBYztFQUNkLGlCQUFnQjtBQUFBO0FBUGxCO0VBVUUsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsZUFBYztFQUNkLHlCQUF3QjtFQUN4Qiw2Q0FBeUM7RUFDekMsa0JBQWlCO0FBQUE7QUFoQm5CO0VBbUJFLFdBQVU7RUFDVixhQUFZO0FBQUE7QUFwQmQ7SUFzQkcsZ0JBQWU7QUFBQTtBQXRCbEI7RUEwQkUsZ0JBQWU7QUFBQTtBQTFCakI7RUE2QkUsaUJBQWdCO0VBQ2hCLHlCQUFvQjtBQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi5hbnQtbW9kYWwtY29uZmlybS10aXRsZXtcXG5cXHRjb2xvcjpyZ2JhKDAsMCwwLC42NSk7XFxufVxcbi50b2RvLXBhZ2V7XFxuXFx0LnRpdGxle1xcblxcdFxcdHBhZGRpbmctdG9wOjIwcHg7XFxuXFx0XFx0Zm9udC1zdHlsZTppdGFsaWM7XFxuXFx0XFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxuXFx0XFx0Y29sb3I6I2M0MWQ3ZjtcXG5cXHRcXHRmb250LXNpemU6MzZweDtcXG5cXHRcXHRsaW5lLWhlaWdodDo1NHB4O1xcblxcdH1cXG5cXHQudG9kby13cmFwcGVye1xcblxcdFxcdG1hcmdpbjoxNXB4IGF1dG8gMDtcXG5cXHRcXHRwYWRkaW5nOjI0cHggMTVweDtcXG5cXHRcXHR3aWR0aDo2ODBweDtcXG5cXHRcXHRmb250LXNpemU6MTZweDtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XFxuXFx0XFx0Ym94LXNoYWRvdzogMTBweCAxMHB4IDVweCByZ2JhKDAsMCwwLC4wMSk7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czo2cHg7XFxuXFx0fVxcblxcdC5pbnB1dC13cmFwcGVye1xcblxcdFxcdHdpZHRoOjEwMCU7XFxuXFx0XFx0ZGlzcGxheTpmbGV4O1xcblxcdFxcdC50b2RvLWlucHV0e1xcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6MDtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdC5jb25maXJtLWJ1dHRvbntcXG5cXHRcXHRib3JkZXItcmFkaXVzOjA7XFxuXFx0fVxcblxcdC5hbnQtZW1wdHl7XFxuXFx0XFx0cGFkZGluZy10b3A6MjBweDtcXG5cXHRcXHRjb2xvcjpyZ2JhKDAsMCwwLC41KTtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYTNlNzc0NiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYTNlNzc0NiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS45LjZAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwYTNlNzc0NlwiLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTExMjY1NTMwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTExMjY1NTMwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjkuNkB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjExMjY1NTMwXCIsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmFlZTQyYWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmFlZTQyYWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuOS42QHZ1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmFlZTQyYWNcIixcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDguMi4yQGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjkuNkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDguMi4yQGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjkuNkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA4LjIuMkBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS45LjZAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA4LjIuMkBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS45LjZAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJAOC4yLjJAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuOS42QHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJAOC4yLjJAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuOS42QHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJmaWx0ZXItd3JhcHBlclwifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwidW5maW5pc2hlZC1sZW5ndGhcIn0sW192bS5fdihfdm0uX3MoX3ZtLnVuZmluaXNoZWRfdG9kb19sZW5ndGgpK1wiIGl0ZW1zIGxlZnRcIildKSxfdm0uX3YoXCIgXCIpLF9jKCdzZWN0aW9uJyx7c3RhdGljQ2xhc3M6XCJmaWx0ZXItY29udGFpbmVyXCJ9LF92bS5fbCgoX3ZtLnRhYnMpLGZ1bmN0aW9uKHRhYixpbmRleCl7cmV0dXJuIF9jKCdzcGFuJyx7a2V5Oid0YWItJytpbmRleCxzdGF0aWNDbGFzczpcImZpbHRlci10ZXh0XCIsY2xhc3M6e2FjdGl2ZTpfdm0uY3VycmVudF9maWx0ZXIgPT0gdGFiWyd2YWx1ZSddID8gdHJ1ZSA6IGZhbHNlfSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO3JldHVybiBfdm0uc2V0X2ZpbHRlcih0YWJbJ3ZhbHVlJ10pfX19LFtfdm0uX3YoX3ZtLl9zKHRhYlsnbmFtZSddKSldKX0pLDApLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY2xlYXItdGV4dFwiLG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7cmV0dXJuIF92bS5jbGVhcigkZXZlbnQpfX19LFtfdm0uX3YoXCLmuIXnqbpcIildKV0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygndWwnLHtzdGF0aWNDbGFzczpcInRvZG8tbGlzdFwifSxfdm0uX2woKF92bS5saXN0KSxmdW5jdGlvbih0b2RvLGluZGV4KXtyZXR1cm4gX2MoJ2xpJyx7a2V5Oid0b2RvLScraW5kZXgsc3RhdGljQ2xhc3M6XCJ0b2RvLWl0ZW1cIn0sW19jKCdhLWNoZWNrYm94Jyx7YXR0cnM6e1wiaWRcIjondG9kby0nK2luZGV4fSxtb2RlbDp7dmFsdWU6KHRvZG9bXCJjb21wbGV0ZWRcIl0pLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldCh0b2RvLCBcImNvbXBsZXRlZFwiLCAkJHYpfSxleHByZXNzaW9uOlwidG9kb1tcXFwiY29tcGxldGVkXFxcIl1cIn19KSxfdm0uX3YoXCIgXCIpLF9jKCdsYWJlbCcse3N0YXRpY0NsYXNzOlwidG9kby10ZXh0XCIsY2xhc3M6eydjb21wbGV0ZWQnOiB0b2RvLmNvbXBsZXRlZCA/IHRydWUgOiBmYWxzZX0sYXR0cnM6e1wiZm9yXCI6J3RvZG8tJytpbmRleH19LFtfdm0uX3YoX3ZtLl9zKHRvZG9bJ3RleHQnXSkpXSksX3ZtLl92KFwiIFwiKSxfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwiZGVsZXRlLXRleHRcIixvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO3JldHVybiBfdm0uZGVsZXRlX3RvZG8odG9kb1snaWQnXSl9fX0sW19jKCdhLWljb24nLHtzdGF0aWNDbGFzczpcImNsb3NlLWljb25cIixhdHRyczp7XCJ0eXBlXCI6XCJjbG9zZVwifX0pXSwxKV0sMSl9KSwwKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwidG9kby1wYWdlXCJ9LFtfYygnaDEnLHtzdGF0aWNDbGFzczpcInRpdGxlXCJ9LFtfdm0uX3YoXCJKdXN0IHRvIGRvXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJ0b2RvLXdyYXBwZXJcIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImlucHV0LXdyYXBwZXJcIn0sW19jKCdhLWlucHV0Jyx7c3RhdGljQ2xhc3M6XCJ0b2RvLWlucHV0XCIsYXR0cnM6e1wicGxhY2Vob2xkZXJcIjpcIldoYXQgbmV4dCB0byBkb1wiLFwiYXV0b0ZvY3VzXCI6dHJ1ZX0sb246e1wia2V5dXBcIjpmdW5jdGlvbigkZXZlbnQpe2lmKCEkZXZlbnQudHlwZS5pbmRleE9mKCdrZXknKSYmX3ZtLl9rKCRldmVudC5rZXlDb2RlLFwiZW50ZXJcIiwxMywkZXZlbnQua2V5LFwiRW50ZXJcIikpeyByZXR1cm4gbnVsbDsgfXJldHVybiBfdm0uYWRkX3RvZG8oJGV2ZW50KX19LG1vZGVsOnt2YWx1ZTooX3ZtLnRvZG8pLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0udG9kbz0odHlwZW9mICQkdiA9PT0gJ3N0cmluZyc/ICQkdi50cmltKCk6ICQkdil9LGV4cHJlc3Npb246XCJ0b2RvXCJ9fSksX3ZtLl92KFwiIFwiKSxfYygnYS1idXR0b24nLHtzdGF0aWNDbGFzczpcImNvbmZpcm0tYnV0dG9uXCIsYXR0cnM6e1widHlwZVwiOlwicHJpbWFyeVwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO3JldHVybiBfdm0uYWRkX3RvZG8oJGV2ZW50KX19fSxbX3ZtLl92KFwi56Gu5a6aXCIpXSldLDEpLF92bS5fdihcIiBcIiksX2MoJ2ZpbHRlci10YWInLHthdHRyczp7XCJjdXJyZW50X2ZpbHRlclwiOl92bS5jdXJyZW50X2ZpbHRlcixcInVuZmluaXNoZWRfdG9kb19sZW5ndGhcIjpfdm0udW5maW5pc2hlZF90b2RvX2xlbmd0aH0sb246e1wic2V0X2ZpbHRlclwiOl92bS5zZXRfZmlsdGVyLFwiY2xlYXJcIjpfdm0uY2xlYXJ9fSksX3ZtLl92KFwiIFwiKSwoX3ZtLmZpbHRlcl90b2RvX2xpc3QubGVuZ3RoKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJ0b2RvLWxpc3Qtd3JhcHBlclwifSxbX2MoJ3RvZG8tbGlzdCcse2F0dHJzOntcImxpc3RcIjpfdm0uZmlsdGVyX3RvZG9fbGlzdH0sb246e1wiZGVsZXRlXCI6X3ZtLmRlbGV0ZV90b2RvfX0pXSwxKTpfYygnYS1lbXB0eScse2F0dHJzOntcImRlc2NyaXB0aW9uXCI6XCLmmoLml6DmlbDmja5cIn19KV0sMSldKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==