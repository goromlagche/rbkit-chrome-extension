(function() {
  // alert(Object.getOwnPropertyNames(chrome.app));
  // chrome.tabs.getSelected(null,function(tab) {
  //   alert(tab.url);
  // });
  chrome.devtools.panels.create("Rbkit", "../img/rbkit.png", "../html/panel.html");
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      alert(sender);
      var uri = request.uri;
      alert("hello");
      var ws = new WebSocket(uri, ['rbkit']);

      if (ws.readyState == 1) {

      } else {
        chrome.devtools.panels.create("Rbkit", "../img/rbkit.png", "../html/error.html");
      }
    });

})();
