

let pass1El = document.getElementById("pass1")

let pass2El = document.getElementById("pass2")
let popupEl = document.getElementById("popup")

let generatedPass1 = []

function clicked(){
    popupEl.style.visibility = "hidden"
    pass2El.textContent=""
    pass1El.innerText = ""
    pass1El.innerText += generatePassword();
    pass2El.textContent += generatePassword();
}



function myFunction() {
    
 
    popupEl.style.visibility = "visible"
    setTimeout(function(){ popupEl.style.visibility = popupEl.style.visibility.replace("visible", "hidden"); }, 800);
    navigator.clipboard.writeText(pass1El.textContent);
    

}


function myFunction2(){
   
    popupEl.style.visibility ="visible"
    setTimeout(function(){ popupEl.style.visibility = popupEl.style.visibility.replace("visible", "hidden"); }, 800);

   

    navigator.clipboard.writeText(pass2El.textContent);
    
}










