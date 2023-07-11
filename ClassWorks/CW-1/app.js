// регулярные выражения - regular expression
const arr = [1, 2, 3]
const string = prompt('Введите ваше имя.')
const regExp = /a/ig
//                  i - неважно большая или маленькая буква
//                  g - ищет во всем тексте
console.log(arr);
console.log(string.match(regExp));
//      index - расположение найденной буквы
//      