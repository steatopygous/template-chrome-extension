class ChromeExtensionPopup {
    constructor() {
        chrome.runtime.onMessage.addListener(
            (request /*, sender, sendResponse */) => {
                console.log('ChromeExtensionPopup.onMessage() - request =', request);

                if (request.message === 'initialise') {
                    // Put anything here that should be done when the popup
                    // is initialised.

                    console.log('Initialisation called');
                }

                // An example handler for events from the popup

                if (request.message === 'click-me') {
                    console.log('The "Click Me!" button was clicked');
                }
            }
        );
    }
}

new ChromeExtensionPopup();

console.log('Chrome extension initialised');
