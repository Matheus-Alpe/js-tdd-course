module.exports = {
  sum(v1, v2) {
    return v1 + v2;
  },

  sub(v1, v2) {
    return v1 - v2;
  },

  mult(v1, v2) {
    return v1 * v2;
  },

  div(v1, v2) {
    return (v2 === 0) ? 'Não é possível divisão por zero' : v1 / v2;
  },
};
