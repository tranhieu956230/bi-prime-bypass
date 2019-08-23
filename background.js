chrome.runtime.onInstalled.addListener(function() {
  chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return {
        cancel: true
      };
    },
    {
      urls: ["https://experience.tinypass.com/*"]
    },
    ["blocking"]
  );
});
