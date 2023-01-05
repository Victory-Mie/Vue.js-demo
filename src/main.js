import Vue from 'vue' //引入vue
import App from './App.vue' //引入app组件，他是所有组件的父组件
//关闭vue生产提示
Vue.config.productionTip = false

//创建vue实例对象---vm
new Vue({
    render: h => h(App),
}).$mount('#app')