localStorage.activated = "true";

chrome.tabs.onUpdated.addListener(function (id, info, tab) {

    var bool = localStorage.activated;
	
    if (bool.indexOf("true") > -1) {
        if (tab.url.toLowerCase().indexOf("facebook.com/") !== -1) {
            chrome.tabs.remove(tab.id);
        }
        if (tab.url.toLowerCase().indexOf("twitter.com/") !== -1) {
            chrome.tabs.remove(tab.id);
        }
        if (tab.url.toLowerCase().indexOf("youtube.com/") !== -1) {
            chrome.tabs.remove(tab.id);
        }
        if (tab.url.toLowerCase().indexOf("reddit.com/") !== -1) {
            chrome.tabs.remove(tab.id);
        }
        if (tab.url.toLowerCase().indexOf("pinterest.com/") !== -1) {
            chrome.tabs.remove(tab.id);
        }
        if (tab.url.toLowerCase().indexOf("vimeo.com/") !== -1) {
            chrome.tabs.remove(tab.id);
        }
        if (tab.url.toLowerCase().indexOf("plus.google") !== -1) {
            chrome.tabs.remove(tab.id);
        }
        if (tab.url.toLowerCase().indexOf("tumblr.com/") !== -1) {
            chrome.tabs.remove(tab.id);
        }
        if (tab.url.toLowerCase().indexOf("vk.com/") !== -1) {
            chrome.tabs.remove(tab.id);
        }

        chrome.browserAction.setIcon({
            path: {
                38: "../icon/iconon.png"
            },
            tabId: tab.id
        });

    } else {
        chrome.browserAction.setIcon({
            path: {
                38: "../icon/icon.png"
            },
            tabId: tab.id
        });
    }
});

chrome.browserAction.onClicked.addListener(function (tab) {
    var bool = localStorage.activated;
    if (bool.indexOf("false") > -1) {
        chrome.browserAction.setIcon({
            path: {
                38: "../icon/iconon.png"
            },
            tabId: tab.id
        });
        activated = true;
        localStorage.activated = "true";
    } else {
        chrome.browserAction.setIcon({
            path: {
                38: "../icon/icon.png"
            },
            tabId: tab.id
        });
        localStorage.activated = "false";
    }
});