

let promptText = prompt('how old are you?');

if (promptText === 0) {
  alert('число ровно нулю');
} else if (promptText === null) {
  alert('вы нажали на отмену?')
} else if (promptText === '') {
  alert('вы ничего не ввели.')
} else if (promptText > 0) {
  alert('положительное число')
} else if (promptText < 0) {
  alert('отрицательное число')
} else {
  alert('введите только числа')
}
