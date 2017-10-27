var Letter = require('./letter.js');

var Word = function(word) {
    this.word = word;
    this.letters = [];

    for (var i = 0; i < this.word.length; i++) {
        var newletter = new Letter(this.word[i]);
        this.letters.push(newletter);
    } 
}

module.exports = Word;