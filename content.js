console.log('! Cyril\'s Extension is loaded ! ');

chrome.runtime.onMessage.addListener(doStuff);
function doStuff(message, sender, sendResponse) {
    if (message.action === 'click') {
        onClick();
    }

}
function onClick() {
    let container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.bottom = '0';
    container.style.left = '0';
    container.style.width = '200px';
    container.style.height = '200px';
    container.innerHTML = "<h1>Hi there !</h1>";
    document.body.appendChild(container)
}


