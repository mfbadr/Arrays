var prompt = require('sync-prompt').prompt
var chalk = require('chalk');

console.log(chalk.blue('hello world'))
console.log(chalk.blue.bgRed.bold('My name is Mikey'))
console.log(chalk.red('Here is some red' + chalk.blue.bgRed('different') + 'back to red'))

var evens = [2,4,6,8];
console.log(evens);
console.log(chalk.red(evens[1]))

for(var i = 0; i<10; i++){
  if(i%2 === 0){
    //even
    console.log(chalk.red(i));
  }else
    //odd
    console.log(chalk.blue(i));
}

for(var j = 0; j < evens.length; j++){
  console.log('evens -> ' + evens[j]);
}

var numbers = []
var response = prompt('Enter a number or q(uit)')
while(response != 'q'){
  response = parseFloat(response);
  numbers.push(response);
  response = prompt('Enter a number or q(uit)')
}

console.log(numbers)

var numsum = 0
numsum = parseFloat(numsum)

for(var q = 0; q < numbers.length; q++){
  numsum += numbers[q]
}

console.log('The sum of your numbers is ' + numsum)
