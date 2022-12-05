const splitString = require('./splitString');

describe('splitString', () => {
  it('returns two characters', () => {
    expect(splitString('ab')).toEqual(['ab']);
  })

  it('returns two other characters', () => {
    expect(splitString('cd')).toEqual(['cd']);
  })

  it('returns two other characters', () => {
    expect(splitString('ef')).toEqual(['ef']);
  })

  it('returns one character and _', () => {
    expect(splitString('a')).toEqual(['a_']);
  })

  it('returns one character and _', () => {
    expect(splitString('b')).toEqual(['b_']);
  })

  it('returns one character and _', () => {
    expect(splitString('c')).toEqual(['c_']);
  })

  it('returns ab cd', () => {
    expect(splitString('abcd')).toEqual(['ab', 'cd']);
  })

  it('returns two sets of 2 chars', () => {
    expect(splitString('cdef')).toEqual(['cd', 'ef']);
  })

  it('returns two sets of 2 chars', () => {
    expect(splitString('ghij')).toEqual(['gh', 'ij']);
  })

  it('returns multiple sets of 2 chars', () => {
    expect(splitString('abcdef')).toEqual(['ab', 'cd', 'ef']);
  })

  it('returns multiple sets of 2 chars', () => {
    expect(splitString('ghijkl')).toEqual(['gh', 'ij', 'kl']);
  })

  it('returns many sets of 2 chars', () => {
    expect(splitString('ghijklmnop')).toEqual(['gh', 'ij', 'kl', 'mn', 'op']);
  })
})