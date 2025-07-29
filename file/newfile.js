console.log("Hello world!")
function changePara() {
    let para = document.querySelectorAll(".para");
    for (let i = 0; i < para.length; i++) {
        para[i].style.backgroundColor="red";
    };
}

function inputValue() {
    let text = document.getElementById("text");
    let res = document.getElementById("response")
    res.innerHTML = text.value
}