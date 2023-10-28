const pianoKeys = document.querySelectorAll('.piano-keys-wrapper .key')

let audio = new Audio()

const playTune = (key) =>{
  audio.src = `../../src/audio/${key}.wav`
  audio.play()
}


pianoKeys.forEach((key) => {
  let keyText = key.querySelector('span').innerHTML
  key.addEventListener('click', () => playTune(keyText))
})
