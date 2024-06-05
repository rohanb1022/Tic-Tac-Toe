let button = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let a1 = document.querySelector("#box11");
let a2 = document.querySelector("#box12");
let a3 = document.querySelector("#box13");
let b1 = document.querySelector("#box21");
let b2 = document.querySelector("#box22");
let b3 = document.querySelector("#box23");
let c1 = document.querySelector("#box31");
let c2 = document.querySelector("#box32");
let c3 = document.querySelector("#box33");
let turner = document.querySelector(".turner");

let input = "";
button.forEach(element => {
    reset.addEventListener("click" , () => {
        element.innerText = input;
        count = 0;
        turner.innerText = "TURN FOR 'X'";
    })
})

let input11 = a1.innerText;
let input12 = a2.innerText;
let input13 = a3.innerText;
let input21 = b1.innerText;
let input22 = b2.innerText;
let input23 = b3.innerText;
let input31 = c1.innerText;
let input32 = c2.innerText;
let input33 = c3.innerText;

function winner() {
    console.log("checking the winner");
    let wins = [
        [a1 , a2 , a3],
        [b1 , b2 , b3],
        [c1 , c2 , c3],
        [a1 , b1 , c1],
        [a2 , b2 , c2],
        [a3 , b3 , c3],
        [a1 , b2 , c3],
        [a3 , b2 , c1]
    ];

    for(let win of wins){
        let [box1 , box2 , box3] = win;
        if(
            box1.innerText != "" &&
            box1.innerText == box2.innerText &&
            box1.innerText == box3.innerText &&
            box2.innerText == box3.innerText
        ){
            turner.innerText = `${box1.innerText} is the Winner`;
            break;
        }
    }
}



let count = 0;
button.forEach(element => {
    element.addEventListener("click" , () => {
        count++;
        if(count%2==0){
            element.innerText = "O";
            turner.innerText = "TURN FOR 'X'";
        }
        else{
            element.innerText = "X";
            turner.innerText = "TURN FOR 'O'"
        }
        winner();
    })
});