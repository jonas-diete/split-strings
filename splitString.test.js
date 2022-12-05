const splitString = require('./splitString');

describe('splitString', () => {
  it('returns two characters', () => {
    expect(splitString('ab')).toBe('ab');
  })

  it('returns two other characters', () => {
    expect(splitString('cd')).toBe('cd');
  })

  it('returns two other characters', () => {
    expect(splitString('ef')).toBe('ef');
  })

  it('returns one character and _', () => {
    expect(splitString('a')).toBe('a_');
  })

  it('returns one character and _', () => {
    expect(splitString('b')).toBe('b_');
  })

  it('returns one character and _', () => {
    expect(splitString('c')).toBe('c_');
  })
})