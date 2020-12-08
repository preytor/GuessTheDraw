
var words_en = ["home", "beach"];
var words_es = ["casa", "playa"];

function PintuLogic (id, lang) {
    this.id = id;
    this.lang = lang;
}

PintuLogic.setId = function(id){
    this.id = id;
};

PintuLogic.getId = function() {
    return this.id;
};

PintuLogic.setLang = function(lang){
    this.lang = lang;
};

PintuLogic.getLang = function () {
    return this.lang;
};

PintuLogic.setSecretWord = function (secretWord) {
    this.secretWord = secretWord;
};

PintuLogic.getSecretWord = function () {
    return this.secretWord;
};

PintuLogic.beginGame = function () {
    PintuLogic.setSecretWord(selectSecretWord(this.lang));
    console.log("secret word is " + secretWord);
}

function selectSecretWord() {
    var secretWord;
    switch (lang) {
        case 'en':
            secretWord = words_en[Math.floor((Math.random() * words_en.length))];
            break;
        case 'es':
            secretWord = words_es[Math.floor((Math.random() * words_es.length))];
            break;
        default:
            secretWord = words_en[Math.floor((Math.random() * words_en.length))];
    }
    return secretWord;
}