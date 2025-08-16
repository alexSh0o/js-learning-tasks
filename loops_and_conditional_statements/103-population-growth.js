/* Население может увеличиваться за счет естественного прироста или за счет иммиграции.
Естественный прирост задается в процентах в год. Например, число 5 означает, что население растет естественный путем на 5% в год. Например, если было 133 человека, то естественным путем через год их станет 139.
Миграция задается в абсолютных числах. Например, число 23 означает, что произойдет изменение на 23 человека в год. Например, если было 133 человека, то за счет миграции через год их станет 156.

Функция yearsToTarget должна определять, за сколько лет будет достигнуто целевое значение населения.
Источник: https://maxcode.dev/
*/

function yearsToTarget(initialPopulation, naturalIncrease, immigration, targetPopulation) {
  let years = 0;
  while (initialPopulation < targetPopulation) {
    initialPopulation = Math.floor(
      initialPopulation + immigration + (initialPopulation * naturalIncrease) / 100,
    );
    years++;
  }
  return years;
}

console.log(yearsToTarget(1000, 2, 50, 1214)); // 4
