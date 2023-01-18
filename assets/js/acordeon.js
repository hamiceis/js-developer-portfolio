const acordeonTriggres = document.querySelectorAll('.acordeon .trigger')

acordeonTriggres.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
   const acordeon = trigger.parentElement
   const isOpen = acordeon.className.includes('open')
   
   if(isOpen){
      acordeon.classList.remove('open')
   } else {
    acordeon.classList.add('open')
   }
  })
})