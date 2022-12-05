const splitString = require('./splitString');

describe('splitString', () => {
  it('returns two characters', () => {
    expect(splitString('ab')).toBe('ab');
  })
})