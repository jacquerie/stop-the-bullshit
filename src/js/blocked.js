$(document).ready(function () {
  var referrer = document.referrer,
    regex = /\?url=(.+)/,
    match = window.location.search.match(regex);

  var backURL = referrer === '' ? 'http://www.google.com' : referrer,
    blockedURL = decodeURIComponent(match[1]);

  $('#url').html(blockedURL);

  $('#back').click(function () {
    location.href = backURL;
  });
});
