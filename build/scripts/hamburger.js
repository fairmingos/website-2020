const button = document.querySelector('button.hamburger')

button.onclick = () => {
  if (button.className === 'x') {
    button.className = ''
  }
  else {
    button.className = 'x'
  }
}