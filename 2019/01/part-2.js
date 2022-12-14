import { read, write } from '../../utility.js';

const [YEAR, DAY, PART] = [2019, 1, 2];

const masses = read(YEAR, DAY).map((m) => Number(m));
let result = 0;

while (masses.length) {
  const current = masses.shift();
  const fuel = Math.floor(current / 3) - 2;

  result += fuel;

  if (fuel > 6) {
    masses.push(fuel);
  }
}

write(YEAR, DAY, PART, result);
