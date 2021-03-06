'use strict';

function make_pow(n) {
	return function(x) {
		return Math.pow(x, n);
	}
}

// 创建两个新函数:
var pow2 = make_pow(2);
var pow3 = make_pow(3);

console.log(pow2(5)); // 25
console.log(pow3(5)); // 343