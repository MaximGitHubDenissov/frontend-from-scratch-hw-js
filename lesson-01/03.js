/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum

let counter = 1
let result = 0

while(counter < 21){
  if(counter%2 === 0){
    result += counter
  }
  counter ++

}

sum = result