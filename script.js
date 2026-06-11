let userProfile = {};

// Step 1 to Step 2
function saveOnboard() {
    userProfile.age = document.getElementById('in-age').value;
    document.getElementById('screen-onboard').classList.add('hidden');
    document.getElementById('screen-profile').classList.remove('hidden');
}

// Step 2 to Step 3
function finishSetup() {
    userProfile.name = document.getElementById('in-name').value;
    userProfile.loc = document.getElementById('in-loc').value;
    
    document.getElementById('screen-profile').classList.add('hidden');
    document.getElementById('screen-main').classList.remove('hidden');
    alert("Welcome " + userProfile.name + "! Profile ready.");
}

// Chatting Logic
function sendMessage() {
    let input = document.getElementById('chat-input');
    let stream = document.getElementById('chat-stream');
    if(!input.value) return;

    stream.innerHTML += `<div class="text-right text-sm">You: ${input.value}</div>`;
    
    // Auto-reply logic
    setTimeout(() => {
        stream.innerHTML += `<div class="text-pink-400 text-sm">Bot: Hey ${userProfile.name}, kaisa raha aapka din?</div>`;
        input.value = '';
    }, 800);
}
