// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImage = document.querySelector('#explore > img');
  const textToSpeak = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');

  let voices = [];

  function loadVoices() {
    voices = speechSynthesis.getVoices();

    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');

      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;

      voiceSelect.appendChild(option);
    });
  }

  loadVoices();

  speechSynthesis.addEventListener('voiceschanged', loadVoices);

  talkButton.addEventListener('click', () => {
    const text = textToSpeak.value;

    if (text === '' || voiceSelect.value === 'select') {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[voiceSelect.value];

    utterance.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Smiling face with open mouth';
    });

    utterance.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    });

    speechSynthesis.speak(utterance);
  });
}