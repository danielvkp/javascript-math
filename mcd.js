const numbers = [12, 24, 6];

const mcd = function (a, b) {
	if (!isPerfectDivisor.apply(this, arguments)) {
		return 0;
	}
	if (equalsToZero(getModule.apply(this, arguments))) {
		return b;
	}
	return mcd(b, getModule.apply(this, arguments));
}

isPerfectDivisor = (a, b) => {	return a % 2 == 0 && b % 2 == 0}

getModule = (a, b) => {	return a - Math.floor(a / b) * b }

equalsToZero = (a) => {	return a == 0 }

console.log('mcd : ' + numbers.reduce(mcd));