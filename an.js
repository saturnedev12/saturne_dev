/*const box = document.getElementById("box");
let i = 0
startAnime = ()=>{
 
}
requestAnimationFrame(startAnime);*/
const box = document.getElementById("zone");
const seconde = document.getElementById("seconde");
const minute = document.getElementById("minute");
//button
const button = document.getElementById("starter");
const buttonReset = document.getElementById("reset");

let interupteur=1;

/*alert(box.innerText.length);*/
let centiSeconde=0;
let secondes=0;
let minutes=0;

setInterval(() => {
    //le chrao se lance quand l'interupteur est egale a 0
    if (interupteur==0) {
        
   
    centiSeconde++;
    /*System d'ajout */
    //centiseconde
    if (centiSeconde<=9) {
        box.innerText=`0${centiSeconde}`;
    }
    else{
       box.innerText=centiSeconde;
    }
    //seconde
    if (secondes<=9) {
        seconde.innerText=`0${secondes}`;
    }
    else{
        seconde.innerText=secondes;
    }
     //minute
    if (minutes<=9) {
        minute.innerText=`0${minutes}`;
    }
    else{
        minute.innerText=minutes;
    }
    
  /*controller des temps */
  //miliseconde
   if(centiSeconde==100-1){
        centiSeconde=0;
        secondes = secondes+1;
   }
//centiseconde
if (secondes==60) {
    secondes=0;
    minutes = minutes+1;
    
}

}}, 10);

/*action sur button */
const Start = () =>{
    
    //alert("OUI");
    if (interupteur==0) {
        button.innerHTML='<i class="fas fa-play"></i>';
        interupteur++;
    }
    else{
       button.innerHTML='<i class="fas fa-pause"></i>';
       interupteur--;
    }
} 
button.addEventListener('click',Start,false);

//renitialiser
const Reset = () =>{
    window.location.reload();
}
buttonReset.addEventListener('click',Reset,false);