import {test1} from './test-1';
import {test2} from './test-2';
import Vue from 'vue';
import testComponent from './testComponent.vue';

require('./styles/index.scss');

const test = 'testing';
test1();
test2();

let app = document.getElementById('app');

let instance = new Vue({
    el: app,
    render: h => h(testComponent),
});

