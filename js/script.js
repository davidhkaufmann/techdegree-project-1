/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*
This is the quotes array. Each quote is listed as an object with a quote, 
source, citation, year, and rating property
*/
var quotes = [
	{quote: "What is this? A center for ants?", source: "Derek Zoolander", citation: "Zoolander", year: 2001, rating: "B"},
	{quote: "Life moves pretty fast. If you don’t stop and look around once in a while, you could miss it.", source: "Ferris Bueller", citation: "Ferris Bueller's Day Off", year: 1986, rating: "A"},
	{quote: "Inconceivable!", source: "Vizzini", citation: "The Princess Bride", year: 1987, rating: "B-"},
	{quote: "Strange things are afoot at the Circle-K.", source: "Ted Logan", citation: "Bill and Ted's Excellent Adventure", year: 1989, rating: "A-"},
	{quote: "Keep the change ya filthy animal.", source: "Kevin McCallister", citation: "Home Alone", year: 1990, rating: "B+"},
	{quote: "You’re killin' me, Smalls!", source: "Ham Porter", citation: "The Sandlot", year: 1993, rating: "A-"},
	{quote: "So you’re telling me there’s a chance.", source: "Lloyd Christmas", citation: "Dumb and Dumber", year: 1994, rating: "A+"},
	{quote: "I’m kind of a big deal.", source: "Ron Burgundy", citation: "Anchorman", year: 2004, rating: "B+"},
];


//Defining the variables red, green, blue, and rgbColor for the randomColor function

var red;
var green;
var blue;
var rgbColor;


/*
randomColor function
	1. Assign the red, green, and blue variables a number value from 0 to 255
	2. Define the rgbColor using the red, green, and blue variables
*/

function randomColor() {
	red = Math.floor(Math.random() * 256);
	green = Math.floor(Math.random() * 256);
	blue = Math.floor(Math.random() * 256);
	rgbColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
	document.body.style.background = rgbColor;
}


/*
getRandomQuote function
	1. Define the randNum variable and assign it a random number value that is less than the length of the quotes array
	2. Return an object from the quotes array using that random number
*/

function getRandomQuote() {
	var randNum = Math.floor(Math.random() * quotes.length);
	return quotes[randNum];
}


/*
printQuote function

	1. Define the quoteDetails and html variables
	2. Replace the elements with id's "quote" and "source" with a random quote and its source
	3. Conditional statements to determine whether or not there is a citation or year with each quote,
		 and then add them to the quote-box if given
	4. Close the html variable with the </p> tag and document it in HTML
*/

function printQuote() {
	var quoteDetails = getRandomQuote();
	var html = '';
	html = '<p class="quote">' + quoteDetails.quote + '</p>';
	html += '<p class="source">' + quoteDetails.source;
		if (quoteDetails.citation !== undefined) {
			html += '<span class="citation">' + quoteDetails.citation + '</span>';
		}
		if (quoteDetails.year !== undefined) {
			html += '<span class="year">' + quoteDetails.year + '</span><br>';
		}
		if (quoteDetails.rating !== undefined) {
			html += '<span class="rating">Movie Rating: ' + quoteDetails.rating + '</span>';
		}
	html += '</p>'
	document.getElementById('quote-box').innerHTML = html;
}


//Calling the printQuote function

printQuote();


//Click event listener to display a new quote for the print quote button

document.getElementById('load-quote').addEventListener("click", printQuote, false);


//Click event listener which changes the background color with each new quote for the print quote button

document.getElementById('load-quote').addEventListener("click", randomColor, false);


// Set interval method that refreshes the quote and changes the background color every 10 seconds

setInterval(printQuote, 10000);
setInterval(randomColor, 10000);