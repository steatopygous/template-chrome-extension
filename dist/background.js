chrome.runtime.onInstalled.addListener(function(){chrome.storage.sync.set({color:"#3aa757"},function(){}),chrome.declarativeContent.onPageChanged.removeRules(void 0,function(){chrome.declarativeContent.onPageChanged.addRules([{conditions:[new chrome.declarativeContent.PageStateMatcher({pageUrl:{hostEquals:"google.com"}})],actions:[new chrome.declarativeContent.ShowPageAction]}])})});
