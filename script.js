
let text = document.getElementById('text');
let btn = document.getElementById('speechBtn');

function textToSpeech( txt){
    let speech = new SpeechSynthesisUtterance(txt);
    speechSynthesis.speak(speech);
}

btn.addEventListener( 'click', () =>{
    if( text.value !== ""){
        textToSpeech(text.value);
    }
});
