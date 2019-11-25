chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ color: '#3aa757' }, function() {
        // console.log('The color is green.');
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        // NOTE: Put one of these into the array for each domain you
        //       want your extension to work with.

        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'google.com' },
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

