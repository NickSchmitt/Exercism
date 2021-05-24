const isCaps = (m) => /[A-Z]/.test(m) && !/[a-z]/.test(m)
const saysNothing = (m) => !(/([^\s])/.test(m) && m.length > 0)
const isQuestion = (m) => /\?$/.test(m.trimEnd())

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
