// Initialize Socket Connection
const docHost = document.location.host;
let socket;
if (docHost == "") {
    socket = io('http://localhost:8000');
} else {
    socket = io("buzz-contest-server.herokuapp.com");
}

// 

socket.on("user-join", msg => {
    const msgBox = document.createElement("div");
    msgBox.innerHTML=msg;
    document.body.appendChild(msgBox);
});