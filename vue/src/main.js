import { createApp } from 'vue'
import {createRouter , createWebHistory} from "vue-router";
import './style.css'
import './index.css'
import App from './App.vue'
import Helloworld from '../src/views/HelloWorld.vue'
import Hollywoodbets from '../src/views/Hollywoodbets.vue'
import lyon from '../src/views/lyon.vue'


const routes = [
  { path : '/' , component: Helloworld} , 

  { path : '/holly' , component: Hollywoodbets} , 

  { path : '/lyon' , component: lyon} , 

  { path : '/redcliffe' , component: Helloworld} , 

];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

createApp(App).use(router).mount('#app')

