let firstValue = ''
let secondValue = ''
let operator = ''
let result = ''

let display = document.querySelector('#display')
let subDisplay = document.querySelector('#subDisplay')
const displayOperator = document.querySelector('#displayOperator')

const ce = document.querySelector('#ce')
const mod = document.querySelector('#mod')
const divide = document.querySelector('#divide')
const multiply = document.querySelector('#multiply')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const equal = document.querySelector('#equal')
const comma = document.querySelector('#comma')

const numbers = document.querySelectorAll('.number')

ce.addEventListener('click', () => {
	firstValue = ''
	secondValue = ''
	operator = ''
	display.value = '0'
	subDisplay.value = ''
})

comma.addEventListener('click', () => {
	if (!display.value.includes(',')) {
		if (firstValue === '') {
			firstValue += '0,'
			display.value = firstValue
		} else {
			firstValue += ','
			display.value += ','
		}
	}
})

numbers.forEach(number => {
	number.addEventListener('click', () => {
		if (operator === '') {
			if (firstValue === '') {
				firstValue = number.id
			} else {
				firstValue += number.id
			}
			display.value = firstValue
		} else {
			if (secondValue === '') {
				secondValue = number.id
			} else {
				secondValue += number.id
			}
			display.value = secondValue
		}
	})
})
