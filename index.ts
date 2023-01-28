import inquirer from "inquirer"
const game :{
random:string    
}= await inquirer.prompt([{
    name: "random",
    type: "input",
    message: "write your sentence you want to length?"
}])
const word = game.random.trim().split(" ")
console.log(`your sentence is ${word.length} words `)