/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
    author: "Michael Scott",
    citation: "Season 5",
    year: 2008
  },
  {
    quote: "I'm not supersition, I'm just a little sitious.",
    author: "Michael Scott",
    citation: "Season 4",
    year: 2007
  },
  {
    quote: "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    author: "Michael Scott",
    citation: "Season 5",
    year: 2008
  },
  {
    quote: "I wish there was a way to know you’re in the good old days, before you’ve actually left them.",
    author: "Andy Bernard",
    citation: "Season 9",
    year: 2012
  },
  {
    quote: "I live by one rule: No office romances, no way. Very messy, inappropriate…no. But, I live by another rule: Just do it…Nike.",
    author: "Michael Scott",
    citation: "Season 1",
    year: 2005
  },
  {
    quote: "In the Schrute family, the youngest child raises the others. I’ve been raising children since I was a baby.",
    author: "Dwight Schrute",
    citation: "Season 7",
    year: 2010
  },
  {
    quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    author: "Michael Scott",
    citation: "Season 2",
    year: 2005
  },
  {
    quote: "I feel God in this Chili’s tonight.",
    author: "Pam Beesly",
    citation: "Season 2",
    year: 2005
  },
  {
    quote: "Did I stutter?",
    author: "Stanley Hudson",
    citation: "Season 4",
    year: 2007
  },
  {
    quote: "Ultimatums are key. Basically nobody does anything for me unless I threaten to kill myself.",
    author: "Kelly Kapoor",
    citation: "Season 7",
    year: 2010
  },
  {
    quote: "There are always a million reasons not to do something.",
    author: "Jan Levinson",
    citation: "Season 2",
    year: 2005
  },
  {
    quote: "I talk a lot, so I’ve learned to tune myself out.",
    author: "Kelly Kapoor",
    citation: "Season 7",
    year: 2010
  }
  
];



/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * (quotes.length)); 
  return quotes[randomQuote];
}

/***
 * `randomColor` and `timer` function
 ***/

// creates an array of objects to store background and button color information
// I didn't want to randomize the background color because it can sometimes lead to hard to read quotes
// creates an array of objects to store background and button color information
// I didn't want to randomize the background color because it can sometimes lead to hard to read quotes
var colors = [
  {
      background: "#ff2e63", //pink
      button: "#252a34"
  },
  {
      background: "#00adb5", //teal
      button: "#393e46"
  },
  {
      background: "#f38181", //salmon
      button: "#625772"
  },
  {
      background: "#6639a6", //purple
      button: "#521262"
  },
  {
      background: "#3f72af", //blue
      button: "#112d4e"
  },
  {
      background: "#f95959", //orange
      button: "#455d7a"
  },
  {
      background: "#a3de83", //lt green
      button: "#2eb872"
  },
  {
      background: "#118df0", //bright blue
      button: "#0e2f56"
  },
  {
      background: "#ff5722", //bright orange
      button: "#393e46"
  },
  {
      background: "#3fc1c9", //aqua
      button: "#fc5185"
  }
];
let timer;

// generates a random number, assigns it to a variable, then uses it to return a random object from the quotes array
function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);

  return quotes[randomQuote];
}

// generates a random number, assigns it to a variable, then uses it to return a random object from the colors array
function getRandomColor() {
  let randomColor = Math.floor(Math.random() * colors.length);

  return colors[randomColor];
}

// assigns a setInterval method to the variable so that the printQuote function will automatically run after 10 seconds
function startTimer() {
  timer = setInterval(printQuote, 10000);
}

// clears the setInterval method from the timer variable
function clearTimer() {
  clearInterval(timer);
}


/***
 * `printQuote` function
***/

function printQuote() {
  // creates the currentQuoute variable and sets the value to the random object that is returned when the getRandomQuote function is called
  // creates the currentColor variable and sets the value to the random object that is returned when the getRandomColor function is called
  // creates the html variable and uses the currentQuote variable along with key values to build a string
  let currentQuote = getRandomQuote();
  let currentColor = getRandomColor();
  let html = "<p class='quote'> " + currentQuote.quote + "</p>";
  html += "<p class='source'> " + currentQuote.source;
  // tests to see if the citation property is present in the currentQuote and if so, adds it to the string
  if ("citation" in currentQuote) {
      html += "<span class='citation'> " + currentQuote.citation + "</span>";
  }
  // tests to see if the date property is present in the currentQuote and if so, adds it to the string
  if ("date" in currentQuote) {
      html += "<span class='year'> " + currentQuote.date + "</span>";
  }
  html += "<span class='category'> " + currentQuote.category + "</span>";

  // writes the info from the html variable to the div with the quote-box id
  // uses the currentColor variable to change the background color
  // uses the currentColor variable to change the button color
  document.getElementById("quote-box").innerHTML = html;
  document.body.style.background = currentColor.background;
  document.getElementById("load-quote").style.background = currentColor.button;

  // clears any previous timers that might be running and starts a new one
  clearTimer();
  startTimer();
}

// runs the printQuote function upon initial page load
printQuote();






/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);