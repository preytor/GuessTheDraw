class PintuLogic{

    constructor(id, lang) {
        this.id = id;
        this.lang = lang;

        console.log("pintulogic created");
    }

    setId = function (id) {
        this.id = id;
    };

    getId = function () {
        return this.id;
    };

    setLang = function (lang) {
        this.lang = lang;
    };

    getLang = function () {
        return this.lang;
    };

    setSecretWord = function (secretWord) {
        this.secretWord = secretWord;
    };

    getSecretWord = function () {
        return this.secretWord;
    };

    beginGame = function () {
        setSecretWord(selectSecretWord(this.lang));
        console.log("secret word is " + secretWord);
    }

    selectSecretWord = function () {
        const words_en = ["home", "beach"];
        const words_es = ["casa", "playa"];

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

}

module.exports = PintuLogic;