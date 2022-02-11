import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GAME_TITLE } from '../constants/strings'
import getUsed from './../App'

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean
) => {
  navigator.clipboard.writeText(
    `${GAME_TITLE} ${solutionIndex} ${lost ? 'X' : guesses.length}/8 ${getUsed() ? 'Hint used ✅' : 'No hint used 😎'
    }\n\n` + generateEmojiGrid(guesses) + `\n\nhttps://www.daltle.games/`

  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟧'
            default:
              return '⬛'
          }
        })
        .join('')
    })
    .join('\n')
}
