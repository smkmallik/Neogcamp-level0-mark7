var buttonTranslate = document.querySelector("#button-translate");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");

var serverUrl = "https://api.funtranslations.com/translate/hodor.json"

var getTransactionUrl = (input) => {
    return serverUrl+ "?" + "text=" + input
}

var errorHandler = (error) => {
    console.log("Error Occured!", error);
    alert("something wrong with the server! try again after sometime!");
}

var clickHandler = () => {
    var inputText = textInput.value;

    fetch(getTransactionUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        textOutput.innerText = translatedText;
    })
    .catch(errorHandler)
}


buttonTranslate.addEventListener("click", clickHandler);