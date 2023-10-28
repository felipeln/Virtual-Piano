const pianoKeys = document.querySelectorAll('.piano-keys-wrapper .key')

const volumeControl = document.querySelector('#volume-control')

const showKeyText = document.querySelector('#show-key-text')

let keyMap = []
let audio = new Audio()

const playTune = (key) =>{
  audio.src = `../../src/audio/${key}.wav`
  audio.play()
  
  pianoKeys.forEach((keyElement) => {
    if(key === keyElement.querySelector('span').innerHTML){
      keyElement.classList.add('active')
      setTimeout(() => {
        keyElement.classList.remove('active')
      },150)
    }
  })

}


pianoKeys.forEach((key) => {
  let keyText = key.querySelector('span').innerHTML

  key.addEventListener('click', () => playTune(keyText))
  keyMap.push(keyText)
})

document.addEventListener("keydown", (e) =>{
  if(keyMap.includes(e.key)){
    playTune(e.key)
  }
})

volumeControl.addEventListener('input', (e) => {
  console.log(e.target.value);
  audio.volume = e.target.value
})

showKeyText.addEventListener("click", () => {
  pianoKeys.forEach((key) => {
    let keyText = key.querySelector('span')
    keyText.classList.toggle('hide')
  })
})