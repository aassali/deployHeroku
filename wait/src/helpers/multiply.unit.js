/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const multiply = require('./multiply');

describe('helpers > multiply', () => {
  it('should return a number', () => {
    expect(multiply(1, 3)).to.be.a('number');
  });
  it('should return the right number', () => {
    expect(multiply(3, 3)).to.equal(9);
    expect(multiply(2, 3)).to.equal(6);
    expect(multiply(1, 3)).to.equal(3);
  });
});
