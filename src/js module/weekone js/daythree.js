const playerName = prompt("What is your name?");
console.log(playerName);

let playerClass = prompt("Would you like to be a Rogue, or a Warrior?");

if (playerClass === "Rogue" || playerClass === "rogue") {
    console.log(`You have become a ${playerClass}`);
} else if (playerClass === "Warrior" || playerClass === "warrior") {
    console.log(`You have become a ${playerClass}`);
} else {
    console.log("Invalid Choice");
}
let adventureStart = prompt("Hello daring" + " " + playerClass + " " + "would you like to 'form a party', or 'go it alone'?");
if (adventureStart === "form a party") {
    console.log("You have decided to form a party, and are heading into town to find more party members");
} else if (adventureStart === "go it alone") {
    console.log("You have decided to go it alone, you are immediately killed by a level 1 goblin, you reopen your save and head into town to find more party members");
} else {
    console.log("Invalid Choice")
}
let formTheParty = prompt("You decided to form a party, huh? I hope you were smart enough to choose that the first time... anyways would you like to invite 'Frieren the Mage', or 'Patches the Betrayer' to your party?")
if (formTheParty === "Frieren the Mage") {
    console.log("You have chosen wisely, she will make an excellent addition to your party, now you have set off, are you going to train against level 1 boars, or battle the demon lord?")
} else if (formTheParty === "Patches the Betrayer") {
    console.log ("What a poor choice, really? His name has 'the betrayer' in it, he kills you in your sleep and steals all of your belongings, you wake back up and decide to choose the mage, Frieren, and hear a voice say 'You have chosen wisely, she will make an excellent addition to your party, now you have set off, are you going to train against level 1 boars, or battle the demon lord?'")
} else {
    console.log("Invalid Choice");
}