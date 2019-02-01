// ==UserScript==
// @name         #InstanceTicker (DX) user.js
// @namespace    https://github.com/weepjp/InstanceTicker
// @version      201902020003
// @description  #InstanceTicker DX は、 Mastodon と Misskey タイムライン上の投稿者のみなさんに所属インスタンス名を彩るカスタムCSSです。
// @author       weep https://weep.me/@weep (Special Thanks: popn_ja)
//
// @license      Original CSS © https://odakyu.app/@ars42525 and #InstanceTicker © 2018 https://weep.me/@weep Released under the MIT license https://opensource.org/licenses/MIT
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABG0lEQVQ4y6WTLWzCUBSFnwAxxMQEE5uYQMxMDIGYmamEjvCX2lVM0ASxpCOBZE1mSINA1CCqq6ura6urq6urz3oeKEiBPF7y2S/v3HuuCMMQURRJ4jhGkiSSNE2RZZkkz3NJURQ4fCIIAtQnWzQmHm7HG9yN1mgOV3gY/uFp4KDVX+K5P8fLxzfa+gyd3hRv3S+8dz93At/3USsFN+MDwYCC31KwKAU/UvBaJagrChhJeJ53ncB13TOCZaWAgxWO4xwJ7s8JejsBN3SVgKsWtm0rR5ACy7KUh8jCCdM0lSOwuRcIqn/A+gvDMC6YwbxaoOu6cpV5iELTtOMIoxUeTx3TfgY8RCkg/AlhJM6FcENcM2Ff2FrC+vOGyD8Yvit5VS8OawAAAABJRU5ErkJggg==
//
// @match        https://*/*
//
// @resource     CCSS1 https://raw.githubusercontent.com/weepjp/InstanceTicker/master/InstanceTicker1.css
// @resource     CCSS2 https://raw.githubusercontent.com/weepjp/InstanceTicker/master/InstanceTickerMisskey1.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
//
//
/****************************************************
 * InstanceTicker1.user.js                          *
 * https://github.com/weepjp/InstanceTicker         *
 ****************************************************/
//
//
/****************************************************
 * ようやく、Type-1 の user.js バージョンです。。。。。 *
 ****************************************************/
//
//
// ==/UserScript==


// ここに処理を記載する
(function(){
  var misky = 'Misskey|みすきーじぇーぴー';
  var mstdn = 'mastodon';

  var appn = document.getElementsByName('application-name').item(0);
  var apph = document.getElementsByClassName('app-holder').item(0);

  if (appn != null && appn.content.match(misky)){
    GM_addStyle(GM_getResourceText('CCSS2'));
  }else if(apph != null && apph.id.match(mstdn)){
    GM_addStyle(GM_getResourceText('CCSS1'));
  }
})();

