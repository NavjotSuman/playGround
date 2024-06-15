let box_text = document.getElementsByClassName("box-text");
// let player = document.getElementById("player");
let player_span = document.getElementById("first-player-span");
let giff = gif.firstElementChild;
let isGameOver = false
let turn = 'X';
let times = 0;



Array.from(box_text).forEach((value) => {
    // console.log(value)
    value.addEventListener('click', () => {
        // console.log(value.innerHTML)


        if ((value.innerHTML == '') && (isGameOver == false)) {
            value.innerHTML = turn

            // for check whose thurn is
            turn = turn === 'X' ? 'O' : 'X';
            player_span.innerText = `turn of "${turn}"`
            times += 1
        }
        checkWin();
        if ((times == 9) && (isGameOver == false)) {
            player_span.innerHTML = "MATCH TIE!!"
            player_span.style.color = 'rgb(187, 187, 5)'
        }
    })
})




// main game logic
let checkWin = () => {
    let winCondition = [
        // transform: translate(17vw, 18vw);
        // transform: translate(7.48vw, 18.4vw) rotate(90deg);
        // transform: translate(17.48vw, 18.4vw) rotate(45deg);
        [0, 1, 2, 17, 13.35, 0],
        [3, 4, 5, 17, 23.35, 0],
        [6, 7, 8, 17, 33.35, 0],
        [0, 3, 6, 7.48, 23.4, 90],
        [1, 4, 7, 17.48, 23.4, 90],
        [2, 5, 8, 27.48, 23.4, 90],
        [0, 4, 8, 17.48, 23.4, 45],
        [2, 4, 6, 17.48, 23.4, -45],
    ]

    winCondition.forEach((value) => {
        if (((box_text[value[0]].innerHTML) === (box_text[value[1]].innerHTML)) && ((box_text[value[1]].innerHTML) !== ("")) && ((box_text[value[0]].innerHTML) === (box_text[value[2]].innerHTML))) {
            if (isGameOver !== true) {
                player_span.innerHTML = "'" + box_text[value[1]].innerHTML + "' WON!!"
                player_span.style.color = 'green'
                giff.style.width = '200px'
                // transform: translate(18vw, 8.3vw);
                // let a = toString();
                // let b = (box_text[value[4]])
                // transform: translate();
                line.style.transform = `translate(${value[3]}vw,${value[4]}vw) rotate(${value[5]}deg)`;
                line.style.width = '23rem'
                // width
            }
            isGameOver = true
        }
        // if (((isGameOver !== true) && ((box_text[value[0]].innerHTML) !== (""))) && ((isGameOver !== true) && ((box_text[value[1]].innerHTML) !== (""))) && ((isGameOver !== true) && ((box_text[value[2]].innerHTML) !== ("")))){
        //     player_span.innerHTML = "MATCH TIE!!"
        // }
        // if (((box_text[value[0]].innerHTML) !== (box_text[value[1]].innerHTML)) && ((box_text[value[1]].innerHTML) !== ("")) && ((box_text[value[0]].innerHTML) !== (box_text[value[2]].innerHTML)) && (isGameOver !== true)) {
        //     player_span.innerHTML = "MATCH TIE!!"
        // }
    })
}


// reset button

let reset = document.getElementById("resetButton");

reset.addEventListener('click', () => {

    // reseting the value of turn
    if (turn !== "X") {
        turn = 'X';
        player_span.innerText = turn
    }

    // making blank all the inout boxes of the game
    Array.from(box_text).forEach((value) => {
        if (value.innerHTML !== '') {
            value.innerHTML = ''
        }
    })

    // for start the new game 
    isGameOver = false

    // reseting the turn to default x with color
    player_span.innerHTML = ` Turn of "X"`
    player_span.style.color = 'black'

    // for clicking times
    times = 0

    // reseting the gif
    giff.style.width = '0px'


    // reseting the line to default
    line.style.transform = `translate(0vw,0vw)`;
    line.style.width = '0'

    console.clear()


})
