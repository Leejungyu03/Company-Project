import Vue from 'vue';
import { createApp } from "vue";
import App from './App.vue';
import css from './market.css'

new Vue({
    el: '#app',
    render(h) {
         return h(App) 
    }
});

console.log('CSS', css);