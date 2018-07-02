// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//set quote array
var quotes = [
  { quote: "Me fail English? That's unpossible...", source: "Ralph Wiggam"},
  { quote: "Don't have a cow man.", source: "Bart Simpson"},
  { quote: "I've made a huge mistake...", source: "Gob Bluth"},
  { quote: "Steve Holt!!!", source: "Steve Holt"},
  { quote: "There's always money in a banana stand", source: "George Bluth"},
];

function getRandomQuote(){
  //generate random number
  var randomQ = Math.floor(Math.random() * quotes.length);
  //test in console
  console.log("randomQ: " + randomQ);
  return quotes[randomQ];
}

function printQuote(){
  var randomQuote = getRandomQuote();
  //construct html string
  var html = "<p class = 'quote'>" + randomQuote.quote + "</p>";
  html += "<p class = 'source'>" + randomQuote.source + "</p>";
  //display final HTML string
  document.getElementById('quote-box').innerHTML = html;
}
