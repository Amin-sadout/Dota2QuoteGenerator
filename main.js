let btn = document.getElementById('btn');
let output = document.getElementById('output');

let quotes = [
  "There are some things you weren't meant to see… such as tomorrow.",
  "No business but war, no family but death, no mercy but the grave!",
  "There's a fine line between bravery and stupidity.", "Moonlight shines upon the guilty and the innocent alike.", 
  "Good news travel slowly, bad news have wings.", "It's not the size of the sword, it's how you use it.", "If your enemy is equal, prepare for him. If greater, elude him. If weaker, crush him.", 
  " The fog of war is no match for the mist of fate.", "The Self seeks to end the great schism.", "I walk alone…. but the shadows are company enough.", "The only real beauty is power.", "Conflict is eternal, no less am I.", "Death and I, we have an understanding.", "Someone once told me I needed to face fear to get over it, and I thought, well why not take a step further and cut my fear into little pieces, then set my fear on fire, then throw the hot ash of my fear into a lake, and then poison the lake! Simple!"
];

btn.addEventListener('click', function() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})
