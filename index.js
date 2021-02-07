

let but=document.querySelector(".avatar-button");
let image=document.querySelector(".avatar-img");

but.addEventListener('click',()=>{
    let name=document.getElementById('avatar-name').value;
    alert(name);


    image.setAttribute('src',`https://joeschmoe.io/api/v1/${name}`)
    


})