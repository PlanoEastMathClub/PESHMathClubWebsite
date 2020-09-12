socket.on("user-join", msg => {
    const msgBox = document.createElement("div");
    msgBox.innerHTML=msg;
    document.body.appendChild(msgBox);
});