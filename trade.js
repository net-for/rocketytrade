let playerItems = [];
let targetItems = [];

function addItem() {
    const item = prompt("Enter item name:");
    if (item) {
        playerItems.push(item);
        updateUI();
    }
}

function cancelTrade() {
    cef.emit("trade:cancel");
}

function acceptTrade() {
    cef.emit("trade:accept");
}

function updateUI() {
    const playerList = document.getElementById("player-items");
    playerList.innerHTML = "";
    playerItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        playerList.appendChild(li);
    });

    const targetList = document.getElementById("target-items");
    targetList.innerHTML = "";
    targetItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        targetList.appendChild(li);
    });
}

cef.on("trade:update", (items) => {
    targetItems = items;
    updateUI();
});
