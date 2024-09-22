let firstValue = ''
let secondValue = ''
let operator = ''
let result = ''

let display = document.querySelector('#display')
let subDisplay = document.querySelector('#subDisplay')

const displayOperator = document.querySelector('#displayOperator')
const ce = document.querySelector('#ce')
const divide = document.querySelector('#divide')
const multiply = document.querySelector('#multiply')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const equal = document.querySelector('#equal')
const comma = document.querySelector('#comma')
const del = document.querySelector('#del')
const change = document.querySelector('#change')
const numbers = document.querySelectorAll('.number')

ce.addEventListener('click', () => {
	firstValue = ''
	secondValue = ''
	operator = ''
	display.value = '0'
	subDisplay.innerHTML = ''
	displayOperator.classList.add('hide')
})

del.addEventListener('click', () => {
	if (operator === '') {
		if (firstValue.length > 1) {
			firstValue = firstValue.slice(0, -1)
			display.value = firstValue
		} else {
			display.value = '0'
			firstValue = ''
		}
	} else {
		if (secondValue.length > 1) {
			secondValue = secondValue.slice(0, -1)
			display.value = secondValue
		} else {
			display.value = '0'
			secondValue = ''
		}
	}
})

change.addEventListener('click', () => {
	if (operator === '') {
		if (firstValue !== '' && parseFloat(firstValue) !== 0) {
			firstValue = (parseFloat(firstValue) * -1).toString()
		}
		display.value = firstValue || '0'
	} else {
		if (secondValue !== '' && parseFloat(secondValue) !== 0) {
			secondValue = (parseFloat(secondValue) * -1).toString()
		}
		display.value = secondValue || '0'
	}
})

comma.addEventListener('click', () => {
	if (operator === '') {
		if (!firstValue.includes('.')) {
			if (firstValue === '') {
				firstValue = '0.'
			} else {
				firstValue += '.'
			}
			display.value = firstValue
		}
	} else {
		if (!secondValue.includes('.')) {
			if (secondValue === '') {
				secondValue = '0.'
			} else {
				secondValue += '.'
			}
			display.value = secondValue
		}
	}
})

numbers.forEach(number => {
	number.addEventListener('click', () => {
		if (operator === '') {
			if (firstValue.length < 12) {
				if (firstValue === '' && number.id === '0') {
					firstValue = '0'
				} else {
					firstValue += number.id
				}
				display.value = firstValue
			}
		} else {
			if (secondValue.length < 12) {
				if (secondValue === '' && number.id === '0') {
					secondValue = '0'
				} else {
					secondValue += number.id
				}
				display.value = secondValue
			}
		}
	})
})

plus.addEventListener('click', () => {
	if (firstValue !== '') {
		operator = 'plus'
		subDisplay.innerHTML = firstValue + ' + '
	}
})

minus.addEventListener('click', () => {
	if (firstValue !== '') {
		operator = 'minus'
		subDisplay.innerHTML = firstValue + ' - '
	}
})

divide.addEventListener('click', () => {
	if (firstValue !== '') {
		operator = 'divide'
		subDisplay.innerHTML = firstValue + ' ÷ '
	}
})

multiply.addEventListener('click', () => {
	if (firstValue !== '') {
		operator = 'multiply'
		subDisplay.innerHTML = firstValue + ' × '
	}
})

equal.addEventListener('click', () => {
	if (firstValue !== '' && secondValue !== '') {
		displayOperator.classList.remove('hide')
		if (operator === 'plus') {
			result = Number(firstValue) + Number(secondValue)
			subDisplay.innerHTML += secondValue
		} else if (operator === 'minus') {
			result = Number(firstValue) - Number(secondValue)
			subDisplay.innerHTML += secondValue
		} else if (operator === 'divide') {
			result = Number(firstValue) / Number(secondValue)
			subDisplay.innerHTML += secondValue
		} else if (operator === 'multiply') {
			result = Number(firstValue) * Number(secondValue)
			subDisplay.innerHTML += secondValue
		}
		display.value = result
		firstValue = result
		secondValue = ''
		operator = ''
	}
})
