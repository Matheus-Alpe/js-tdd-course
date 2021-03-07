const sum = (v1, v2) => v1 + v2;

const sub = (v1, v2) => v1 - v2;

const mult = (v1, v2) => v1 * v2;

const div = (v1, v2) => ((v2 === 0) ? 'Não é possível divisão por zero' : v1 / v2);

export {
  sum,
  sub,
  mult,
  div,
};
