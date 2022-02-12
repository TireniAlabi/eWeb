const btn=document.querySelector('#btn');
const msg=document.querySelector('.msg')
btn.addEventListener('click', (e) =>{ //check for diiff events, try mouseover, mouseout
    e.preventDefault()
    msg.classList.add('error')
    msg.innerHTML=("Item has been added to cart!")
    setTimeout(()=>msg.remove(), 1000);
})

const btn2=document.querySelector('#btn2');
const msg2=document.querySelector('.msg2')
btn2.addEventListener('click', (e) =>{ //check for diiff events, try mouseover, mouseout
        e.preventDefault()
        msg2.classList.add('error')
        msg2.innerHTML=("Item has been added to wishlist!")
        setTimeout(()=>msg2.remove(), 1000);
});


