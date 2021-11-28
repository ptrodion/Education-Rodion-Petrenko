//1
//let arr = [1,33,456,986,122]
//найти суму квадратов всех значений масива (reduce)
// reduce - используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата.
//2
//let arr = [ 'Tani', 'Vasyl', 'George', 'Stepan']
//получить массив вида: [ 'My name is Tani','My name is Vasyl', и тд... ] использовать map
//3
//написать функцию которая будет принимать входным параметром массив
//и переставит в нем елементы так что в начале массива будут только цифры а в конце только строки
//
//let arr =[2, 6, 7, "a", "b", "q"]
// function sortTheArray(someArray){
//     // ваш код
// }
//
// sortTheArray(["b", 6, "a", "q", 7, 2])

// Задание №  1  Начало
let arr = [1,33,456,986,122]
let resultExerciseOne = arr.reduce((originalValue,num) => (num*num)+ originalValue ,0)
console.log(resultExerciseOne)
// Задание №  1 Конец

// Задание № 2  Начало
let arr1 = [ 'Tani', 'Vasyl', 'George', 'Stepan']
let newArr = arr1.map((name) =>' My name is ' + name)
console.log(newArr)
// Задание № 2 Конец

// Задание № 3  Начало
  function sortTheArray(someArray){
      someArray.sort((a,b) => a -b)
  }

sortTheArray(["b", 6, "a", "q", 7, 2])
// Задание № 3  Конец

