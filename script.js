const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', event => {
    const key = event.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
    // Remove 'active' class from all keys
    keys.forEach(k => k.classList.remove('active'))
    
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()

    // Add 'active' class to the pressed key
    key.classList.add('active')
    
    // Remove 'active' class when the note ends
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}
