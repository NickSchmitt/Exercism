const isCaps = (m) => /[A-Z]/.test(m) && !/[a-z]/.test(m)
const saysNothing = (m) => m.trim() === ''
const isQuestion = (m) => m.trim().endsWith('?')

export const hey = (m) => {
    return saysNothing(m)
        ? 'Fine. Be that way!'
        : isCaps(m) && isQuestion(m)
        ? "Calm down, I know what I'm doing!"
        : isCaps(m)
        ? 'Whoa, chill out!'
        : isQuestion(m)
        ? 'Sure.'
        : 'Whatever.'
}
