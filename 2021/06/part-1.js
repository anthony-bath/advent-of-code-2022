import { read, write } from '../../utility.js';

const [YEAR, DAY, PART] = [2021, 6, 1];

const fish = read(YEAR, DAY, { splitBy: ',' }).map((n) => Number(n));

const DAYS = 80;

for (let day = 0; day < DAYS; day++) {
  let fishCount = fish.length;

  for (let i = 0; i < fishCount; i++) {
    fish[i]--;

    if (fish[i] === -1) {
      fish[i] = 6;
      fish.push(8);
    }
  }
}

write(YEAR, DAY, PART, fish.length);
