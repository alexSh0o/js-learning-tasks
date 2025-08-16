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
