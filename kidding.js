const chalk = require('chalk');

process.argv.forEach((val, index) => {
    console.log(`${val}:${index}`);
});

let num = Number(3);
console.log('obj num %o', num);

const x = 1;
const y = 2;
const z = 3;

console.count(
    'The value of x is ' + x +
    ' and has been checked .. how many times?'
);
console.count(
    'The value of x is ' + x +
    ' and has been checked .. how many times?'
);
console.count(
    'The value of y is ' + y +
    ' and has been checked .. how many times?'
);

console.count('x tiene el valor de ' + x + ' y se ha contado: ');
console.count('x' + x);


const oranges = ['orange', 'naranja', 'orange'];
const apples = ['just one apple'];

oranges.forEach(fruit => {
    console.count(chalk.green(fruit));
});

apples.forEach(fruit => {
    console.count(chalk.yellow(fruit))
});


const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
    bar.tick()
    if (bar.complete) {
        clearInterval(timer)
    }
},100)


const readline = require('readline-sync');

const name = readline.question('cual es tu nombre? ');
const secretWord = readline.question('indica tu palabra secreta: ', {hideEchoBack:true});//fix bug for chars delete
console.log('tu nombre es: %s y tu palabra secreta es %s', name, secretWord);

const cow = require('cowsay');

console.log(cow.think({
    text : "tu nombre es: "+ name +" y tu palabra secreta es " + secretWord,
    e : "UwU",
    T : "P "
}));
