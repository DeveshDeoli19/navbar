const toggleBtn = document.getElementById('btn')
const links = document.querySelector('.links')
const crossBtn = document.querySelector('.btn-cross')

toggleBtn.addEventListener('click',()=>{
    links.classList.add('show-links')
    crossBtn.classList.add('btn-cross-show')
    toggleBtn.classList.add('btn-bar-hide')
})

crossBtn.addEventListener('click',()=>{
    links.classList.remove('show-links')
    crossBtn.classList.remove('btn-cross-show')
    toggleBtn.classList.remove('btn-bar-hide')
})