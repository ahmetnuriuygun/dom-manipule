

const baslik = document.querySelector("h1");
baslik.style.color="red";
baslik.style.textAlign="center"


const foto = document.querySelector(".resim")

foto.onmouseover=()=>{
    foto.src="./img/aslan1.jpeg"}

foto.onmouseout=()=>{
    foto.src="./img/aslan2.jpeg"}    




const ara= document.querySelector(".btn-outline-warning");
const sound = document.querySelector(".ses")
ara.onclick=()=>{
    foto.src="img/img.gif";
    sound.load();
    sound.volume=0.2
    sound.play()}


const baglat= document.querySelector(".btn-outline-primary")    
baglat.onclick=()=>{
    foto.src="img/telbağla.gif";}


const konus = document.querySelector(".btn-outline-danger");
konus.onclick=()=>{
    sound.pause();
    foto.src="img/telefon.gif";}    