const ORBITALS = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
}

const SECONDS_IN_YEARS = 31_557_600

export const age = (planet, age) => {
    let input = planet.toLowerCase()
    if (!(input in ORBITALS)) {
        if (input === 'pluto') {
            throw new Error('Pluto is not a planet :(')
        } else {
            throw new Error('That is not a planet')
        }
    } else {
        return Number((age / ORBITALS[input] / SECONDS_IN_YEARS).toFixed(2))
    }
}
