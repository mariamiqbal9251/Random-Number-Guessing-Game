import inquirer from 'inquirer';
let randomNumber = await inquirer.prompt([
    {
        type: "input",
        name: "userGivesNumber",
        message: "Guess and enter the number \t",
    }
]);
console.log("You have entered this number , " + randomNumber.userGivesNumber + "!");
const rndInt = Math.floor(Math.random() * 10000000) + 1;
console.log("The random number is " + rndInt);
if (randomNumber.userGivesNumber == rndInt) {
    console.log("CONGRATS! You win the number matches ");
}
else {
    console.log("FAILED");
}
