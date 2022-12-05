const splitString = require('./splitString');

describe('splitString', () => {
  it('returns two characters', () => {
    expect(splitString('ab')).toBe('ab');
  })

  it('returns two other characters', () => {
    expect(splitString('cd')).toBe('cd');
  })
})