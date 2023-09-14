const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
  {
    text: " I am happy and content with my life. "
  },
  {
    text: "I am determined to achieve my goals no matter what obstacles come my way."
  },
  {
   text: " I am grateful for the support and love of my family and friends."
  },
  {
    text: " I am excited about the new opportunities that lie ahead."
  },
  {
    text: "I am confident in my abilities to overcome any challenges."
  },
  {
    text: " I am proud of my accomplishments and the person I have become."
  },
  {
   text: " I am ready to take on the world and make a difference."
  },
  {
    text: " I am always seeking knowledge and eager to learn."
  },
  {
    text: " I am passionate about pursuing my dreams and making them a reality."
  },
  {
    text: " I am a firm believer in the power of positivity and optimism."
  },
  {
    text: " I am committed to living a life filled with purpose and meaning."
  },
  {
    text: " I am open-minded and embrace new experiences and perspectives."
  },
  {
    text: "I am excited to see what the future holds and the opportunities it will bring."
  },
  {
    text: "I am determined to leave a positive impact on the world."
  },
  {
    text: "I am a believer in the potential within each and every person."
  },
  {
    text: "I am resilient and capable of bouncing back from setbacks"
  }
 ];

data.forEach(createBox);

// Create speech boxes
function createBox(item) {
  const box = document.createElement('div');

  const { text } = item;

  box.classList.add('box');

  box.innerHTML = `
    <p class="info">${text}</p>
  `;

  box.addEventListener('click', () => {
    setTextMessage(text);
    speakText();

    // Add active effect
    box.classList.add('active');
    setTimeout(() => box.classList.remove('active'), 800);
  });

  main.appendChild(box);
}

// Init speech synth
const message = new SpeechSynthesisUtterance();

// Store voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach(voice => {
    const option = document.createElement('option');

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

// Set text
function setTextMessage(text) {
  message.text = text;
}

// Speak text
function speakText() {
  speechSynthesis.speak(message);
}

// Set voice
function setVoice(e) {
  message.voice = voices.find(voice => voice.name === e.target.value);
}

// Voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices);

// Toggle text box
toggleBtn.addEventListener('click', () =>
  document.getElementById('text-box').classList.toggle('show')
);

// Close button
closeBtn.addEventListener('click', () =>
  document.getElementById('text-box').classList.remove('show')
);

// Change voice
voicesSelect.addEventListener('change', setVoice);

// Read text button
readBtn.addEventListener('click', () => {
  setTextMessage(textarea.value);
  speakText();
});

getVoices();

//--------------------------------------//

async function init () {
  const node = document.querySelector("#type-text")
  
  await sleep(1000)
  node.innerText = ""
  await node.type('Text-->')
  
  while (true) {
    await node.type('Text_Converting_Voice!')
    await node.delete('Converting_to_voice!')
    await sleep(2000)
    await node.delete('Converting_to_voice!')
    await sleep(2000)
    await node.delete('Speech--->Voice!')
  }
}


// Source code 🚩

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
  get typeInterval () {
    const randomMs = 100 * Math.random()
    return randomMs < 50 ? 10 : randomMs
  }
  
  async type (text) {
    for (let character of text) {
      this.innerText += character
      await sleep(this.typeInterval)
    }
  }
  
  async delete (text) {
    for (let character of text) {
      this.innerText = this.innerText.slice(0, this.innerText.length -1)
      await sleep(this.typeInterval)
    }
  }
}

customElements.define('type-async', TypeAsync, { extends: 'span' })


init()
