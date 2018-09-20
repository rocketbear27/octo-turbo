import './index.css'

import numeral from 'numeral';

/* eslint-disable no-console */

const courseValue = numeral(1000).format('$0,0.00');
console.log("The random generated number is " + courseValue + "!");