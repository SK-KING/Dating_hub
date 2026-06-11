function switchTab(tab) {
    document.getElementById('tab-chat').classList.add('hidden');
    document.getElementById('tab-profile').classList.add('hidden');
    document.getElementById('tab-' + tab).classList.remove('hidden');
}

function sendMessage() {
    let input = document.getElementById('chat-input');
    let msg = input.value.toLowerCase();
    if(!msg) return;

    let stream = document.getElementById('chat-stream');
    stream.innerHTML += `<div class="text-right text-sm">You: ${input.value}</div>`;
    
    // Smart Keyword Matching Logic
    let reply = "Wow, aur batao! Main aapki baatein sun raha hoon.";
    if(msg.includes('hi') || msg.includes('hello')) reply = "Hey! Kaise ho aap? Kya chal raha hai aajkal?";
    else if(msg.includes('hobby') || msg.includes('kya karte ho')) reply = "Mujhe logo se connect karna aur baatein karna pasand hai. Aapki hobbies kya hain?";
    else if(msg.includes('instagram')) reply = "Instagram par toh main photos dekhta hoon, par yahan aapse baat karna zyada mazedaar hai!";
    
    setTimeout(() => {
        stream.innerHTML += `<div class="text-pink-400 text-sm">Bot: ${reply}</div>`;
        input.value = '';
        stream.scrollTop = stream.scrollHeight;
    }, 800);
}

function saveProfile() {
    alert("Profile Saved successfully!");
}
