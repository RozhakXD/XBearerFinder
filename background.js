let capturedToken = null;

chrome.webRequest.onBeforeSendHeaders.addListener(
    (details) => {
        const authHeader = details.requestHeaders.find(
            header => header.name.toLowerCase() === 'authorization'
        );

        if (authHeader && authHeader.value.startsWith('Bearer ')) {
            capturedToken = authHeader.value.split(' ')[1];
            chrome.storage.local.set({ twitterToken: `Bearer ${capturedToken}` });
        }
    },
    {
        urls: [
            "https://*.twitter.com/*",
            "https://*.x.com/*"
        ]
    },
    ["requestHeaders", "extraHeaders"]
);