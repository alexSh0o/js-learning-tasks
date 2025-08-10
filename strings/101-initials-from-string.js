/* Реализуйте функцию, которая по полному имени, состоящему из имени и фамилии, возвращает инициалы:

console.log(abbrevName("Natalie Portman")); // "N.P."
Гарантируется, что полное имя состоит из двух слов, разделенных одним пробелом.

Источник: https://maxcode.dev/
 */

//первая попытка со встроенным методом substring()
function abbrevName(name) {
  const fullName = name.split(' ');
  let firstName = fullName[0].substring(0, 1);
  let lastName = fullName[1].substring(0, 1);

  return `${firstName}.${lastName}.`;
}

console.log(abbrevName('Alexandra Tarik')); // 'A.T.'

//заменила отдельные переменные на обращение к символу при помощи charAt()
function abbrevName(name) {
  const fullName = name.split(' ');

  return `${fullName[0].charAt(0)}.${fullName[1].charAt(0)}.`;
}

console.log(abbrevName('Arthur Dent')); // A.D.

//поняла, что в предыдущем решении утрачена семантика переменных, вспомнила про деструктуризацию массива
function abbrevName(name) {
  const [firstName, lastName] = name.split(' ');

  return `${firstName.charAt(0)}.${lastName.charAt(0)}.`;
}

console.log(abbrevName('Alexa Tarik'));
