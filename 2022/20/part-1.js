import { read, write } from '../../utility.js';
import { moveNodeForward, moveNodeBackward, getValues, Node } from './common.js';

const [YEAR, DAY, PART] = [2022, 20, 1];

const input = read(YEAR, DAY);
const nodes = input.map((value) => new Node(Number(value)));

const LENGTH = nodes.length;

let head;

for (let i = 0; i < LENGTH; i++) {
  nodes[i].next = i < LENGTH - 1 ? nodes[i + 1] : nodes[0];
  nodes[i].previous = i > 0 ? nodes[i - 1] : nodes[LENGTH - 1];

  if (nodes[i].value === 0) {
    head = nodes[i];
  }
}

for (let i = 0; i < LENGTH; i++) {
  const current = nodes[i];

  if (current.value > 0) {
    moveNodeForward(current, LENGTH);
  } else if (current.value < 0) {
    moveNodeBackward(current, LENGTH);
  }
}

write(
  YEAR,
  DAY,
  PART,
  getValues([1000, 2000, 3000], head).reduce((sum, value) => sum + value, 0)
);
