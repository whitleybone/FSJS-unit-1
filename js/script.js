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
    quote: “I’m not superstitious, but I am a little stitious.”,
    author: "Michael Scott",
    citation: "Season 4"
    year: 2007
  },
  {
    quote: “And I knew exactly what to do. But in a much more real sense, I had no idea what to do.”,
    author: "Michael Scott",
    citation: "Season 5",
    year: 2008
  },
  {
    quote: “I wish there was a way to know you’re in the good old days, before you’ve actually left them.”,
    author: "Andy Bernard",
    citation: "Season 9",
    year: 2012
  },
  {
    quote: “I live by one rule: No office romances, no way. Very messy, inappropriate…no. But, I live by another rule: Just do it…Nike.”,
    author: "Michael Scott",
    citation: "Season 1",
    year: 2005
  },
  {
    quote: “In the Schrute family, the youngest child raises the others. I’ve been raising children since I was a baby.”,
    author: "Dwight Schrute",
    citation: "Season 7",
    year: 2010
  },
  {
    quote: “Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.”,
    author: "Michael Scott",
    citation: "Season 2",
    year: 2005
  },
  {
    quote: “I feel God in this Chili’s tonight.”,
    author: "Pam Beesly",
    citation: "Season 2",
    year: 2005
  },
  {
    quote: “Did I stutter?”,
    author: "Stanley Hudson",
    citation: "Season 4",
    year: 2007
  },
  {
    quote: “Ultimatums are key. Basically nobody does anything for me unless I threaten to kill myself.”,
    author: "Kelly Kapoor",
    citation: "Season 7",
    year: 2010
  },
  {
    quote: “There are always a million reasons not to do something.”,
    author: "Jan Levinson",
    citation: "Season 2",
    year: 2005
  },
  {
    quote: “I talk a lot, so I’ve learned to tune myself out.”,
    author: "Kelly Kapoor",
    citation: "Season 7",
    year: 2010
  }
  
];



/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomQuote = Math.floor(math.random() * (quotes.length)); 
  return quotes[randomQuote];
}


/***
 * `printQuote` function
***/

function printQuote() {
console.log("click");

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);