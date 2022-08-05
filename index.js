const button = document.querySelector('#btn');
const par = document.querySelector('#par');

const quotes = [`"The most exciting, challenging and significant relationship of all is the one you have with yourself. And if you find someone to love the you you love, well, that's just fabulous."`, 
`"Maybe the past is like an anchor holding us back. Maybe, you have to let go of who you were to become who you will be."`,
`“Maybe the best any of us can do is not to quit, play the hand we’ve been given, and accessorize the outfit we got.”`,
`“Man may have discovered fire, but women discovered how to play with it."`,
`“Being single used to mean that nobody wanted you. Now it means you’re pretty sexy and you’re taking your time deciding how you want your life to be and who you want to spend it with.”`,
`"Maybe some women aren't meant to be tamed. Maybe they need to run free until they find someone just as wild to run with."`,
`"Relationships are not about playing games. They're about mature and honest communication."`,
`“I want to enjoy my success, not apologize for it.”`,
`“Sometimes the wrong choices lead us to the right places.”`,
`«I love you, but I love me more."`];

button.addEventListener('click', function() {
    let randomQuote = quotes [Math.floor (Math.random() * quotes.length)];
    par.style.display = 'block'
    par.textContent = randomQuote;
})