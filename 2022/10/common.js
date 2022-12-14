import { read } from '../../utility.js';

const [YEAR, DAY] = [2022, 10];

const instructions = read(YEAR, DAY);
const cycles = [];

for (const instruction of instructions) {
  if (instruction === 'noop') {
    cycles.push(0);
  } else {
    const [_, change] = instruction.split(' ');
    cycles.push(0, parseInt(change, 10));
  }
}

export { cycles };
export const LINE_LENGTH = 40;
export const LIT_PIXEL = '#';
export const DARK_PIXEL = '.';
export const TRACKED_CYCLE_INDICES = [19, 59, 99, 139, 179, 219];
