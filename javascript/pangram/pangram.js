export const isPangram = s =>
    [...s].reduce((set, letter) => {
        if (/[a-zA-Z]/.test(letter)) set.add(letter.toLowerCase())
        return set
    }, new Set()).size === 26
