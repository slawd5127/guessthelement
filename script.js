// let phrases = ["hydrogen", "helium", "lithium", "beryllium", "boron", "carbon", "nitrogen", "oxygen",
// "fluorine", "neon", "sodium", "magnesium", "aluminium", "silicon", "phosphorus", "sulfur", "chlorine", "argon"];
class Element {
  constructor(mass, num, group, sym, name) {
    this.atomicMass = mass;
    this.atomicNum = num;
    this.Group = group;
    this.Symbol = sym;
    this.name = name;
  }
}

let hydrogen = new Element("1.00", 1, 1, "H", "Hydrogen");
let helium = new Element("4.00", 2, 18, "He", "Helium");
let lithium = new Element("6.94", 3, 1, "Li", "Lithium");
let beryllium = new Element("9.01", 4, 2, "Be", "Beryllium");
let boron = new Element("10.81", 5, 13, "B", "Boron");
let carbon = new Element("12.01", 6, 14, "C", "Carbon");
let nitrogen = new Element("14.01", 7, 15, "N", "Nitrogen");
let oxygen = new Element("16.00", 8, 16, "O", "Oxygen");
let fluorine = new Element("19.00", 9, 17, "F", "Fluorine");
let neon = new Element("20.18", 10, 18, "Ne", "Neon");
let sodium = new Element("23.00", 11, 1, "Na", "Sodium");
let magnesium = new Element("24.31", 12, 2, "Mg", "Magnesium");
let aluminium = new Element("26.98", 13, 13, "Al", "Aluminium")
let silicon = new Element("28.09", 14, 14, "Si", "Silicon");
let phosphorus = new Element("30.97", 15, 15, "P", "Phosphorus");
let sulphur = new Element("32.07", 16, 16, "S", "Sulphur");
let chlorine = new Element("35.45", 17, 17, "Cl", "Chlorine");
let argon = new Element("39.95", 18, 18, "Ar", "Argon")




let elements = [hydrogen, helium, lithium, beryllium, boron, carbon, nitrogen, oxygen, fluorine, neon, sodium, magnesium, aluminium, silicon, phosphorus, sulphur, chlorine, argon];
let curElement;
let guess, wrongGuesses;
let pauseMilliseconds = 0;

function setup() {
  // Make the drawing canvase as big as the window
  createCanvas(windowWidth, windowHeight);

  // Set the RGB background colour
  background(250, 250, 250);

  // Set the frame rate
  frameRate(1);

  // initiate game
  selectRandomPhrase();
}



function selectRandomPhrase() {
  let index = Math.floor(random(0, elements.length));
  print("index is ", index);
  curElement = elements[index];
  guess = [];
  wrongGuesses = [];
  for (let i = 0; i < curElement.name.length; i++) {
    guess.push(curElement.name[i] == " " ? " " : "_");
    //print(i, guess[i]);
  }

}

function pause(ms) {
  pauseMilliseconds = millis() + ms;
}

const LOST_STATE = 1;
const NORMAL_STATE = 0;
let gameState = NORMAL_STATE;

function draw() {
  if (pauseMilliseconds > millis()) { }
  else {
    if (gameState == LOST_STATE) {
      fill(0, 0, 0);
      textSize(30);
      textAlign(CENTER);
      text(curElement.name, 232, 482);
      fill(245, 15, 30);
      textSize(38);
      text("you lost, try again!", 225, 75);

      // pause before next screen
      pause(1200);
      gameState = NORMAL_STATE;
    }
    else {
      clear();
      fill(0, 0, 0); // black
      textSize(50);
      textAlign(CENTER);
      //text(curPhrase, 100, 60);
      text(guess.join(" "), 225, 150);

      textSize(30);
      fill(255, 0, 0); // red
      text(`${wrongGuesses.length} wrong guesses: ${wrongGuesses.join(" ")}`, 225, 200);

      if (wrongGuesses.length > 1) {
        noFill();
        rect(100, 275, 250, 280);

        if (wrongGuesses.length > 2) {
          fill(0, 0, 0);
          textAlign(CENTER);
          text(curElement.Group, 225, 270);

          if (wrongGuesses.length > 3) {
            fill(0, 0, 0);
            textAlign(CENTER);
            text(curElement.atomicMass, 225, 528);

            if (wrongGuesses.length > 4) {
              fill(0, 0, 0);
              textSize(35)
              text(curElement.atomicNum, 117, 310);

              if (wrongGuesses.length > 5) {
                fill(0, 0, 0);
                textSize(145);
                textAlign(CENTER);
                text(curElement.Symbol, 225, 448);

                if (wrongGuesses.length > 6) {
                  gameState = LOST_STATE;
                  selectRandomPhrase();








                }

              }

            }
          }
        }

      }

    }
  }
}




function keyPressed() {
  if (keyCode == SHIFT) {
    clear()
    selectRandomPhrase();
  }
  // print("key pressed is", key);
  if (key >= 'a' && key <= 'z') {
    print("You guessed", key);

    // Find all instances of key in curElement
    let result = [];
    for (var i = 0; i < curElement.name.length; i++) {
      let currentLetter = curElement.name[i];
      if (currentLetter === key || currentLetter.toLowerCase() === key) {
        result.push(i);
        guess[i] = currentLetter;
      }
    }

    // Check results for matches
    if (result.length > 0) {
      // we found a match
      print("Found matches at indices", result);
    }

    else if (wrongGuesses.includes(key)) {
      print("You already guessed that!");
    }
    else {
      wrongGuesses.push(key);
      print("NO MATCH!");
    }



  }
}





