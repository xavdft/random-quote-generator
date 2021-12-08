/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/***
 * `quotes` array
***/

// The array of the project, containing 5 objects with various properies
const quotes = [
  { quote: 'The big lesson in life, baby, is never be scared of anyone or anything.', source: 'Frank Sinatra'},
  { quote: 'In three words I can sum up everything about life: It goes on', source: 'Robert Frost', year: '1954'},
  { quote: 'The secret of getting ahead is getting started', source: 'Walt Disney'},
  { quote: 'There are some things you learn best in calm, and some in storm.', source: 'Willa Cather', citation: 'The Song of the Lark'},
  { quote: 'And, when you want something, all the universe conspires in helping you achieve it.', source: 'Paul Coelho', citation: 'The Alchemist', year: '1988'}
];

/***
 * `getRandomQuote` function
***/

// The function that actually pulls quotes from the array in a random order//
function getRandomQuote () {
  // This generates a random number between 0 and whatever the length of the array is
  const randomQuote = Math.floor(Math.random() * (quotes.length));
  // The return statement is what actually carries out the process from above
  return quotes[randomQuote];
}
getRandomQuote();

/***
 * `printQuote` function
***/

// This function pulls from getRandomQuote in order to generate the actual display the user sees when clicking the "Show another quote" button
function printQuote () {
  // This new variable is where getRandomQuote is stored
  const randomCite = getRandomQuote();
  // htmlStr represents the variable where the HTML string is stored, both htmlStr and randomCite are needed for the next step
  // htmlStr will display a quote along with its source
  let htmlStr = `<p class='quote'>${randomCite.quote}</p>
                  <p class='source'>${randomCite.source}`;
                  // If the quote has a citation attached, it will display alongside with source
                  if (randomCite.citation) {
                  htmlStr += `<span class = 'citation'>${randomCite.citation}</span>`
                  }
                  // If the quote has a year attached to it, it will now display
                  if (randomCite.year) {
                  htmlStr += `<span class = 'year'>${randomCite.year}</span>`
                  }
                  // This function still needs a closing </p> tag, this is where it is placed
                  htmlStr += '</p>';
                  // This displays htmlStr to the user
                  document.getElementById('quote-box').innerHTML = htmlStr;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
