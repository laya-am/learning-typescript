import { expect, it } from 'vitest';

const coerceAmount = (amount: number | { amount: number }) => {
    // return amount.amount || amount is valid javascrpt and would work but typescript would scream at you 
    // because you can only access something if you KNOW i's there
  if (typeof amount === 'object') {
    return amount.amount;
  }
  return amount;
};

it('Should return the amount when passed an object', () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it('Should return the amount when passed a number', () => {
  expect(coerceAmount(20)).toEqual(20);
});
