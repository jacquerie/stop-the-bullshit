$(document).ready(function () {
  var blockedURLs = new Set([
    '70news.wordpress.com',
    'abcnews.com.co',
    'americannews.com',
    'christwire.org',
    'dailycurrant.com',
    'dailystar.co.uk',
    'dcgazette.com',
    'eaglerising.com',
    'empirenews.net',
    'endingthefed.com',
    'hotglobalnews.com',
    'infowars.com',
    'naturalnews.com',
    'stuppid.com',
    'theblacksphere.net',
    'theglobalsun.com',
    'thenationalsun.com',
    'thepoliticalinsider.com',
    'theracketreport.com',
    'tmzbreaking.com',
    'tmzuncut.com',
    'tmzworldnews.com',
    'trumpvision365.com',
    'truthcdm.com',
    'usanewsflash.com',
    'usherald.com',
    'witscience.org',
    'worldnewsdailyreport.com',
    'worldpoliticus.com',
    'worldtruth.tv/',
  ]);

  $(window).scroll(_.debounce(function () {
    $('.userContentWrapper .ellipsis')
      .not('.FriendButton')
      .each(function () {
        var url = $(this).text(),
          cleanURL = url.split('|')[0];

        if (blockedURLs.has(cleanURL)) {
          var $blockedPost = $(this).closest('.userContentWrapper');

          $blockedPost.fadeOut(400, function () {
            $blockedPost.html('<p class="suggestion"> \
              This user posted something which is probably false. Inform them \
              that <b>they are helping a scammer</b> reach more people, and \
              recommend them to <a href="https://goo.gl/W3i1Jj">install \
              StopTheBullshit</a>.</p>');
            $blockedPost.fadeIn();
          });
        }
    }, 400);
  }));
});
