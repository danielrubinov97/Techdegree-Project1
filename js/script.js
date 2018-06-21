function getRandomNumber(){
	console.log('Made it!');
	return Math.floor(Math.random() * 6)
}

var arrayPreviousRandom = [];

function getRandomQuote() {
	console.log('Made it!');
	var randomNumber = getRandomNumber();
	arrayPreviousRandom.push(randomNumber);
	console.log(arrayPreviousRandom);
	while(arrayPreviousRandom[arrayPreviousRandom.length - 2] === arrayPreviousRandom[arrayPreviousRandom.length - 1]){
		console.log('In the IF');
		randomNumber = getRandomNumber();
		arrayPreviousRandom.push(randomNumber);
	}
	return quotes[randomNumber]
}

var nIntervId;

function printQuote() {
	window.clearTimeout(nIntervId);
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
			HTML += '<p class = "tags">' + returnedQuote[prop].join(', ') + '</p>';
		}
	}
	var backgroundColors = ['black', 'darkblue', 'green', 'darkgrey', 'darkgreen', 'maroon'];
	var randomNumber = getRandomNumber();

	document.body.style.backgroundColor = backgroundColors[randomNumber];
	document.getElementById('loadQuote').style.backgroundColor = backgroundColors[randomNumber];

	document.getElementById('quote-box').innerHTML = HTML;
	timedEvent();
}

function timedEvent(){
	nIntervId = window.setTimeout(printQuote, 15000);
}

timedEvent();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

