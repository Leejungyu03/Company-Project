import Vue from 'vue';
import { createApp } from 'vue'
import app from './app.vue';
import market from "./market.css";

createApp(app).mount('#app');
console.log('CSS', market);