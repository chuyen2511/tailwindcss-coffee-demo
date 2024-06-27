//lấy các phần tử id
const menu = document.getElementById('ct-top-menu')
const btn = document.getElementById('ct-toggle-menu-icon')
//lắng nghe sự kiện click của document
document.addEventListener('click',(e)=>{
  //if kiểm tra phần tử cem người dùng có click vào btn hay ko 
  if(btn.contains(e.target)){
    //nếu ấn vào thì thêm class vào
    //sử dụng toggle làm cho ấn vào có thì loại bỏ chưa có thì thêm vào 
    menu.classList.toggle('ct-topMenu-Header')
    menu.classList.toggle('hidden')
  }else{//trường hợp người ta ấn ra ngoài btn
    //if kiểm tra xem menu có class ct-topMenu-Header hay ko 
    if(menu.classList.contains('ct-topMenu-Header')){
    //nếu có thì thì làm mất đi menu
    menu.classList.remove('ct-topMenu-Header')
    menu.classList.add('hidden')
    }
  }
})

//btn.contains(e.target:chỉ điển người ta người ta đã ấn vào)kiểm tra xem người dùng có ấn vào trong phần tử ko 
