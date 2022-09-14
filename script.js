const wordList = {
    "powstrzymać": "stop",
    "przepowiedziano": "foretold",
    "ustanowione": "established",
    "wcześniej": "earlier",
    "smażenie": "frying",
    "olej": "oil",
    "wieprzowina": "pork",
    "wołowina": "beef",
    "wegetariański": "vegetarian",
    "patelni": "frying pan",
    "grzyb": "mushroom",
    "usunie": "delete",
    "stanie": "able",
    "znika": "disappears",
    "poniżej": "below"
}

function getRandomWord(obj) {
  const keys = Object.keys(obj);
  return obj[keys[Math.floor(Math.random() * keys.length)]];
}

const getWordButton = document.getElementById("getWordButton");

getWordButton.addEventListener("click", function onClick() {
    getWordButton.style.backgroundColor = "red";
    getWordButton.style.color = "white";
    let textEl = document.createTextNode("Witaj świecie!");
    document.getElementById("list1").appendChild(textEl);
});

