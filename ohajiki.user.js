(function(){
  var d = document;
  /* 現在のURLやドメイン */
  var url = location.href;
  var domain = location.hostname;

  /* URLの条件を指定 */
  if (domain.match('mastodon.social')
      || domain.match('mastodon.cloud') ) {
    var css = d.createElement('style');
    /* 適用するCSSを記述 */
    var rule = d.createTextNode('* {}  @import url("https://wee.jp/css/1.css");');
    css.type = 'text/css';
    if (css.styleSheet) {
      css.styleSheet.cssText = rule.nodeValue;
    } else {
      css.appendChild(rule);
    };

    d.getElementsByTagName('html')[0].appendChild(css);
  }
})();
