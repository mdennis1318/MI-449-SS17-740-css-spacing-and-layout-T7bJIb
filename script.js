var counter = window.localStorage.getItem('counter') || 0

counter = parseInt(counter) + 1
window.localStorage.setItem('counter', counter)

var counterElement = document.getElementById('counter')

counterElement.textContent = counter
