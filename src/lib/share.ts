import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GAME_TITLE } from '../constants/strings'


export const shareStatus = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean
) => {
  navigator.clipboard.writeText(
    `${GAME_TITLE} ${solutionIndex} ${lost ? 'X' : guesses.length}/6${isHardMode ? '\nHint gebruikt 😩' : '\nGeen hint gebruikt 😎'
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
