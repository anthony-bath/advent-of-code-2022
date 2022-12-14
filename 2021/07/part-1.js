import { read, write } from '../../utility.js';

const [YEAR, DAY, PART] = [2021, 7, 1];

const positions = read(YEAR, DAY, { splitBy: ',' }).map((n) => Number(n));

const maxPos = Math.max(...positions);
let fuelByPosition = Array(maxPos + 1).fill(0);

for (const position of positions) {
  fuelByPosition = fuelByPosition.map((fuel, targetPosition) => {
    return (fuel += Math.abs(position - targetPosition));
  });
}

write(YEAR, DAY, PART, Math.min(...fuelByPosition));
