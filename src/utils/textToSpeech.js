const speech = new SpeechSynthesisUtterance();

export const textToSpeech = (text) => {
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);
}