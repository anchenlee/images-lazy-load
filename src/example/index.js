import Vue from 'vue'
import index from './index.vue'
import ImageLazyLoad from '../main'

Vue.config.productionTip = false
Vue.use(ImageLazyLoad)
new Vue({
    render: h => h(index),
}).$mount('#app')
