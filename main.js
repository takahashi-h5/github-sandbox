// 1~100の数値をループし、3の倍数はFizz、5の倍数はBuzz、3と5の倍数はFizzBuzzと表示する
(function fizzBuzz() {
	const container = (typeof document !== 'undefined') ? document.body : null;
	for (let i = 1; i <= 100; i++) {
		let out = '';
		if (i % 3 === 0) out += 'Fizz';
		if (i % 5 === 0) out += 'Buzz';
		if (out === '') out = String(i);
		if (container) {
			const p = document.createElement('p');
			p.textContent = out;
			container.appendChild(p);
		}
		console.log(out);
	}
})();
