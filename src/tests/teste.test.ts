import { randomUUID } from 'node:crypto'

describe('Suite', () => {
  it('should pass', () => {
    expect(randomUUID()).toEqual(expect.any(String))
  })
})
