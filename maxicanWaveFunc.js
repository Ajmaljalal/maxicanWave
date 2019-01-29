function wave(str) {
    const array = []
    let newString = str

    for (i = 0; i <= str.length; i++) {
        if (str.split('')[i] && str.split('')[i].trim().length) {
            const upperCaseChar = newString.split('')[i].toUpperCase()
            const stringWave = newString.split('')
            stringWave[i] = upperCaseChar
            array.push(stringWave.join(''))
        }
    }
    return array
}