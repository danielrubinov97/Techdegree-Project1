# Techdegree-Project1
First TechDegree Project
Programmed by: Daniel Rubinov

I hope to get Exceeding Expectations.

Project Instructions:
Create an array of JavaScript objects to hold the data for your quotes.
Name the array quotes.
The quotes array should be accessible in the global scope, meaning it shouldn't be inside of a function.

Each quote object in the quotes array should have the following properties:
A quote property which contains a string: the text of the quote that will be displayed on the page.
A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb.”
An optional citation property which contains a string identifying where the quote comes from, like a speech or publication. For example, "Famous Anonymous Jokes." If there is no known publication, do not include this property on the object.
An optional year property which contains a number identifying the year of the quote. For example, 1997. If there is no known year, then do not include this property on the object.
NOTE: To get the most out of this project, it would be best to include at least one quote that has a year and citation property. This will give you the chance to get some good practice working with conditionals when you create the printQuote() function to print the quotes to the screen.

Create a function named getRandomQuote which:
selects a random quote object from the quotes array.
returns the randomly selected quote object.

Create a function named printQuote which follows these rules:
printQuote calls the getRandomQuote function and stores the returned quote object in a variable.
printQuote constructs a string containing the different properties of the quote object using the following HTML template:
<p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>
printQuote only adds a <span class="citation"> if the quote object has a citation property.
printQuote only adds a <span class="year"> if the quote object has a year property.
printQuote displays the final HTML string to the page. You can use this JS snippet to accomplish that:
document.getElementById('quote-box').innerHTML