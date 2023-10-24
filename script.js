// Defining Variables
let action = document.getElementById("action");
let reaction = document.getElementById("reaction");
let rate = undefined;
let $1 = document.getElementById("1");
let $2 = document.getElementById("2");
let $3 = document.getElementById("3");
let $4 = document.getElementById("4");
let $5 = document.getElementById("5");
let ratepara = document.getElementById("ratepara");

// Logic Starts
function rate1(){
    window.rate = 1
    $1.classList.add("active");
    $2.classList.remove("active");
    $3.classList.remove("active");
    $4.classList.remove("active");
    $5.classList.remove("active");
    ratepara.innerHTML = `You selected ${rate} out of 5`;
}
function rate2(){
    rate = 2
    $1.classList.remove("active");
    $2.classList.add("active");
    $3.classList.remove("active");
    $4.classList.remove("active");
    $5.classList.remove("active");
    ratepara.innerHTML = `You selected ${rate} out of 5`;
}
function rate3(){
    rate = 3
    $1.classList.remove("active");
    $2.classList.remove("active");
    $3.classList.add("active");
    $4.classList.remove("active");
    $5.classList.remove("active");
    ratepara.innerHTML = `You selected ${rate} out of 5`;
}
function rate4(){
    rate = 4
    $1.classList.remove("active");
    $2.classList.remove("active");
    $3.classList.remove("active");
    $4.classList.add("active");
    $5.classList.remove("active");
    ratepara.innerHTML = `You selected ${rate} out of 5`;
}
function rate5(){
    rate = 5
    $1.classList.remove("active");
    $2.classList.remove("active");
    $3.classList.remove("active");
    $4.classList.remove("active");
    $5.classList.add("active");
    ratepara.innerHTML = `You selected ${rate} out of 5`;
}

function submit(){
    action.classList.add("hide")
    reaction.classList.remove("hide")
    ratepara.innerHTML = `<p>You selected ${rate} out of 5</p>`;
}
