// ==UserScript==
// @name         #InstanceTickerDX.user.js
// @namespace    https://github.com/fedpla/InstanceTicker/
// @version      201903200020
// @description  #InstanceTickerDX は、 Mastodon と Misskey の タイムライン上投稿者に所属インスタンス名を彩るカスタムCSSです。
// @author       weep https://weep.me/@weep (Special Thanks: popn_ja)
//
// @license      Original CSS © https://odakyu.app/@ars42525 and #InstanceTicker © 2018 https://weep.me/@weep Released under the MIT license https://opensource.org/licenses/MIT
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABG0lEQVQ4y6WTLWzCUBSFnwAxxMQEE5uYQMxMDIGYmamEjvCX2lVM0ASxpCOBZE1mSINA1CCqq6ura6urq6urz3oeKEiBPF7y2S/v3HuuCMMQURRJ4jhGkiSSNE2RZZkkz3NJURQ4fCIIAtQnWzQmHm7HG9yN1mgOV3gY/uFp4KDVX+K5P8fLxzfa+gyd3hRv3S+8dz93At/3USsFN+MDwYCC31KwKAU/UvBaJagrChhJeJ53ncB13TOCZaWAgxWO4xwJ7s8JejsBN3SVgKsWtm0rR5ACy7KUh8jCCdM0lSOwuRcIqn/A+gvDMC6YwbxaoOu6cpV5iELTtOMIoxUeTx3TfgY8RCkg/AlhJM6FcENcM2Ff2FrC+vOGyD8Yvit5VS8OawAAAABJRU5ErkJggg==
//
// @match        https://mastodon.social/*
// @match        https://mastodon.cloud/*
// @match        https://mastodon.club/*
// @match        https://mastodon.host/*
// @match        https://mastodon.moe/*
// @match        https://mastodon.xyz/*
// @match        https://mastodon.art/*
// @match        https://masto.pt/*
// @match        https://switter.at/*
// @match        https://octodon.social/*
//
// @match        https://mstdn.jp/*
// @match        https://mstdn.cc/*
// @match        https://mstdn.fm/*
// @match        https://mstdn.tw/*
// @match        https://mstdn.io/*
//
// @match        https://mstdn.club/*
// @match        https://mstdn.blue/*
// @match        https://mstdn.beer/*
// @match        https://mstdn.guru/*
// @match        https://mstdn.love/*
//
// @match        https://pawoo.net/*
// @match        https://music.pawoo.net/*
// @match        https://friends.nico/*
// @match        https://mstdn.maud.io/*
// @match        https://*.theboss.tech/*
// @match        https://knzk.me/*
//
// @match        https://*.masto.host/*
// @match        https://*.m.to/*
// @match        https://*.hostdon.jp/*
// @match        https://*.mstdn.cloud/*
// @match        https://*.mastportal.info/*
// @match        https://*.chotto.moe/*
//
// @match        https://now.kibousoft.co.jp/*
// @match        https://mastodon.juggler.jp/*
// @match        https://alserver.jp/*
// @match        https://abyss.fun/*
// @match        https://mstdn.kemono-friends.info/*
// @match        https://mstdn.hokkaido.jp/*
// @match        https://iwatedon.net/*
// @match        https://tokamstdn.jp/*
// @match        https://ashikaga.link/*
// @match        https://odakyu.app/*
// @match        https://itabashi.0j0.jp/*
// @match        https://mstdn.tokyo/*
// @match        https://east.mstdn.tokyo/*
// @match        https://mstdn.ikebuku.ro/*
// @match        https://mstdn.msky.tokyo/*
// @match        https://mastodon.yokohama/*
// @match        https://tekkadon.manimani.cc/*
// @match        https://sukadon.cf/*
// @match        https://nagoyadon.jp/*
// @match        https://mstdn.osaka/*
// @match        https://minohdon.jp/*
// @match        https://ngndn.jp/*
// @match        https://biwakodon.com/*
// @match        https://mstdn-kanazawa.jp/*
// @match        https://mastodos.com/*
// @match        https://mastodon.wakayama.jp/*
// @match        https://mastodon.nara.jp/*
// @match        https://mstdn.hyogo.jp/*
// @match        https://mstdn.sanin.link/*
// @match        https://shikokudon.m.to/*
// @match        https://mstdn.fukuoka.jp/*
// @match        https://mastodon.oita.jp/*
// @match        https://mstdn.miyazaki.jp/*
// @match        https://tegedon.net/*
// @match        https://vocalodon.net/*
// @match        https://mikumikudance.cloud/*
// @match        https://mimumedon.com/*
// @match        https://kirakiratter.com/*
// @match        https://ro-mastodon.puyo.jp/*
// @match        https://qiitadon.com/*
// @match        https://hearthtodon.com/*
// @match        https://mathtod.online/*
// @match        https://imastodon.net/*
// @match        https://mstdn.tokyocameraclub.com/*
// @match        https://mstdn.poyo.me/*
// @match        https://hearthtodon.com/*
// @match        https://ffxiv-mastodon.com/*
// @match        https://ukadon.shillest.net/*
// @match        https://ro-mastodon.puyo.jp/*
// @match        https://ichiji.social/*
// @match        https://matchdon.com/*
// @match        https://otoya.space/*
// @match        https://mstdn.mimikun.jp/*
// @match        https://kirishima.cloud/*
// @match        https://doll.social/*
// @match        https://mastodoll.net/*
// @match        https://gorone.xyz/*
// @match        https://mstdn.inct-densan.club/*
// @match        https://fla.red/*
// @match        https://gingadon.com/*
// @match        https://pao.moe/*
// @match        https://dotdon.jp/*
//
// @match        https://misskey.xyz/*
// @match        https://misskey.jp/*
// @match        https://msk.kirigakure.net/*
// @match        https://misskey.m544.net/*
// @match        https://misskey.xps2.net/*
// @match        https://mewl.me/*
// @match        https://xn--6r8h.tk/*
// @match        https://misskey.barippi.com/*
// @match        https://msky.tokyo/*
// @match        https://misskey.myhome.cx/*
// @match        https://misskey.love/*
// @match        https://mk.kigurumi.fun/*
// @match        https://noir.pub/*
// @match        https://msky.naru.cafe/*
// @match        https://uselesslesbian.club/*
// @match        https://uhouho.xyz/*
// @match        https://yuzulia.xyz/*
// @match        https://misskey.nokotaro.com/*
// @match        https://msk.kirigakure.net/*
// @match        https://emoji.msky.work/*
// @match        https://819.blue/*
// @match        https://i.mi.xeltica.work/*
//
// @resource     MASTODON https://raw.githubusercontent.com/fedpla/InstanceTicker/master/InstanceTicker1.css
// @resource     MISSKEY https://raw.githubusercontent.com/fedpla/InstanceTicker/master/InstanceTickerMisskey1.css
//
// @grant        GM_addStyle
// @grant        GM_getResourceText
//
/*****************************************************
 * Special Thanks: popn_ja                           *
 *                                                   *
 * InstanceTickerDX.user.js                          *
 * https://github.com/fedpla/InstanceTicker          *
 ****************************************************/
//
//
/****************************************
 * 各自で、 match 追加してし。。  *
 ****************************************/
//
//
// ==/UserScript==


// ここに処理を記載する
(function(){
  var mstdn = 'mastodon';
  var misky = 'Misskey';  
/*var misky = 'Misskey|みすきーじぇーぴー';「みすきーじぇいぴー」閉鎖予定に伴い。*/

/* <meta name="application-name" content="Misskey"> がある場合、Misskey 判定する。 */
  var appn = document.getElementsByName('application-name').item(0);

/* <div class='app-holder' data-props='...' id='mastodon'> がある場合、Mastodon 判定する。 */
  var apph = document.getElementsByClassName('app-holder').item(0);

 if (apph != null && apph.id.match(mstdn)){
    GM_addStyle(GM_getResourceText('MASTODON'));
  } else if (appn != null && appn.content.match(misky)){
    GM_addStyle(GM_getResourceText('MISSKEY'));
  } else {
    /* app-holder の宣言なしの場合も Mastodon として対応。常に宣言しろよ！ */
    GM_addStyle(GM_getResourceText('MASTODON')); 
  }

})();
