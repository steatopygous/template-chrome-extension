class ChromeExtensionPopup {
    constructor() {
        chrome.runtime.onMessage.addListener(
            (request /*, sender, sendResponse */) => {
                console.log('ChromeExtensionPopup.onMessage() - request =', request);

                if (request.message === 'click-me') {
                    console.log('The click me button was clicked');
                }
            }
        );
    }
}

new ChromeExtensionPopup();

console.log('Chrome extension initialised');
