class PintuLogic{

    constructor(id, lang) {
        this.id = id;
        this.lang = lang;

        console.log("pintulogic created");
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setLang(lang) {
        this.lang = lang;
    }

    getLang() {
        return this.lang;
    }

    setSecretWord(secretWord) {
        this.secretWord = secretWord;
    }

    getSecretWord() {
        return this.secretWord;
    }

    beginGame() {
        this.setSecretWord(this.selectSecretWord(this.lang));
        console.log("secret word for id " + this.getId() + " is " + this.getSecretWord());
    }

    selectSecretWord(lang) {
        const words_en = ["home", "beach", "car", "table", "window", "cat", "chair"];
        const words_es = ["casa", "playa", "coche", "mesa", "ventana", "gato", "silla"];

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