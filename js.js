const card_size = document.querySelectorAll('.card__size-item')

function active(){
    card_size.forEach(item=>{
        item.classList.remove('active');
    })
    this.classList.add('active')
}
card_size.forEach(item=>{
    item.addEventListener('click',active);
})
const card_color=document.querySelectorAll('.card__color-item')
function activeColor(){
    card_color.forEach(item=>{
        item.classList.remove('card__color--active')
    })
    this.classList.add('card__color--active')
}
card_color.forEach(item=>{
    item.addEventListener('click',activeColor)
})
