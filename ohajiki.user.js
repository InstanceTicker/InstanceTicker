(function(){
  var d = document;
  /* 現在のURLやドメイン */
  var url = location.href;
  var domain = location.hostname;

  /* URLの条件を指定 */
  if (domain.match('mastodon.social') || domain.match('mastodon.cloud') || domain.match('mstdn.jp') ) {
    const css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('media', 'all');
    css.setAttribute('href', 'https://wee.jp/css/1.css');
    document.getElementsByTagName('head')[0].appendChild(css);
  }
})();
