let clickMe = document.getElementById('clickMe');

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    console.log('popup.js - initialising browser');
    chrome.tabs.sendMessage(tabs[0].id, { "message": "initialise" });
});

clickMe.onclick = function(element) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { "message": "click-me" });
    });
};

console.log('Chrome extension popup running');
