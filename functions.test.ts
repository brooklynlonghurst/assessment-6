const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return an array', () => {
        let shuffledArr = shuffleArray('array')
        expect(shuffledArr).toBeInstanceOf(Array)
    })

    test('checks that it returns an array of the same length as the argument sent in', () => {
        let shuffledArr = shuffleArray('array')
        expect(shuffledArr).not.toHaveLength(0)
    })
})