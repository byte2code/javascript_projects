const popup = document.getElementById("popup");
const btn_popup_close = document.querySelector(".card-footer button");
const btn_submit = document.querySelector(".content button");


btn_submit.addEventListener('click', ()=>{
    popup.classList.add("open-popup");
    console.log("hri");
})

btn_popup_close.onclick = (() =>{
    console.log("hir");
    popup.classList.remove("open-popup");
})