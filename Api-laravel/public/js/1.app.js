webpackJsonp([1],{

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n    /* harmony default export */ exports[\"default\"] = {\n\n     \n        mounted: function mounted() {\n$.ajaxSetup({\n  headers : {\n    'Authorization' : 'Basic faskd52352rwfsdfs',\n    'Token' : '3252352-test-test-test-sgs332fs3f'\n  }\n});\nvar version=\"v1\";\n $.getJSON(\"/api\"+\"/\"+version+\"/onboarding\", function(response) {\n                    //this.$set(this,'rooms', response.data )\n                    console.log(JSON.stringify(response));\n \n               \nvar highchartsOptions = Highcharts.chart('container_chart', {\n\n    title: {\n        text: 'Onboarding process'\n    },\n\n    subtitle: {\n        text: 'Source: Temper'\n    },\n\n    yAxis: {\n        title: {\n            text: 'Number of Users'\n        }\n    },\n    xAxis: {\n        title: {\n            text: 'Onboarding Percentage'\n        }\n    },\n    legend: {\n        layout: 'vertical',\n        align: 'right',\n        verticalAlign: 'middle'\n    },\n\n    plotOptions: {\n        series: {\n            pointStart: 0\n        }\n    },\n\n    series: response\n\n});\n });\n    this.chart = new Highcharts.chart(highchartsOptions)\n           \n        },\n\n        data : function() {\n            return {\n                \n            }\n\n        },\n\n        methods : {\n\n            redraw: function redraw(){\n    \tthis.chart.series[0].setData(this.agePotValue,true);\n    }\n        }\n\n       \n        };\n    \n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NoYXJ0LnZ1ZT9mNDkyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcblxuICAgICBcbiAgICAgICAgbW91bnRlZCgpIHtcbiQuYWpheFNldHVwKHtcbiAgaGVhZGVycyA6IHtcbiAgICAnQXV0aG9yaXphdGlvbicgOiAnQmFzaWMgZmFza2Q1MjM1MnJ3ZnNkZnMnLFxuICAgICdUb2tlbicgOiAnMzI1MjM1Mi10ZXN0LXRlc3QtdGVzdC1zZ3MzMzJmczNmJ1xuICB9XG59KTtcbmNvbnN0IHZlcnNpb249XCJ2MVwiO1xuICQuZ2V0SlNPTihcIi9hcGlcIitcIi9cIit2ZXJzaW9uK1wiL29uYm9hcmRpbmdcIiwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLiRzZXQodGhpcywncm9vbXMnLCByZXNwb25zZS5kYXRhIClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcbiBcbiAgICAgICAgICAgICAgIFxudmFyIGhpZ2hjaGFydHNPcHRpb25zID0gSGlnaGNoYXJ0cy5jaGFydCgnY29udGFpbmVyX2NoYXJ0Jywge1xuXG4gICAgdGl0bGU6IHtcbiAgICAgICAgdGV4dDogJ09uYm9hcmRpbmcgcHJvY2VzcydcbiAgICB9LFxuXG4gICAgc3VidGl0bGU6IHtcbiAgICAgICAgdGV4dDogJ1NvdXJjZTogVGVtcGVyJ1xuICAgIH0sXG5cbiAgICB5QXhpczoge1xuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogJ051bWJlciBvZiBVc2VycydcbiAgICAgICAgfVxuICAgIH0sXG4gICAgeEF4aXM6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6ICdPbmJvYXJkaW5nIFBlcmNlbnRhZ2UnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGxlZ2VuZDoge1xuICAgICAgICBsYXlvdXQ6ICd2ZXJ0aWNhbCcsXG4gICAgICAgIGFsaWduOiAncmlnaHQnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICAgIH0sXG5cbiAgICBwbG90T3B0aW9uczoge1xuICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgIHBvaW50U3RhcnQ6IDBcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXJpZXM6IHJlc3BvbnNlXG5cbn0pO1xuIH0pO1xuICAgIHRoaXMuY2hhcnQgPSBuZXcgSGlnaGNoYXJ0cy5jaGFydChoaWdoY2hhcnRzT3B0aW9ucylcbiAgICAgICAgICAgXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHMgOiB7XG5cbiAgICAgICAgICAgIHJlZHJhdygpe1xuICAgIFx0dGhpcy5jaGFydC5zZXJpZXNbMF0uc2V0RGF0YSh0aGlzLmFnZVBvdFZhbHVlLHRydWUpO1xuICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgXG4gICAgICAgIH1cbiAgICBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2hhcnQudnVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _vm._m(0)\n},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    attrs: {\n      \"id\": \"container\"\n    }\n  }, [_c('div', {\n    attrs: {\n      \"id\": \"container_chart\"\n    }\n  })])\n}]}\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-51fbd3e9\", module.exports)\n  }\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2hhcnQudnVlPzI1YzEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF92bS5fbSgwKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJjb250YWluZXJcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJjb250YWluZXJfY2hhcnRcIlxuICAgIH1cbiAgfSldKVxufV19XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01MWZiZDNlOVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNTFmYmQzZTkhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DaGFydC52dWVcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

eval("var __vue_exports__, __vue_options__\nvar __vue_styles__ = {}\n\n/* script */\n__vue_exports__ = __webpack_require__(15)\n\n/* template */\nvar __vue_template__ = __webpack_require__(18)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === \"object\" ||\n  typeof __vue_exports__.default === \"function\"\n) {\nif (Object.keys(__vue_exports__).some(function (key) { return key !== \"default\" && key !== \"__esModule\" })) {console.error(\"named exports are not supported in *.vue files.\")}\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === \"function\") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.__file = \"/var/www/html/vue-laravel/resources/assets/js/components/Chart.vue\"\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-51fbd3e9\", __vue_options__)\n  } else {\n    hotAPI.reload(\"data-v-51fbd3e9\", __vue_options__)\n  }\n})()}\nif (__vue_options__.functional) {console.error(\"[vue-loader] Chart.vue: functional components are not supported and should be defined in plain js files using render functions.\")}\n\nmodule.exports = __vue_exports__\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DaGFydC52dWU/ZDA3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYnVibGUtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9DaGFydC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTUxZmJkM2U5IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NoYXJ0LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvdmFyL3d3dy9odG1sL3Z1ZS1sYXJhdmVsL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DaGFydC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTUxZmJkM2U5XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTUxZmJkM2U5XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQ2hhcnQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2hhcnQudnVlXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

});