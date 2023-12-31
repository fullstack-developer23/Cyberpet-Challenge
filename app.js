// class Animal extends Cyberpet {
//     constructor() {
//         super(); // Call the constructor of the basic class (hunger, happiness, thirst), and add the following Wookie specific attribute
//         this.chuckleLevel = 150;
//     }

//     // Custom method for the Wookie cyberpet
//     food() {
//         if (this.hungerLevel < 300) {
//             this.hungerLevel += 30;
//             this.thirst += 20;
//             this.updateUI();
//         }
//     }

//     // Wookie specific overrides of basic attributes and additional ones
//     decreaseStats() {
//         this.hunger += 30;
//         this.thirst += 30;
//         this.happiness -= 40;
//         this.chuckleLevel -= 26;
//     }

//     // Override the updateUI method to display the chuckle level
//     updateUI() {
//         super.updateUI(); // Call the basic class updateUI method, and add the following Wookie specific update
//         document.querySelector(".chuckleLevel").style.width = `${this.chuckleLevel}px`
//     }
// }

// -------------------------------------------------------------------------------------------------------------------------
const startGame = (selectedPet) => {
    animalImg.style.display = "none";
    chosen.style.display = "block";
    selectedImg.src=`./images/${selectedPet}.gif`;
    pet.style.display = "none";
    petName.style.display = "none";
// This will happen every second.
    
    setInterval(reduceProgress, 1000);
    
    function reduceProgress(){
        hunger.value -= 2;
        thirst.value -= 2;
        energy.value -= 2;
        happiness.value -= 2;
        // A condition to check when game is over 
        if (happiness.value == 0 || hunger.value == 0 || thirst.value == 0 || energy.value == 0){
            chosen.style.display = 'none';
            gameover.style.display = 'block';
            gameover.textContent = "Game is Over";
        }

    }
    }


let selectedPet = "" 

// getting images by Id

let tiger = document.getElementById("tiger.gif");
let dog = document.getElementById("dog.gif");
let cat = document.getElementById("cat.gif"); 
let animalImg = document.getElementById("animalImg");
let chosen = document.getElementById("chosen");
let selectedImg = document.getElementById("selectedImg");
let healthBar = document.getElementById("healthBar");
let buttons = document.getElementById("buttons");
let progress = document.getElementById("progress");
let play = document.getElementById("play");
let hunger = document.getElementById("hunger");
let thirst = document.getElementById("thirst");
let energy = document.getElementById("energy");
let happiness = document.getElementById("happiness");
let begin = document.getElementById("begin");
let gameover = document.getElementById("gameOver");
gameover.style.display = 'none';
// event listeners for the three animal buttons.




tiger.addEventListener("click", () => {
    selectedPet = "tiger";
    startGame(selectedPet)
})


dog.addEventListener("click", () => {
    selectedPet = "dog";
    startGame(selectedPet)
})

cat.addEventListener("click", () => {
    selectedPet = "cat";
    startGame(selectedPet)
})


feed.addEventListener("click", () => {
    hunger.value += 5;
})

drink.addEventListener("click", () => {
    thirst.value += 5;
    hunger.value += 2;
})

nap.addEventListener("click", () => {
    energy.value += 10;
    happiness.value +- 2;
    hunger.value -=3;
    thirst.value -=3;
})

play.addEventListener("click", () => {
    happiness.value += 3;
    energy.value -= 2;
    hunger.value -=3;
    thirst.value -= 2;
})


// // Expand (53 lines) CollapseCyberPetJavaScriptlet image = document.getElementById("image");
// let petMessage = document.getElementById("petMessage");

// class Animal {
//     constructor(name){
//         this.name = name;
//         this.health = 100;
//         this.hunger = 100;
//         this.thirst = 100;
//     };
//     drink() {
//         this.health += 10;
//         this.thirst += 10;
//     };
//     eat() {
//         this.health += 10;
//         this.thirst -= 5;
//         this.hunger += 10;
//     };
// };

// tigerChar.addEventListener('click', () => {
//     total = 0;
//     score.textContent = total;
//     info.textContent = "";
//     image.src="";
//     playAgain.style.display="none";
//     roll.style.display = "block";
// })
// dogChar.addEventListener('click', () => {
//     total = 0;
//     score.textContent = total;
//     info.textContent = "";
//     image.src="";
//     playAgain.style.display="none";
//     roll.style.display = "block";
// })
// catChar.addEventListener('click', () => {
//     total = 0;
//     score.textContent = total;
//     info.textContent = "";
//     image.src="";
//     playAgain.style.display="none";
//     roll.style.display = "block";
// })

// class Tiger extends Animal {
//     constructor(name){
//         super (name);
//         this.satisfied = 100;
//     };
//     playBall() {
//         this.hunger -= 10;
//         this.thirst -= 5;
//         this.happy += 10;
//     };
// }
// class Dog extends Animal {
//     constructor(name){
//         super (name);
//         this.happy = 100;
//     };
//     playBall() {
//         this.hunger -= 10;
//         this.thirst -= 5;
//         this.happy += 10;
//     };
// }
// class Cat extends Animal {
//     constructor(name){
//         super (name);
//         this.satisfied = 100;
//     };

//     playBall() {
//         this.hunger -= 10;
//         this.thirst -= 5;
//         this.happy += 10;
//     };
// }