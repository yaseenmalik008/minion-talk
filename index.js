var txtInput = document.querySelector("#txtInput")
var btnTranslate = document.querySelector("#btnTranslate")
var outputDiv = document.querySelector("#outputDiv")

let url = "https://api.funtranslations.com/translate/minion.json"

function translationalUrl(text){
    return url  +  "?" + "text=" + text
}

function clickHandler(){
    console.log("clicked")
    console.log(`input : ${txtInput.value}`)
}

btnTranslate.addEventListener("click", function clickhandler(){
    fetch(translationalUrl(txtInput.value))
    .then((res)=>res.json())
    .then(function(json){
        return outputDiv.innerHTML = json.contents.translated
    })
    .catch((error)=>{
        console.log(error)
    })
})
clickHandler()


