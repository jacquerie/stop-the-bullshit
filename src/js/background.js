chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    var blockedUrl = encodeURIComponent(details.url),
      templateUrl = chrome.extension.getURL('src/blocked.html'),
      redirectUrl = templateUrl + '?url=' + blockedUrl;

    return {'redirectUrl': redirectUrl};
  },
  {
    'urls': [
      '*://*.70news.wordpress.com/*',
      '*://*.abcnews.com.co/*',
      '*://*.americannews.com/*',
      '*://*.christwire.org/*',
      '*://*.dailycurrant.com/*',
      '*://*.dailystar.co.uk/*',
      '*://*.dcgazette.com/*',
      '*://*.eaglerising.com/*',
      '*://*.empirenews.net/*',
      '*://*.endingthefed.com/*',
      '*://*.hotglobalnews.com/*',
      '*://*.naturalnews.com/*',
      '*://*.infowars.com/*',
      '*://*.stuppid.com/*',
      '*://*.theblacksphere.net/*',
      '*://*.theglobalsun.com/*',
      '*://*.thenationalsun.com/*',
      '*://*.thepoliticalinsider.com/*',
      '*://*.theracketreport.com/*',
      '*://*.tmzbreaking.com/*',
      '*://*.tmzuncut.com/*',
      '*://*.tmzworldnews.com/*',
      '*://*.trumpvision365.com/*',
      '*://*.truthcdm.com/*',
      '*://*.usanewsflash.com/*',
      '*://*.usherald.com/*',
      '*://*.usconservativetoday.com/*',
      '*://*.worldnewsdailyreport.com/*',
      '*://*.worldpoliticus.com/*',
      '*://*.worldtruth.tv/*',
    ],
    'types': ['main_frame'],
  },
  ['blocking']
);
