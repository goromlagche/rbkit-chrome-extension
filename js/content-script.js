(function () {
  var ws_protocol = location.protocol === 'https:' ? 'wss://' : 'ws://';
  var uri = ws_protocol + location.host;
  // passing url to the extesnion via chrome message passing api
  // setInterval(function(){ console.log("sending message"); chrome.runtime.sendMessage({uri: uri});}, 3000);
  // alert(uri);
})();
