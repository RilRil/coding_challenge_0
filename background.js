chrome.browserAction.onClicked.addListener(doSomething);
function doSomething(tab) {
    console.log('button clicked');
    let msg = {
        action: 'click'
    };
    chrome.tabs.sendMessage(tab.id, msg);
}