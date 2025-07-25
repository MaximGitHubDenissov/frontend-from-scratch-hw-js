/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function includesElement(array, element) {
    for(let i = 0; i < array.length; i++){
        if (array[i] === element){
            return true
        }
    }
    return false
}


function findCommonElements(arr1, arr2) {
    const result = []
    for(let i = 0; i < arr1.length; i++){
        if(includesElement(arr2, arr1[i])){
            result.push(arr1[i])
        }
    }
    return result
}

