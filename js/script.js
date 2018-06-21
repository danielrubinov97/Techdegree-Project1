/*
	TechDegree Project One:
	Coded By: Daniel Rubinov
*/
//This variable stores the ID of the .setTimeout incase of the need to clear the timer.
var nIntervId;

//This variable stores previous random numbers to insure non repetitive nature. In this code I only made sure that there is no consecutive repetition.
//For a more advanced version I could insure almost entirely no consecutive. So that means only the first 5 quotes would be random. While the rest wont be.
//They will follow the pattern of the first 4.
var arrayPreviousRandom = [];

//When called this function returns a random value from 0 to 5.
function getRandomNumber(){
	//Just a check for the console.
	console.log('Made it!');
	return Math.floor(Math.random() * 6)
}

//When called this function returns a randomly selected quote based on its index number in the array.
//It also keeps track of all the previous quotes by index numbers and ensures no consecutive repetition.
function getRandomQuote() {
	//Just a check for the console.
	console.log('Made it!');
	var randomNumber = getRandomNumber();
	arrayPreviousRandom.push(randomNumber);
	//Just a check for the console.
	console.log(arrayPreviousRandom);
	//I know I could've used a do while loop but I sometimes just prefet the while loop.
	while(arrayPreviousRandom[arrayPreviousRandom.length - 2] === arrayPreviousRandom[arrayPreviousRandom.length - 1]){
		//Just a check for the console.
		console.log('In the IF');
		randomNumber = getRandomNumber();
		arrayPreviousRandom.push(randomNumber);
	}
	return quotes[randomNumber]
}

//When called this function cancels the standard timer, calls and prints out a new quote, picks a random color, and resets the timer.
function printQuote() {
	window.clearTimeout(nIntervId);
	//Just a check for the console.
	console.log('Made it!');
	var returnedQuote = getRandomQuote();
	var HTML  = '<p class = "quote">';
	for(var prop in returnedQuote){
		console.log('FOR IN');
		if (prop === 'quote'){
			HTML += returnedQuote[prop] + '</p>';
		} else if (prop === 'source'){
			HTML += '<p class = "source">' + returnedQuote[prop];
		} else if (prop === 'citation'){
			HTML += '<span class = "citation" >' + returnedQuote[prop] + '</span>';
		} else if (prop === 'year'){
			HTML += '<span class = "year">' + returnedQuote[prop] + '</span></p>';
		} else {
			//I added tags class to css to make it look nice in the web app.
			HTML += '<p class = "tags">' + returnedQuote[prop].join(', ') + '</p>';
		}
	}
	//I know I could've used rgb random color background, but I was afraid that some colors would clash with the white text of the quote.
	//So I just chose dark colors and randomized them. I know I also haven't ensured non consecutive repititon. I can do that for the next version :D.
	var backgroundColors = ['black', 'darkblue', 'green', 'darkgrey', 'darkgreen', 'maroon'];
	var randomNumber = getRandomNumber();
	//This is similar to the print method, it finds the id and changes the style. I not only changed the color of the background but also of the button.
	document.body.style.backgroundColor = backgroundColors[randomNumber];
	document.getElementById('loadQuote').style.backgroundColor = backgroundColors[randomNumber];
	//Prints the quote.
	document.getElementById('quote-box').innerHTML = HTML;
	timedEvent();
}
//The timer. It also stores that timers ID into nIntervID.
function timedEvent(){
	//15 seconds timer.
	nIntervId = window.setTimeout(printQuote, 15000);
}
//Calls the timer.
timedEvent();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

