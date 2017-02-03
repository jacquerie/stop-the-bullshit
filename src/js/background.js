chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    var blockedUrl = encodeURIComponent(details.url),
      templateUrl = chrome.extension.getURL('src/blocked.html'),
      redirectUrl = templateUrl + '?url=' + blockedUrl;

    return {'redirectUrl': redirectUrl};
  },
  {
    'urls': urls.map(function (url) {
      return '*://*.' + url + '/*';
    }),
    'types': ['main_frame'],
  },
  ['blocking']
);
