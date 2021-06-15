import cipher from './cipher.js';

console.log(cipher);

let finalSentence = message.offset(displ);


let cod = document.getElementById ("encodeButton")
cod.addEventListener("click",encrypt)

function encrypt (encodeButton) {
    encodeButton.preventDefault()
    const encode = document.getElementById("message").value;
    let displacement = parseInt(document.getElementById("encryOffset").value;
    let msg = cipher.encode(message, displacement);
    const off = document.getElementById("").value = `${msg}`;
    off.innerHTML = msg
}

let decod = document.getElementById()
decod.addEventListener("click", )
