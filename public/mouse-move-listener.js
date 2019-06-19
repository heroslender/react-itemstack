window.CurrentHoverElement = undefined

document.addEventListener('mousemove', e => {
  if (window.CurrentHoverElement) {
    window.CurrentHoverElement.style.top = (e.pageY - window.scrollY) + 'px'
    window.CurrentHoverElement.style.left = (e.pageX + 15) + 'px'
  }
})