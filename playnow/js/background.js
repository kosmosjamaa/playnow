//chrome.browserAction.onClicked.addListener(function(tab) { });

var links  ;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    // read `newIconPath` from request and read `tab.id` from sender
    chrome.browserAction.setIcon({
        path: request.newIconPath,
        tabId: sender.tab.id
    });

	chrome.browserAction.setBadgeText({
		text: request.foundtotal,
		tabId: sender.tab.id
	});

  links = request.foundlinks;
  console.log(request);
  //  links =  links + request.foundlink;
 
    

});



chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "hello")
      sendResponse({
        msg: links

      });
  });



