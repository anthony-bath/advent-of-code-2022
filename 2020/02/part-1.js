import { read, write } from '../../utility.js';

const [YEAR, DAY, PART] = [2020, 2, 1];

const validCount = read(YEAR, DAY).reduce((count, line) => {
  const [range, req, password] = line.split(' ');
  const [min, max] = range.split('-').map((n) => parseInt(n));
  const expr = new RegExp(req.replace(':', ''), 'g');
  const matches = password.match(expr) || [];

  if (matches.length >= min && matches.length <= max) return count + 1;
  return count;
}, 0);

write(YEAR, DAY, PART, validCount);
