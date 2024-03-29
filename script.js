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
    "poniżej": "below",
    "przetrwać": "survive",
    "potomek": "descendent",
    "rodzeństwo": "siblings",
    "zamknąć": "to close",
    "zmienić": "to change",
    "wysyłać": "to send",
    "otworzyć": "to open",
    "wziąć": "to take",
    "pozdrawiam": "greetings",
    "serdecznie": "heartily",
    "pokazywać": "to show",
    "życzliwość": "kindness",
    "odzwierciedlić": "reflect",
    "dopóki": "until",
    "trwa": "lasts",
    "upadamy": "we fall",
    "przestaje": "stops",
    "okres": "period",
    "pora": "time",
    "wiosna": "spring",
    "jesień": "autumn",
    "łyżka": "spoon",
    "łóżko": "bed",
    "podłoga": "floor",
    "dach": "roof",
    "kuchenka": "stove",
    "Ściana": "wall",
    "dzwonki": "bells",
    "koc": "blanket",
    "wśród": "among",
    "podczas": "during",
    "wybaczyć": "to forgive",
    "tchnienie": "breath",
    "dzielić się": "to share",
    "wybawienie": "salvation",
    "przygoda": "adventure"
}

const wordConstructors = {
  "nim": "them",
  "nam": "us",
  "niech": "let",
  "ktoś": "someone",
  "którego": "whose",
  "czyj": "whose",
  "przez": "by, through",
  "według": "according to",
  "przed": "before"
}

const straznica = {
  "przyjac": "accept",
  "chrzest": "baptism",
  "woli": "will"
}

const rodzina = {
  "krewni": "relatives",
  "wnuki": "grandchildren",
  "bliźnięta": "twins",
  "ojczym": "stepfather",
  "teść": "father-in-law",
  "teściowa": "mother-in-law",
  "szwagier": "brother-in-law",
  "szwagierka": "sister-in-law",
  "siostrzenica": "niece",
  "siostrzeniec": "nephew"
}

const dictList = [wordList, wordConstructors, straznica, rodzina]
let randomList = wordList
function getRandomWord(obj) {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
}

const getWordButton = document.getElementById("getWordButton");
const translateButton = document.getElementById("translateButton");

const listEl = document.getElementById("list1");
let textEl = document.createTextNode("word");
listEl.appendChild(textEl);
let currentWord = "";

const listEl2 = document.getElementById("list2");
let textEl2 = document.createTextNode("Translation");
listEl2.appendChild(textEl2);

getWordButton.addEventListener("click", function onClick() {

    getWordButton.style.backgroundColor = "red";
    getWordButton.style.color = "white";
    randomList = dictList[Math.floor(Math.random()*dictList.length)]
    currentWord = getRandomWord(randomList);
    textEl.textContent = currentWord;
    textEl2.textContent = "";
});

translateButton.addEventListener("click", function onClick() {
  translateButton.style.backgroundColor = "red";
  translateButton.style.color = "white";
  textEl2.textContent = randomList[currentWord];
});