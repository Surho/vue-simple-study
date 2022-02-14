import {test1} from './test-1';
import {test2} from './test-2';
import Vue from 'vue';
import testComponent from './components/testComponent';
import './assets/main.scss'

const test = 'testing';
test1();
test2();

let instance = new Vue({
    el: '#app',
    render: h => h(testComponent),
});

console.log(instance);

