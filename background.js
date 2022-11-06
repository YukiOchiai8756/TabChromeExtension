// Fires whenever a new tab is created
chrome.tabs.onCreated.addListener(function() {
    // Obtain the number of regular tabs
    chrome.tabs.query({windowType:'normal'}, function(tabs) {
        // If there are more than 10 tabs open in total
        if (tabs.length >= 10) {
            // Notify user with custom notification
            chrome.notifications.create('notification', {
                type:'basic',
                iconUrl:"images/icon.jpeg",
                title:'TOO MANY TABS OPEN',
                message:'Relax, delete some tabs',
                priority:1,
            })
        }
    })
});