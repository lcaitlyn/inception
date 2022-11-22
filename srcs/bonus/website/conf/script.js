let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/'];

const out = document.querySelector('.zero');

function clearAll ()
{
	a = '';
	b = '';
	sign = '';
	finish = false;
	out.textContent = '0';
}

document.querySelector('.C').onclick = clearAll;	

document.querySelector('.buttons').onclick = (event) => {
	if (!event.target.classList.contains('btn')) return;
	if (event.target.classList.contains('C')) return;
	out.textContent = '';
	const key = event.target.textContent;
	if (digit.includes(key))
	{
		if (b === '' && sign === '')
		{
			a += key;
			console.log(a, b, sign);
			out.textContent = a;
		}
		else if (a !== '' && b !== '' && finish)
		{
			b = key;
			finish = false;
			out.textContent = b;
		}
		else
		{
			b += key;
			out.textContent = b;
		}
		console.table(a, b, sign);;
		return;
	}
	if (action.includes(key))
	{
		sign = key;
		if (a)
			out.textContent = a;
		if (b)
			out.textContent = b;
		console.table(a, b, sign);
		return;
	}
	if (key === '=')
	{
		if (b === '') b = a;
		switch (sign)
		{
			case "x":
				a = a * b;
				console.log(a)
				console.log('hi')
				break;
			case "+":
				a = (+a) + (+b);
				break;
			case "-":
				a = a - b;
				break;
			case "/":
				if (b === '0')
				{
					out.textContent = 'Error';
					a = '';
					b = '';
					sign = '';
					return;
				}
				a = a / b;
				break;
		}
	}
	finish = true;
	out.textContent = a;
	console.table(a, b, sign);
}
