import {test1} from './assets/js/test-1';
import {test2} from './assets/js/test-2';
import Vue from 'vue';
import testComponent from './components/testComponent.vue';
import './assets/scss/main.scss'

const test = 'testing';
test1();
test2();

let instance = new Vue({
    el: '#app',
    render: h => h(testComponent),
});

