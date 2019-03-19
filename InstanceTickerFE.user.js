// ==UserScript==
// @name         #InstanceTickerFE user.js
// @namespace    https://github.com/weepjp/InstanceTicker/
// @version      201903181509
// @description  #InstanceTickerFE は、Pleroma の Mastodon FE タイムライン上投稿者に所属インスタンス名を彩るカスタムCSSです。
// @author       weep https://weep.me/@weep (Special Thanks: popn_ja)
//
// @license      Original CSS © https://odakyu.app/@ars42525 and #InstanceTicker © 2018 https://weep.me/@weep Released under the MIT license https://opensource.org/licenses/MIT
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABG0lEQVQ4y6WTLWzCUBSFnwAxxMQEE5uYQMxMDIGYmamEjvCX2lVM0ASxpCOBZE1mSINA1CCqq6ura6urq6urz3oeKEiBPF7y2S/v3HuuCMMQURRJ4jhGkiSSNE2RZZkkz3NJURQ4fCIIAtQnWzQmHm7HG9yN1mgOV3gY/uFp4KDVX+K5P8fLxzfa+gyd3hRv3S+8dz93At/3USsFN+MDwYCC31KwKAU/UvBaJagrChhJeJ53ncB13TOCZaWAgxWO4xwJ7s8JejsBN3SVgKsWtm0rR5ACy7KUh8jCCdM0lSOwuRcIqn/A+gvDMC6YwbxaoOu6cpV5iELTtOMIoxUeTx3TfgY8RCkg/AlhJM6FcENcM2Ff2FrC+vOGyD8Yvit5VS8OawAAAABJRU5ErkJggg==
//
//
// @match        https://pleroma.soykaf.com/*
// @match        https://pleroma.gdgd.jp.net/*
// @match        https://plrm.ht164.jp/*
// @match        https://pleroma.vocalodon.net/*
// @match        https://pl.telteltel.com/*
// @match        https://shitposter.club/*
// @match        https://plero.ma/*
// @match        https://pleroma.site/*
// @match        https://3.distsn.org/*
// @match        https://kawen.space/*
// @match        https://ple.watachan.net/*
// @match        https://talknet.akabe.co/*
// @match        https://plrm.beanlog.xyz/*
// @match        https://pl.smuglo.li/*
// @match        https://sale.gauchiste.club/*
// @match        https://weeaboo.space/*
// @match        https://the.hedgehoghunter.club/*
// @match        https://social.sakamoto.gq/*
// @match        https://letsalllovela.in/*
// @match        https://iscute.moe/*
// @match        https://social.beepboop.ga/*
// @match        https://pleroma.nakanod.net/*
// @match        https://pleroma.io/*
// @match        https://rabbit.country/*
// @match        https://pla.social/*
// @match        https://pleroma7.pla1.net/*
// @match        https://pleroma.pla1.net/*
// @match        https://soliton.nonlinear.zone/*
// @match        https://social.toromino.de/*
// @match        https://social.libre.fi/*
// @match        https://p.a3.pm/*
// @match        https://tomo.airen-no-jikken.icu/*
// @match        https://cybre.club/*
// @match        https://pleroma.pptdn.jp/*
// @match        https://pleroma.xyz/*
//
//
// @resource     PLEFE https://raw.githubusercontent.com/fedpla/InstanceTicker/master/InstanceTickerPleroma1.css
// @resource     MASFE https://raw.githubusercontent.com/fedpla/InstanceTicker/master/InstanceTickerPleroma11.css
//
// @grant        GM_addStyle
// @grant        GM_getResourceText
//
//
/*****************************************************
 * Special Thanks: popn_ja                           *
 *                                                   *
 * InstanceTickerDX.user.js                          *
 * https://github.com/fedpla/InstanceTicker          *
 ****************************************************/
//
//
/*****************
 * ふぇ・・・　　 *
 ****************/
//
//
// ==/UserScript==

// ここに処理を記載する
(function(){


     GM_addStyle(GM_getResourceText('PLEFE')); /* Pleroma Fe (未対応になりそうなので将来廃止) */
     GM_addStyle(GM_getResourceText('MASFE')); /* Mastodon Fe */


})();

