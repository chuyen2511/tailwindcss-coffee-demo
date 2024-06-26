const topMenu = document.getElementById('ct-top-menu')
const topMenuIcon = document.getElementById('ct-toggle-menu-icon')

document.addEventListener('click',(e)=>{
  if(topMenuIcon.contains(e.target)){
    topMenu.classList.toggle('ct-topmenu')
    topMenu.classList.toggle('hidden')
  }else{
  }
})
