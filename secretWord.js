var readline = require('readline');
var Writable = require('stream').Writable;

var mutableStdout = new Writable({
    write: function(chunk, encoding, callback) {
        if (!this.muted)
            process.stdout.write(chunk, encoding);
        callback();
    }
});

mutableStdout.muted = false;

var rl = readline.createInterface({
    input: process.stdin,
    output: mutableStdout,
    terminal: true
});

rl.question('Password: ', function(password) {
    console.log('\nPassword is ' + password);
    rl.close();
});

mutableStdout.muted = true;
