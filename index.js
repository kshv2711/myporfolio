function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
const btn=document.getElementById("alert");

btn.addEventListener('click',()=>{
let Name=prompt("enter your name")
prompt("Email from"),
prompt("Mobile"),
alert("Thankyou for mailing "+Name);

})