var Letter = function(character){
	this.character = character;
	this.guessed = false;
	this.shouldDisplay = function(){
		if (this.guessed === false){
			return "-" 
		}
		else{
			return this.character
		}
	}
}

module.exports = Letter;