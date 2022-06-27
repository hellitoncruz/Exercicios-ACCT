let display = document.querySelector(".display")

function inserir(num){ 
    display.innerHTML += num;
}

function clean(){
    display.innerHTML = ""
}

function calculate(){
    try{
    display.innerHTML = eval(display.innerHTML)
    } catch {
        display.innerHTML = "Inválido!"
    }
}

function backSpace(){
    if(display.innerHTML){
        display.innerHTML = display.innerHTML.slice(0, -1)
    }
}

