function gotoStep2() {
    let age = document.getElementById('in-age').value;
    if(age) {
        document.getElementById('step1').classList.add('hidden');
        document.getElementById('step2').classList.remove('hidden');
    } else {
        alert("Age bharein!");
    }
}

function finish() {
    let name = document.getElementById('in-name').value;
    if(name) {
        document.getElementById('step2').classList.add('hidden');
        document.getElementById('main-app').classList.remove('hidden');
    } else {
        alert("Name bharein!");
    }
}

function send() {
    let msg = document.getElementById('msg').value;
    let box = document.getElementById('chat-box');
    box.innerHTML += `<p>You: ${msg}</p>`;
    document.getElementById('msg').value = '';
}
