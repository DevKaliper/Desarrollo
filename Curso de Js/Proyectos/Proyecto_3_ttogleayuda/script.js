const btntoggle =document.querySelector(".togglebtn");
const container = document.querySelector(".container");

btntoggle.onclick= function(){
    container.classList.toggle("active")
}
