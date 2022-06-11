import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue.filter('formatProducto', function(producto) {
//   return producto.split('_').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join(' ');
// })

// Vue.filter('formatPrecio', function(precio) {
//   return `$ ${precio.toFixed(2)}`;
// })

// Vue.filter('formatFecha', function(fecha){
//   return fecha.toLocaleDateString('ES-es');
// })

createApp(App).use(store).use(store).use(router).mount('#app')
