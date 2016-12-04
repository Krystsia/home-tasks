import { actions } from '../actions/actions.js';

let a = require('../some.json');

console.log(a);

((d) => {
    actions.init();
})(document);
