

function binaryToDecimal() {

    var bin = document.querySelector(".input-binar").value    
    
    var decimal = 0
    for(var index=bin.length-1; index >= 0; index--) {
        decimal += parseInt(bin[index]) * Math.pow(2, bin.length - 1 - index)
    }

        
    document.querySelector(".resultado").innerHTML =  decimal;
  
    
}

function verification() {
    tecla = document.querySelector(".input-binar").value 
    console.log(tecla)
    console.log(event.keyCode)
    if (event.keyCode != 96 && event.keyCode != 97 && event.keyCode != 49 && event.keyCode != 48 && event.keyCode != 8) {
        document.querySelector(".resultado").classList.add("erro")
        document.querySelector(".resultado").innerHTML =  "Digite apenas 0 e 1"
    } else {
        document.querySelector(".resultado").classList.remove("erro")
    }

    

}
