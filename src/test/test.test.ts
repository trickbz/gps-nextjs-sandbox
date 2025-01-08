/// <reference types="jest" />
import {sum} from './utilsToTest';

describe('sum', () => {
  test('calculate sum of positive integers', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
