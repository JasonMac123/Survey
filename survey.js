const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let database = [];
rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  database.push(answer);
  rl.question("What's an activity you like doing? ", (answer) => {
    database.push(answer);
    rl.question("What do you listen to while doing that? ", (answer) => {
      database.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        database.push(answer);
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          database.push(answer);
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            database.push(answer);
            console.log(`Hi my name is ${database[0]}, and my favourite activity is ${database[1]} usually listening to ${database[2]}.
My favourite meal of the day is ${database[3]} where I love to eat ${database[4]}. Finally my favourite sport is ${database[5]}. What about you?`);
            rl.close();
          });
        });
      });
    });
  });
});
