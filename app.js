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
let dog = document.getElementById("")
const startGame = (selectedPet) => {

}

// Expand (53 lines) CollapseCyberPetJavaScriptlet image = document.getElementById("image");
let petMessage = document.getElementById("petMessage");

class Animal {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.hunger = 100;
        this.thirst = 100;
    };
    drink() {
        this.health += 10;
        this.thirst += 10;
    };
    eat() {
        this.health += 10;
        this.thirst -= 5;
        this.hunger += 10;
    };
};

tigerChar.addEventListener('click', () => {
    total = 0;
    score.textContent = total;
    info.textContent = "";
    image.src="";
    playAgain.style.display="none";
    roll.style.display = "block";
})
dogChar.addEventListener('click', () => {
    total = 0;
    score.textContent = total;
    info.textContent = "";
    image.src="";
    playAgain.style.display="none";
    roll.style.display = "block";
})
catChar.addEventListener('click', () => {
    total = 0;
    score.textContent = total;
    info.textContent = "";
    image.src="";
    playAgain.style.display="none";
    roll.style.display = "block";
})

class Tiger extends Animal {
    constructor(name){
        super (name);
        this.satisfied = 100;
    };
    playBall() {
        this.hunger -= 10;
        this.thirst -= 5;
        this.happy += 10;
    };
}
class Dog extends Animal {
    constructor(name){
        super (name);
        this.happy = 100;
    };
    playBall() {
        this.hunger -= 10;
        this.thirst -= 5;
        this.happy += 10;
    };
}
class Cat extends Animal {
    constructor(name){
        super (name);
        this.satisfied = 100;
    };

    playBall() {
        this.hunger -= 10;
        this.thirst -= 5;
        this.happy += 10;
    };
}