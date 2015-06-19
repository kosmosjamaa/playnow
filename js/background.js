chrome.browserAction.onClicked.addListener(function(tab) { });



chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    // read `newIconPath` from request and read `tab.id` from sender
    chrome.browserAction.setIcon({
        path: request.newIconPath,
        tabId: sender.tab.id
    });
});


