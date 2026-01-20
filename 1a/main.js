import divide, { add as addition, subtract as subtraction} from './math.js';
import {SECRET_SAUCE, PI} from './math.js';
//import {PI as piValue} from './constants.js';

console.log(addition (5,3));
console.log(subtraction (10, 4));
console.log(divide(20, 4));

console.log(PI);
console.log(SECRET_SAUCE);

import * as MathUtils from './math.js';
//import * as Config from './constants.js';

console.log(MathUtils.add(2, 3));
console.log(MathUtils.multiply(4,5));
//console.log(Config.GREETING);

console.log("Hej");

import { rectangleArea, rectanglePerimeter } from './rectangles.js';

console.log("Area of 5x10 rectangle:", rectangleArea(5, 10));
console.log("Perimeter of 5x10 recatngle:", rectanglePerimeter(5,10));



