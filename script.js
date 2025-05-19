Swal.fire({
  imageUrl: "https://i.pinimg.com/736x/e1/03/78/e103780461532bed5a48f801977c5079.jpg",
  imageHeight: 200,
  title: "Aimee Shaloom Archangel Punuh",
  text: "Puella fortis semper ridet (A strong girl always smiles)",
  footer: '<a href="#">Jangan kangen kita ya sirr wkwk. Konsisten stravanya ya sirr AAHAHAHAHAHAHAH</a>'
});

/*pergantian box sebelum dan sesudah*/
const boxesContainer = document.getElementById('container')
const btn = document.getElementById('trigger')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

/*kalkulasi baris dan kolom berdasarkan putaran kotak*/
function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div')
      box.classList.add('tile')
      box.style.backgroundPosition = `${-j * 130}px ${-i * 130}px`
      boxesContainer.appendChild(box)
    }
  }
}

createBoxes() 