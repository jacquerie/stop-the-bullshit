$(document).ready(function () {
  var blockedURLs = new Set(urls);

  $(window).scroll(_.debounce(function () {
    $('.userContentWrapper .ellipsis')
      .not('.FriendButton')
      .each(function () {
        var url = $(this).text(),
          cleanURL = url.split('|')[0]
            .split('.').slice(-2).join('.');

        if (blockedURLs.has(cleanURL)) {
          var $blockedPost = $(this).closest('.userContentWrapper'),
            $userLink = $blockedPost.find('h5 a:first-child()');

          $blockedPost.fadeOut(400, function () {
            $blockedPost.html('<p class="suggestion">' + $userLink.text() +
              ' posted something which is probably false. Inform them that \
              <b>they are helping a scammer</b> reach more people, and \
              recommend them to <a href="https://goo.gl/W3i1Jj">install \
              StopTheBullshit</a>.</p>');
            $blockedPost.fadeIn();
          });
        }
    }, 400);
  }));
});
