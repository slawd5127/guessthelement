// let phrases = ["hydrogen", "helium", "lithium", "beryllium", "boron", "carbon", "nitrogen", "oxygen",
// "fluorine", "neon", "sodium", "magnesium", "aluminium", "silicon", "phosphorus", "sulfur", "chlorine", "argon"];
class Element {
  atomicMass;
  atomicNum;
  valenceElec;
  Symbol;
  name;
}
let hydrogen = new Element();
hydrogen.atomicMass = 1.00;
hydrogen.atomicNum = 1;
hydrogen.Group = 1;
hydrogen.Symbol = "H";
hydrogen.name = "Hydrogen";

let helium = new Element();
helium.atomicMass = 4.00;
helium.atomicNum = 2;
helium.Group = 18;
helium.Symbol = "He";
helium.name = "Helium";

let elements = [hydrogen, helium];
let curElement;
let guess, wrongGuesses;

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
function draw() {
  clear();
  fill(0, 0, 0); // black
  textSize(50);
  //text(curPhrase, 100, 60);
  text(guess.join(" "), 100, 150);

  textSize(30);
  fill(255, 0, 0); // red
  text(`${wrongGuesses.length} wrong guesses: ${wrongGuesses.join(" ")}`, 100, 200);

  if (wrongGuesses.length > 1) {
    noFill();
    rect(100, 275, 250, 280);

    if (wrongGuesses.length > 2) {
      fill(0, 0, 0);
      text(curElement.Group, 215, 270);

      if (wrongGuesses.length > 3) {
        fill(0, 0, 0);
        text(curElement.atomicMass, 215, 530);

        if (wrongGuesses.length > 4) { 
          fill(0, 0, 0); 
          text(curElement.atomicNum, 110, 300);

          if (wrongGuesses.length > 5) {
            fill(0, 0, 0);
            textSize(145);
            text(curElement.Symbol, 140, 448);

            if (wrongGuesses.length > 6) {
              fill(0, 0, 0);
              textSize(30);
              text(curElement.name, 140, 500);
              
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

    // Find all instances of key in curPhrase
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


// class Phrase { 
//   constructor[phrase, hint, catergory, mass] { 
//     this.phrase = phrase;
//     this.hint = hint;
//     this.catergory = catergory; 
//     this.atomicMass = mass; 
// } 

// let phrases = [
//     new Phrase()
// ]



