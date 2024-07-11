const inputField = document.getElementById("field");
const checkBtn = document.getElementById("submit");
const statusSpan = document.getElementsByClassName("status")[0]

var oauisdfio = '{"iv":"rOOMxSmt2GIMS/XhgPagRw==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"Udxt/NPIfks=","ct":"n2f/bjz3y26rufgKb7c4V3XP1e4="}'

var statusIcon = document.getElementById("status");

var input = "";

window.onload = ()=> {
    statusIcon.className = "fa-solid fa-minus fa-beat"
}

checkBtn.onclick = ()=> {
    input = inputField.value;
    inputField.value = "";

    let filteredInput = "";
    for (c of input){
        if (c != " "){
            filteredInput += c.toUpperCase();
        }
    }

    filteredInput = sjcl.encrypt("TH3C1PH3R3DT3XT", filteredInput, {"iv":"rOOMxSmt2GIMS/XhgPagRw==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"Udxt/NPIfks="}).toString()

    if(filteredInput == oauisdfio){
        statusIcon.className = "fa-solid fa-check fa-beat"
        statusSpan.style.backgroundColor = "limeGreen"
    }
    else{
        statusIcon.className = "fa-solid fa-xmark fa-beat"
        statusSpan.style.backgroundColor = "crimson"
    }
}