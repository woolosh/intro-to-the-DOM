

// Closures
function makeFunc() {
    let message = "Closures are cool!"
    function displayMessage(){
        console.log(message);
    }
    return displayMessage
}

const newFunc = makeFunc()
newFunc()

//Closures Emulating Private methods
// const counter = function(){
//     let privateCounter = 0
//     function changeVal(val){
//         privateCounter += val
//     }
//     return {
//         increment: function(){
//             changeVal(1)
//         },
//         decrement: function(){
//             changeVal(-1)
//         },
//         value: function () {
//             return privateCounter;
//         }
//     }
// }()

// console.log(counter.value());
// console.log(counter.increment());
// console.log(counter.value());


