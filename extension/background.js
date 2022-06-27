chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.active) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["./foreground.js"]
        })
            .then(() => {
                console.log("INJECTED THE FOREGROUND SCRIPT.");
            })
            .catch(err => console.log(err));
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {   
    if (request.contentScriptQuery == "postData") {
        let opt = JSON.parse(request.options)

        fetch(request.url, opt)
            .then(response => response.json())
            .then(result => sendResponse(result))
            .catch(error => console.log('Error:', error));
        return true;
    }
});