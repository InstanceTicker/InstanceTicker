// ==UserScript==
// @name         #InstanceTicker (DX) user.js
// @namespace    https://github.com/weepjp/InstanceTicker
// @version      201902080533
// @description  #InstanceTicker DX は、 Mastodon, Misskey, Pleroma のタイムライン上投稿者に所属インスタンス名を彩るカスタムCSSです。
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
// @match        https://mastodon.juggler.jp/*@charset 'utf-8';
/*-----------------------------
 #InstanceTicker (Type-0) 201902062357.css
 https://wee.jp/mastodon/

 Copyright (c) 2018-2019 weepjp
 https://github.com/weepjp

 ORIGINAL CSS
 Copyright (c) kyori19
 https://github.com/kyori19

 Released under the MIT license
 https://opensource.org/licenses/MIT
/------------------------------*/
@keyframes fade{0%{opacity:0.1;}96%,to{opacity:1;}}
.status__info a[href^='https://social.senooken.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/0.png'),
linear-gradient(to left,transparent,#c77 )!important;background-repeat:no-repeat,no-repeat!important;content:'senooken.jp'!important;}
.status__info a[href^='https://js4.in/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/0.png'),
linear-gradient(to left,transparent,#c77 )!important;background-repeat:no-repeat,no-repeat!important;content:'js4.in'!important;}
.status__info a[href^='https://quitter.im/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/0.png'),
linear-gradient(to left,transparent,#c77 )!important;background-repeat:no-repeat,no-repeat!important;content:'quitter.im'!important;}
.status__info a[href^='https://social.bitcast.info/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/0.png'),
linear-gradient(to left,transparent,#c77 )!important;background-repeat:no-repeat,no-repeat!important;content:'bitcast.info'!important;}
.status__info a[href^='https://theboss.tech/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#666 )!important;background-repeat:no-repeat,no-repeat!important;content:'閉鎖済み'!important;}
.status__info a[href^='https://masi.theboss.tech/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#666 )!important;background-repeat:no-repeat,no-repeat!important;content:'閉鎖済み'!important;}
.status__info a[href^='https://pptdn.popnja.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#666 )!important;background-repeat:no-repeat,no-repeat!important;content:'閉鎖済み'!important;}
.status__info a[href^='https://mikuspot.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#666 )!important;background-repeat:no-repeat,no-repeat!important;content:'閉鎖済み'!important;}
.status__info a[href^='https://mstdn.nieein56.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#666 )!important;background-repeat:no-repeat,no-repeat!important;content:'閉鎖済み'!important;}
.status__info a[href^='https://fumufu.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#666 )!important;background-repeat:no-repeat,no-repeat!important;content:'閉鎖済み'!important;}
.status__info a[href^='https://newjack.city/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#666 )!important;background-repeat:no-repeat,no-repeat!important;content:'閉鎖済み'!important;}
.status__info a[href^='https://mobile.st/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#666 )!important;background-repeat:no-repeat,no-repeat!important;content:'閉鎖済み'!important;}
.status__info a[href^='https://bofa.lol/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#666 )!important;background-repeat:no-repeat,no-repeat!important;content:'閉鎖済み'!important;}
.status__info a[href^='https://ika.moe/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#666 )!important;background-repeat:no-repeat,no-repeat!important;content:'閉鎖済み'!important;}
.status__info a[href^='https://843.pl/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#666 )!important;background-repeat:no-repeat,no-repeat!important;content:'閉鎖済み'!important;}
.status__info a[href^='https://mstdn.selfhosting.rocks/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#666 )!important;background-repeat:no-repeat,no-repeat!important;content:'閉鎖済み'!important;}
.status__info a[href^='https://greenlifeplus.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#666 )!important;background-repeat:no-repeat,no-repeat!important;content:'閉鎖済み'!important;}
.status__info a[href^='https://misskey.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#666 )!important;background-repeat:no-repeat,no-repeat!important;content:'閉鎖済み'!important;}
.status__info a[href^='https://lifeisabug.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#666 )!important;background-repeat:no-repeat,no-repeat!important;content:'閉鎖済み'!important;}
.status__info a[href^='https://mstdn.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.jp'!important;}
.status__info a[href^='https://mstdn.cc/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.cc'!important;}
.status__info a[href^='https://mstdn.beer/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.beer'!important;}
.status__info a[href^='https://mstdn.blue/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.blue'!important;}
.status__info a[href^='https://mstdn.guru/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.guru'!important;}
.status__info a[href^='https://mstdn.tw/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.tw'!important;}
.status__info a[href^='https://mstdn.club/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.club'!important;}
.status__info a[href^='https://mstdn.love/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.love'!important;}
.status__info a[href^='https://mstdn.fm/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.fm'!important;}
.status__info a[href^='https://tablegame.mstdn.cloud/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'tablegame.mstdn.cloud'!important;}
.status__info a[href^='https://socialgame.mstdn.cloud/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'socialgame.mstdn.cloud'!important;}
.status__info a[href^='https://anime.mstdn.cloud/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'anime.mstdn.cloud'!important;}
.status__info a[href^='https://gamecreate.mstdn.cloud/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'gamecreate.mstdn.cloud'!important;}
.status__info a[href^='https://azurlane.mastportal.info/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'azurlane.mastportal.info'!important;}
.status__info a[href^='https://animal-crossing.mastportal.info/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'animal-crossing.mastportal.info'!important;}
.status__info a[href^='https://pokemon.mastportal.info/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'pokemon.mastportal.info'!important;}
.status__info a[href^='https://osomatsu.mastportal.info/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'osomatsu.mastportal.info'!important;}
.status__info a[href^='https://mastodon.chotto.moe/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.chotto.moe'!important;}
.status__info a[href^='https://jitakurack.chotto.moe/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'jitakurack.chotto.moe'!important;}
.status__info a[href^='https://mstdn.hostdon.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.hostdon.jp'!important;}
.status__info a[href^='https://chaosphere.hostdon.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#00f )!important;background-repeat:no-repeat,no-repeat!important;content:'カオスフィア'!important;}
.status__info a[href^='https://gldon.hostdon.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#0c0 )!important;background-repeat:no-repeat,no-repeat!important;content:'GLdon'!important;}
.status__info a[href^='https://mostodon.cloud/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mostodon.cloud'!important;}
.status__info a[href^='https://zhenya.masto.host/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'zhenya.masto.host'!important;}
.status__info a[href^='https://wndp.masto.host/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'wndp.masto.host'!important;}
.status__info a[href^='https://okadon.masto.host/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'okadon.masto.host'!important;}
.status__info a[href^='https://yukoyajp.masto.host/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'yukoyajp.masto.host'!important;}
.status__info a[href^='https://porkmeeting.masto.host/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'porkmeeting.masto.host'!important;}
.status__info a[href^='https://now.kibousoft.co.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'now.kibousoft.co.jp'!important;}
.status__info a[href^='https://pawoo.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'pawoo.net'!important;}
.status__info a[href^='https://music.pawoo.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'music.pawoo.net'!important;}
.status__info a[href^='https://friends.nico/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'friends.nico'!important;}
.status__info a[href^='https://knzk.me/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'knzk.me'!important;}
.status__info a[href^='https://mstdn-workers.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn-workers.com'!important;}
.status__info a[href^='https://mstdn.kemono-friends.info/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'ますとどんちほー'!important;}
.status__info a[href^='https://mstdn.hokkaido.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'北海丼 (北海道)'!important;}
.status__info a[href^='https://iwatedon.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'イワテドン (岩手)'!important;}
.status__info a[href^='https://tokamstdn.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'十日町市 (新潟)'!important;}
.status__info a[href^='https://ashikaga.link/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'足利市 (栃木)'!important;}
.status__info a[href^='https://odakyu.app/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'小田急don'!important;}
.status__info a[href^='https://itabashi.0j0.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'板橋丼'!important;}
.status__info a[href^='https://mstdn.tokyo/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'MastodonTokyo'!important;}
.status__info a[href^='https://east.mstdn.tokyo/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'東東京'!important;}
.status__info a[href^='https://mstdn.ikebuku.ro/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'Ikebuku.ro'!important;}
.status__info a[href^='https://mstdn.msky.tokyo/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'池袋丼 '!important;}
.status__info a[href^='https://mastodon.yokohama/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'横浜'!important;}
.status__info a[href^='https://tekkadon.manimani.cc/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'Tekkadon (三浦半島)'!important;}
.status__info a[href^='https://sukadon.cf/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'スカ丼 (横須賀市)'!important;}
.status__info a[href^='https://nagoyadon.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'名古屋丼'!important;}
.status__info a[href^='https://mstdn.osaka/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'大阪丼'!important;}
.status__info a[href^='https://minohdon.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'箕面どん (大阪)'!important;}
.status__info a[href^='https://ngndn.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'ナガノドン (長野)'!important;}
.status__info a[href^='https://biwakodon.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'びわ湖 (滋賀)'!important;}
.status__info a[href^='https://mstdn-kanazawa.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'金沢丼 (石川)'!important;}
.status__info a[href^='https://mastodos.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'マストどす (京都)'!important;}
.status__info a[href^='https://mastodon.wakayama.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'和歌山丼'!important;}
.status__info a[href^='https://mastodon.nara.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'鹿トドン (奈良)'!important;}
.status__info a[href^='https://mstdn.hyogo.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'兵庫丼'!important;}
.status__info a[href^='https://mstdn.sanin.link/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'山陰交通丼'!important;}
.status__info a[href^='https://shikokudon.m.to/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'四国丼'!important;}
.status__info a[href^='https://mstdn.fukuoka.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'ふくおかどん'!important;}
.status__info a[href^='https://mastodon.oita.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'Mastodon 大分'!important;}
.status__info a[href^='https://mstdn.miyazaki.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'MastoDongene 宮崎'!important;}
.status__info a[href^='https://tegedon.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#262 )!important;background-repeat:no-repeat,no-repeat!important;content:'てげどん (鹿児島)'!important;}
.status__info a[href^='https://mstdn.maud.io/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:28px!important;background: url('https://wee.jp/o/don.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.maud.io'!important;}
.status__info a[href^='https://mstdn.y-zu.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.y-zu.org'!important;}
.status__info a[href^='https://oransns.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'oransns.com'!important;}
.status__info a[href^='https://v2.nyoki.club/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'v2.nyoki.club'!important;}
.status__info a[href^='https://abyss.fun/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'abyss.fun'!important;}
.status__info a[href^='https://mstdn.nere9.help/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.nere9.help'!important;}
.status__info a[href^='https://mastodon.juggler.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.juggler.jp'!important;}
.status__info a[href^='https://ding-dong.asmodeus.tokyo/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'ding-dong.asmodeus.tokyo'!important;}
.status__info a[href^='https://mastodon-train.info/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon-train.info'!important;}
.status__info a[href^='https://mastodon.home.js4.in/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.home.js4.in'!important;}
.status__info a[href^='https://mstdn.komittee.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.komittee.net'!important;}
.status__info a[href^='https://mstdn.mimikun.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.mimikun.jp'!important;}
.status__info a[href^='https://mstdn.f72u.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.f72u.net'!important;}
.status__info a[href^='https://v1x3n.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'v1x3n.net'!important;}
.status__info a[href^='https://social.arnip.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'social.arnip.org'!important;}
.status__info a[href^='https://social.bluecore.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'social.bluecore.net'!important;}
.status__info a[href^='https://mstdn.asterism.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.asterism.xyz'!important;}
.status__info a[href^='https://gensokyo.town/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'gensokyo.town'!important;}
.status__info a[href^='https://social.mikutter.hachune.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'social.mikutter.hachune.net'!important;}
.status__info a[href^='https://pcgamer.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'pcgamer.social'!important;}
.status__info a[href^='https://dtp-mstdn.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'dtp-mstdn.jp'!important;}
.status__info a[href^='https://mstdn.h3z.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.h3z.jp'!important;}
.status__info a[href^='https://social.0ko.me/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'social.0ko.me'!important;}
.status__info a[href^='https://don.gomasy.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'don.gomasy.jp'!important;}
.status__info a[href^='https://mstdn.mini4wd-engineer.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:32px!important;background: url('https://wee.jp/o/mini4wd.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'ミニ四駆DON'!important;}
.status__info a[href^='https://claristdon.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'claristdon.net'!important;}
.status__info a[href^='https://claris.cf/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#003!important;padding-left:17px!important;background: url('https://wee.jp/o/claris_cf.png'),
linear-gradient(to left,transparent,#ffc7c8 )!important;background-repeat:no-repeat,no-repeat!important;content:'claris.cf'!important;}
.status__info a[href^='https://toot.playground.ws/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'toot.playground.ws'!important;}
.status__info a[href^='https://m.auri.ga/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'m.auri.ga'!important;}
.status__info a[href^='https://mastodon.motcha.tech/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.motcha.tech'!important;}
.status__info a[href^='https://mastodon.crazynewworld.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.crazynewworld.net'!important;}
.status__info a[href^='https://yakumo.foundation/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'yakumo.foundation'!important;}
.status__info a[href^='https://tsuki.network/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'tsuki.network'!important;}
.status__info a[href^='https://mstdn.awa.sfc.keio.ac.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.awa.sfc.keio.ac.jp'!important;}
.status__info a[href^='https://utodon.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'utodon.jp'!important;}
.status__info a[href^='https://taruntarun.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'taruntarun.net'!important;}
.status__info a[href^='https://si.pmpm.pw/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#000!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#fff,#fff )!important;background-repeat:no-repeat,no-repeat!important;content:'💌私信'!important;}
.status__info a[href^='https://raptol.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'raptol.net'!important;}
.status__info a[href^='https://mast.moe/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mast.moe'!important;}
.status__info a[href^='https://momoiro9.ro/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'momoiro9.ro'!important;}
.status__info a[href^='https://social.hideo54.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'social.hideo54.com'!important;}
.status__info a[href^='https://under-bank.blue/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'under-bank.blue'!important;}
.status__info a[href^='https://raspidon.mamemo.online/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'raspidon.mamemo.online'!important;}
.status__info a[href^='https://sukebeneko.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'sukebeneko.com'!important;}
.status__info a[href^='https://vocalodon.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'vocalodon.net'!important;}
.status__info a[href^='https://mstdn.tomokiwakimoto.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.tomokiwakimoto.com'!important;}
.status__info a[href^='https://39sounds.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'39sounds.net'!important;}
.status__info a[href^='https://mikumikudance.cloud/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mikumikudance.cloud'!important;}
.status__info a[href^='https://iguanodon.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'iguanodon.net'!important;}
.status__info a[href^='https://ertona.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'ertona.net'!important;}
.status__info a[href^='https://alserver.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'alserver.jp'!important;}
.status__info a[href^='https://msdnaart.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'msdnaart.net'!important;}
.status__info a[href^='https://don.mamemo.online/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'don.mamemo.online'!important;}
.status__info a[href^='https://mastodon.lithium03.info/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.lithium03.info'!important;}
.status__info a[href^='https://mstdn.poyo.me/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.poyo.me'!important;}
.status__info a[href^='https://ro-mastodon.puyo.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'ro-mastodon.puyo.jp'!important;}
.status__info a[href^='https://toot.yukimochi.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'toot.yukimochi.jp'!important;}
.status__info a[href^='https://mustardon.tokyo/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mustardon.tokyo'!important;}
.status__info a[href^='https://setl.ist/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'setl.ist'!important;}
.status__info a[href^='https://mst.m544.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mst.m544.net'!important;}
.status__info a[href^='https://prinsesse.co/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'prinsesse.co'!important;}
.status__info a[href^='https://orikilli.yaruki0.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'orikilli.yaruki0.net'!important;}
.status__info a[href^='https://mstdn.rinsuki.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.rinsuki.net'!important;}
.status__info a[href^='https://rainyman.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'rainyman.jp'!important;}
.status__info a[href^='https://mstdn.kanagu.info/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.kanagu.info'!important;}
.status__info a[href^='https://mastodon.cardina1.red/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.cardina1.red'!important;}
.status__info a[href^='https://mastodon.zunda.ninja/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.zunda.ninja'!important;}
.status__info a[href^='https://isidai.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'isidai.com'!important;}
.status__info a[href^='https://tebukuro.pw/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'tebukuro.pw'!important;}
.status__info a[href^='https://tebukuro.m.to/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'tebukuro.m.to'!important;}
.status__info a[href^='https://mstdn.taiyaki.online/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/o/taiyaki.png'),
linear-gradient(to left,transparent,#c4972f )!important;background-repeat:no-repeat,no-repeat!important;content:'たいやきん家'!important;}
.status__info a[href^='https://cironnup.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'cironnup.com'!important;}
.status__info a[href^='https://mastodon.matcha-soft.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.matcha-soft.com'!important;}
.status__info a[href^='https://md.ggtea.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'md.ggtea.org'!important;}
.status__info a[href^='https://altdn.me/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'altdn.me'!important;}
.status__info a[href^='https://matitodon.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'matitodon.com'!important;}
.status__info a[href^='https://handon.club/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'handon.club'!important;}
.status__info a[href^='https://gamelinks007.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'gamelinks007.net'!important;}
.status__info a[href^='https://mstdn.fujii-yuji.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.fujii-yuji.net'!important;}
.status__info a[href^='https://tl.telmina.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#008060 )!important;background-repeat:no-repeat,no-repeat!important;content:'Telmina’s TL'!important;}
.status__info a[href^='https://s2.libera.blue/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#004ea2 )!important;background-repeat:no-repeat,no-repeat!important;content:'LIBERA S2'!important;}
.status__info a[href^='https://imastodon.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'imastodon.net'!important;}
.status__info a[href^='https://gorone.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'gorone.xyz'!important;}
.status__info a[href^='https://ffxiv-mastodon.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'ffxiv-mastodon.com'!important;}
.status__info a[href^='https://syasai.club/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'syasai.club'!important;}
.status__info a[href^='https://mstdn.precure.fun/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.precure.fun'!important;}
.status__info a[href^='https://mstdn.inct-densan.club/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.inct-densan.club'!important;}
.status__info a[href^='https://muknown.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'muknown.jp'!important;}
.status__info a[href^='https://mastodon.potproject.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.potproject.net'!important;}
.status__info a[href^='https://popon.pptdn.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'popon.pptdn.jp'!important;}
.status__info a[href^='https://yysk.icu/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'yysk.icu'!important;}
.status__info a[href^='https://toot.blue/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'toot.blue'!important;}
.status__info a[href^='https://mstdn.gtn-works.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.gtn-works.com'!important;}
.status__info a[href^='https://angraecumnote.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'angraecumnote.net'!important;}
.status__info a[href^='https://real-escape.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'real-escape.jp'!important;}
.status__info a[href^='https://ukadon.shillest.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'ukadon.shillest.net'!important;}
.status__info a[href^='https://don.neso.tech/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'don.neso.tech'!important;}
.status__info a[href^='https://mastodon.snowandtweet.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.snowandtweet.jp'!important;}
.status__info a[href^='https://mstdn.klamath.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.klamath.jp'!important;}
.status__info a[href^='https://mathtod.online/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mathtod.online'!important;}
.status__info a[href^='https://seichi.work/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'seichi.work'!important;}
.status__info a[href^='https://steam-don.fun/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'steam-don.fun'!important;}
.status__info a[href^='https://mstdn.kurosuke.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.kurosuke.org'!important;}
.status__info a[href^='https://felesitas.cloud/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'felesitas.cloud'!important;}
.status__info a[href^='https://mstdn.res.ac/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.res.ac'!important;}
.status__info a[href^='https://mdn.hinaloe.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mdn.hinaloe.net'!important;}
.status__info a[href^='https://mstdn.dasoran.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.dasoran.net'!important;}
.status__info a[href^='https://fla.red/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'fla.red'!important;}
.status__info a[href^='https://qiitadon.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'qiitadon.com'!important;}
.status__info a[href^='https://mstdn.soysoftware.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.soysoftware.net'!important;}
.status__info a[href^='https://otogamer.me/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'otogamer.me'!important;}
.status__info a[href^='https://otoya.space/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'otoya.space'!important;}
.status__info a[href^='https://photodn.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'photodn.net'!important;}
.status__info a[href^='https://mstdn.ryanak.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.ryanak.xyz'!important;}
.status__info a[href^='https://digineko.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'digineko.jp'!important;}
.status__info a[href^='https://don.m2hq.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'don.m2hq.net'!important;}
.status__info a[href^='https://mstdn.unasuke.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.unasuke.com'!important;}
.status__info a[href^='https://mastodon.osyakasyama.me/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.osyakasyama.me'!important;}
.status__info a[href^='https://testingmstdn.abcang.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'testingmstdn.abcang.net'!important;}
.status__info a[href^='https://hige.alterna-cloud.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'hige.alterna-cloud.com'!important;}
.status__info a[href^='https://mstdn.xn--h1ahnbk7d.xn--p1ai/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.сумирэ.рф'!important;}
.status__info a[href^='https://mstdn.a-tak.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.a-tak.com'!important;}
.status__info a[href^='https://shiroganedon.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'shiroganedon.net'!important;}
.status__info a[href^='https://gingadon.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'gingadon.com'!important;}
.status__info a[href^='https://mstdn.haun.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.haun.jp'!important;}
.status__info a[href^='https://pao.moe/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'pao.moe'!important;}
.status__info a[href^='https://mstdn.kuriuzu.tk/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.kuriuzu.tk'!important;}
.status__info a[href^='https://amemiya.work/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'amemiya.work'!important;}
.status__info a[href^='https://mstdn.glorificatio.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.glorificatio.org'!important;}
.status__info a[href^='https://meganekeesu.tokyo/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'meganekeesu.tokyo'!important;}
.status__info a[href^='https://mastodooooooon.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodooooooon.xyz'!important;}
.status__info a[href^='https://md.xps2.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'md.xps2.net'!important;}
.status__info a[href^='https://solna.in/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'solna.in'!important;}
.status__info a[href^='https://gadget.inpocket.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'gadget.inpocket.net'!important;}
.status__info a[href^='https://wug.fun/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'wug.fun'!important;}
.status__info a[href^='https://netstat.app/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'netstat.app'!important;}
.status__info a[href^='https://kakudon.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'kakudon.com'!important;}
.status__info a[href^='https://social.kimamass.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'social.kimamass.com'!important;}
.status__info a[href^='https://qnmd.info/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'qnmd.info'!important;}
.status__info a[href^='https://kuroringo.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'kuroringo.com'!important;}
.status__info a[href^='https://mstdn.yakitamago.info/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.yakitamago.info'!important;}
.status__info a[href^='https://makimaki.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'makimaki.jp'!important;}
.status__info a[href^='https://mstdn.nekonote.cc/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.nekonote.cc'!important;}
.status__info a[href^='https://kurage.cc/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'kurage.cc'!important;}
.status__info a[href^='https://mstdn.atcurio.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.atcurio.com'!important;}
.status__info a[href^='https://junkhub.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'junkhub.org'!important;}
.status__info a[href^='https://cpper.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'cpper.xyz'!important;}
.status__info a[href^='https://yamaken.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'yamaken.jp'!important;}
.status__info a[href^='https://gnosia.info/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'gnosia.info'!important;}
.status__info a[href^='https://omochi.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'omochi.xyz'!important;}
.status__info a[href^='https://mosw.work/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mosw.work'!important;}
.status__info a[href^='https://mastodon.tmp1024.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.tmp1024.com'!important;}
.status__info a[href^='https://obitsudon.midyuki.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'obitsudon.midyuki.net'!important;}
.status__info a[href^='https://grain.izayoiwind.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'grain.izayoiwind.net'!important;}
.status__info a[href^='https://mstdn.kessai-otaku.club/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.kessai-otaku.club'!important;}
.status__info a[href^='https://md.paoon.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'md.paoon.social'!important;}
.status__info a[href^='https://yakiniku.cloud/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'yakiniku.cloud'!important;}
.status__info a[href^='https://kirishima.cloud/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'kirishima.cloud'!important;}
.status__info a[href^='https://sandbox.skoji.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'sandbox.skoji.jp'!important;}
.status__info a[href^='https://bookwor.ms/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'bookwor.ms'!important;}
.status__info a[href^='https://www.mstddntfdn.online/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'www.mstddntfdn.online'!important;}
.status__info a[href^='https://mstdn.imoimo.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.imoimo.xyz'!important;}
.status__info a[href^='https://mstdn.schoolidol.club/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.schoolidol.club'!important;}
.status__info a[href^='https://homoo.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'homoo.social'!important;}
.status__info a[href^='https://mstdn-jp.site/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn-jp.site'!important;}
.status__info a[href^='https://flower.afn.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'flower.afn.social'!important;}
.status__info a[href^='https://kancolle.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'kancolle.social'!important;}
.status__info a[href^='https://august-don.site/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'august-don.site'!important;}
.status__info a[href^='https://precure.ml/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'precure.ml'!important;}
.status__info a[href^='https://blessedgeeks.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'blessedgeeks.org'!important;}
.status__info a[href^='https://kero.ccsakura.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'kero.ccsakura.jp'!important;}
.status__info a[href^='https://mstdn.hinabita.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.hinabita.com'!important;}
.status__info a[href^='https://clonis.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'clonis.xyz'!important;}
.status__info a[href^='https://animedon.chao.tokyo/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'animedon.chao.tokyo'!important;}
.status__info a[href^='https://mochiwasadon.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mochiwasadon.com'!important;}
.status__info a[href^='https://hexadon.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'hexadon.net'!important;}
.status__info a[href^='https://mastdon.amazedkoumei.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastdon.amazedkoumei.com'!important;}
.status__info a[href^='https://mastodon.kitchen/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.kitchen'!important;}
.status__info a[href^='https://kemonodon.club/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'kemonodon.club'!important;}
.status__info a[href^='https://ichiji.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'ichiji.social'!important;}
.status__info a[href^='https://wasaradan.m.to/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'wasaradan.m.to'!important;}
.status__info a[href^='https://mstdn-bike.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn-bike.net'!important;}
.status__info a[href^='https://mstdn.tokyocameraclub.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.tokyocameraclub.com'!important;}
.status__info a[href^='https://mental.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mental.social'!important;}
.status__info a[href^='https://nitiasa.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'nitiasa.com'!important;}
.status__info a[href^='https://nt.mstdon.app/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'nt.mstdon.app'!important;}
.status__info a[href^='https://mstdn.vtube.media/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.vtube.media'!important;}
.status__info a[href^='https://plasticmodels.tokyo/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'plasticmodels.tokyo'!important;}
.status__info a[href^='https://m6n.onsen.tech/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'m6n.onsen.tech'!important;}
.status__info a[href^='https://syamutodon.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'syamutodon.xyz'!important;}
.status__info a[href^='https://mstdn.yjsnpi.nu/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.yjsnpi.nu'!important;}
.status__info a[href^='https://foresdon.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'foresdon.jp'!important;}
.status__info a[href^='https://mzn-potatochips.me/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mzn-potatochips.me'!important;}
.status__info a[href^='https://steam-don.fun/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'steam-don.fun'!important;}
.status__info a[href^='https://mastodol.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodol.jp'!important;}
.status__info a[href^='https://mstdn.futaba-works.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.futaba-works.com'!important;}
.status__info a[href^='https://mstdn.cosplayer.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.cosplayer.com'!important;}
.status__info a[href^='https://mstdn.moe-max.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.moe-max.jp'!important;}
.status__info a[href^='https://xn--zck4ad5f2e.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'マストドン.jp'!important;}
.status__info a[href^='https://ef67.myhome.cx/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'ef67.myhome.cx'!important;}
.status__info a[href^='https://mstdn.binfish.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.binfish.jp'!important;}
.status__info a[href^='https://justodon.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'justodon.net'!important;}
.status__info a[href^='https://mastodon.noraworld.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.noraworld.jp'!important;}
.status__info a[href^='https://mstdn.cosnomi.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.cosnomi.com'!important;}
.status__info a[href^='https://mimumedon.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mimumedon.com'!important;}
.status__info a[href^='https://mstdn.ht164.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.ht164.jp'!important;}
.status__info a[href^='https://naokisz.tk/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'naokisz.tk'!important;}
.status__info a[href^='https://z-flag.work/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'z-flag.work'!important;}
.status__info a[href^='https://catdon.life/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'catdon.life'!important;}
.status__info a[href^='https://foodon.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'foodon.jp'!important;}
.status__info a[href^='https://plustodon.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/o/plustodon.png'),
linear-gradient(to left,transparent,#db4437 )!important;background-repeat:no-repeat,no-repeat!important;content:'+Plustodon'!important;}
.status__info a[href^='https://7144.party/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'7144.party'!important;}
.status__info a[href^='https://mastodon.diglateam3.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.diglateam3.com'!important;}
.status__info a[href^='https://netherdon.nyadobe.online/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#dc632c )!important;background-repeat:no-repeat,no-repeat!important;content:'Netherdon'!important;}
.status__info a[href^='https://maho.app/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'maho.app'!important;}
.status__info a[href^='https://backyard.cloud/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'backyard.cloud'!important;}
.status__info a[href^='https://hearthtodon.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'hearthtodon.com'!important;}
.status__info a[href^='https://hakorena.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'hakorena.net'!important;}
.status__info a[href^='https://mstdn.toyoko.in/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.toyoko.in'!important;}
.status__info a[href^='https://mstdn.square-rooty.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.square-rooty.org'!important;}
.status__info a[href^='https://artritelacy.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'artritelacy.jp'!important;}
.status__info a[href^='https://ika.queloud.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'ika.queloud.net'!important;}
.status__info a[href^='https://eletusk.club/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'eletusk.club'!important;}
.status__info a[href^='https://manhole.club/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'manhole.club'!important;}
.status__info a[href^='https://heislandmine.work/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'heislandmine.work'!important;}
.status__info a[href^='https://mstdn.sasachi.tokyo/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.sasachi.tokyo'!important;}
.status__info a[href^='https://mstdn.ropo.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.ropo.jp'!important;}
.status__info a[href^='https://ykzts.technology/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'ykzts.technology'!important;}
.status__info a[href^='https://kiritan.work/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'kiritan.work'!important;}
.status__info a[href^='https://kemoshi.co/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'kemoshi.co'!important;}
.status__info a[href^='https://mastodon.bitbank.cc/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.bitbank.cc'!important;}
.status__info a[href^='https://mstdn.camera/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.camera'!important;}
.status__info a[href^='https://danshudon.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'danshudon.jp'!important;}
.status__info a[href^='https://googoldon.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'googoldon.net'!important;}
.status__info a[href^='https://weep.me/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'weep.me'!important;}
.status__info a[href^='https://unnerv.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#e12 )!important;background-repeat:no-repeat,no-repeat!important;content:'unnerv.jp'!important;}
.status__info a[href^='https://mstdn.nil.nu/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.nil.nu'!important;}
.status__info a[href^='https://mstdn.misosi.ru/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.misosi.ru'!important;}
.status__info a[href^='https://don.8mitsu.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'don.8mitsu.net'!important;}
.status__info a[href^='https://mstdn.b-shock.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.b-shock.org'!important;}
.status__info a[href^='https://ma.fono.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'ma.fono.jp'!important;}
.status__info a[href^='https://comm.cx/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'comm.cx'!important;}
.status__info a[href^='https://shimaidon.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'shimaidon.net'!important;}
.status__info a[href^='https://terusid.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'terusid.com'!important;}
.status__info a[href^='https://svrdn.drillion.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'svrdn.drillion.net'!important;}
.status__info a[href^='https://pekepeke.work/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'pekepeke.work'!important;}
.status__info a[href^='https://popon.pptdn.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#fb5 )!important;background-repeat:no-repeat,no-repeat!important;content:'popon.pptdn.jp'!important;}
.status__info a[href^='https://social.edge4cube.work/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'edge4cube.work'!important;}
.status__info a[href^='https://waraiotoko.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'waraiotoko.net'!important;}
.status__info a[href^='https://mstdn.boxp.tk/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.boxp.tk'!important;}
.status__info a[href^='https://gamecluster.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'gamecluster.net'!important;}
.status__info a[href^='https://fetishdon.tk/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'fetishdon.tk'!important;}
.status__info a[href^='https://doll.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/o/doll.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'doll.social'!important;}
.status__info a[href^='https://mastodoll.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/o/doll.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodoll.net'!important;}
.status__info a[href^='https://hack.syscaller.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'hack.syscaller.jp'!important;}
.status__info a[href^='https://mstdn.dgm.pw/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.dgm.pw'!important;}
.status__info a[href^='https://gochisou.photo/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'gochisou.photo'!important;}
.status__info a[href^='https://mstdn.ijs01140.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.ijs01140.com'!important;}
.status__info a[href^='https://toot.loner.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'toot.loner.jp'!important;}
.status__info a[href^='https://m.upsilo.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'m.upsilo.net'!important;}
.status__info a[href^='https://mikado-city.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mikado-city.jp'!important;}
.status__info a[href^='https://mstdn-amadeus.tech/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn-amadeus.tech'!important;}
.status__info a[href^='https://akanechan.love/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'akanechan.love'!important;}
.status__info a[href^='https://mstdn.plusminus.io/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.plusminus.io'!important;}
.status__info a[href^='https://machida.yokohama/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'machida.yokohama'!important;}
.status__info a[href^='https://djanzu.tokyo/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'djanzu.tokyo'!important;}
.status__info a[href^='https://stellaria.network/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'stellaria.network'!important;}
.status__info a[href^='https://m.aqr.af/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'m.aqr.af'!important;}
.status__info a[href^='https://twitchain.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'twitchain.net'!important;}
.status__info a[href^='https://cute2d.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'cute2d.xyz'!important;}
.status__info a[href^='https://tokotodon.m.to/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'tokotodon.m.to'!important;}
.status__info a[href^='https://mastodon.tackman.info/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.tackman.info'!important;}
.status__info a[href^='https://ap.kitahina.co/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'ap.kitahina.co'!important;}
.status__info a[href^='https://don.thinaticsystem.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'don.thinaticsystem.com'!important;}
.status__info a[href^='https://ap.kitahina.co/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'ap.kitahina.co'!important;}
.status__info a[href^='https://wlw.pw/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'wlw.pw'!important;}
.status__info a[href^='https://mstdn.ryecroft21.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.ryecroft21.net'!important;}
.status__info a[href^='https://dotdon.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'dotdon.jp'!important;}
.status__info a[href^='https://vapers.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'vapers.jp'!important;}
.status__info a[href^='https://gorone-xyz.noellabo.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'gorone-xyz.noellabo.jp'!important;}
.status__info a[href^='https://mstdn.ponseta.ga/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.ponseta.ga'!important;}
.status__info a[href^='https://hakomas.cf/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'hakomas.cf'!important;}
.status__info a[href^='https://pomdon.top/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'pomdon.top'!important;}
.status__info a[href^='https://9177xe.tokyo/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'9177xe.tokyo'!important;}
.status__info a[href^='https://mstdn.tamag.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.tamag.org'!important;}
.status__info a[href^='https://md.objektiv2.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'md.objektiv2.net'!important;}
.status__info a[href^='https://mstdn.toad-in-the-hole.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/1.png'),
linear-gradient(to left,transparent,#26a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.toad-in-the-hole.net'!important;}
.status__info a[href^='https://mastodon.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.social'!important;}
.status__info a[href^='https://mastodon.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.xyz'!important;}
.status__info a[href^='https://mastodon.cloud/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.cloud'!important;}
.status__info a[href^='https://mastodon.host/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.host'!important;}
.status__info a[href^='https://mastodon.art/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.art'!important;}
.status__info a[href^='https://mastodon.club/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.club'!important;}
.status__info a[href^='https://mastodon.at/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.at'!important;}
.status__info a[href^='https://mastodon.technology/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.technology'!important;}
.status__info a[href^='https://quey.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'quey.org'!important;}
.status__info a[href^='https://humblr.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'humblr.social'!important;}
.status__info a[href^='https://masto.pt/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'masto.pt'!important;}
.status__info a[href^='https://niu.moe/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'niu.moe'!important;}
.status__info a[href^='https://mstdn.io/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.io'!important;}
.status__info a[href^='https://octodon.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'octodon.social'!important;}
.status__info a[href^='https://cybre.space/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'cybre.space'!important;}
.status__info a[href^='https://mamot.fr/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mamot.fr'!important;}
.status__info a[href^='https://kirakiratter.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'kirakiratter.com'!important;}
.status__info a[href^='https://switter.at/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'switter.at'!important;}
.status__info a[href^='https://glitch.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'glitch.social'!important;}
.status__info a[href^='https://ephemeral.glitch.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'ephemeral.glitch.social'!important;}
.status__info a[href^='https://twingyeo.kr/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'Twingyeo (트잉여)'!important;}
.status__info a[href^='https://occult.camp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'occult.camp'!important;}
.status__info a[href^='https://awooo.club/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'awooo.club'!important;}
.status__info a[href^='https://shelter.moe/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'shelter.moe'!important;}
.status__info a[href^='https://framapiaf.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'framapiaf.org'!important;}
.status__info a[href^='https://diaspodon.fr/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'diaspodon.fr'!important;}
.status__info a[href^='https://queer.town/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'queer.town'!important;}
.status__info a[href^='https://witchcraft.cafe/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'witchcraft.cafe'!important;}
.status__info a[href^='https://eldritch.cafe/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'eldritch.cafe'!important;}
.status__info a[href^='https://radical.town/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'radical.town'!important;}
.status__info a[href^='https://jorts.horse/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'jorts.horse'!important;}
.status__info a[href^='https://sunbeam.city/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'sunbeam.city'!important;}
.status__info a[href^='https://hostux.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'hostux.social'!important;}
.status__info a[href^='https://chaos.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'chaos.social'!important;}
.status__info a[href^='https://cmx.im/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'长毛象中文站'!important;}
.status__info a[href^='https://qoto.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'qoto.org'!important;}
.status__info a[href^='https://guillotines.masto.host/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'guillotines.masto.host'!important;}
.status__info a[href^='https://todon.nl/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'todon.nl'!important;}
.status__info a[href^='https://toot.cat/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'toot.cat'!important;}
.status__info a[href^='https://fosstodon.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'fosstodon.org'!important;}
.status__info a[href^='https://wandering.shop/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'wandering.shop'!important;}
.status__info a[href^='https://mastodon.sdf.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.sdf.org'!important;}
.status__info a[href^='https://icosahedron.website/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'icosahedron.website'!important;}
.status__info a[href^='https://soc.ialis.me/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'soc.ialis.me'!important;}
.status__info a[href^='https://cryptids.online/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'cryptids.online'!important;}
.status__info a[href^='https://wxw.moe/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'(｀・ω・´) 嘟嘟噜'!important;}
.status__info a[href^='https://toot.cafe/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'toot.cafe'!important;}
.status__info a[href^='https://mastodon.tetaneutral.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.tetaneutral.net'!important;}
.status__info a[href^='https://social.taker.fr/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'social.taker.fr'!important;}
.status__info a[href^='https://elekk.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'elekk.xyz'!important;}
.status__info a[href^='https://yiff.life/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'yiff.life'!important;}
.status__info a[href^='https://playvicious.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'playvicious.social'!important;}
.status__info a[href^='https://twinja.club/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'twinja.club'!important;}
.status__info a[href^='https://4eva.online/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'4eva.online'!important;}
.status__info a[href^='https://shelter.moe/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'shelter.moe'!important;}
.status__info a[href^='https://aus.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'aus.social'!important;}
.status__info a[href^='https://social.coop/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'social.coop'!important;}
.status__info a[href^='https://chitter.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'chitter.xyz'!important;}
.status__info a[href^='https://mastodon.ketchupma.io/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.ketchupma.io'!important;}
.status__info a[href^='https://gensokyo.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'gensokyo.social'!important;}
.status__info a[href^='https://chat.cdstm.ch/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'chat.cdstm.ch'!important;}
.status__info a[href^='https://kosmos.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'kosmos.social'!important;}
.status__info a[href^='https://whomst.dog/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'whomst.dog'!important;}
.status__info a[href^='https://toot.la/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'toot.la'!important;}
.status__info a[href^='https://qaf.men/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'qaf.men'!important;}
.status__info a[href^='https://innerwebs.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'innerwebs.social'!important;}
.status__info a[href^='https://pony.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'pony.social'!important;}
.status__info a[href^='https://snouts.online/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'snouts.online'!important;}
.status__info a[href^='https://appdot.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'appdot.net'!important;}
.status__info a[href^='https://mast.eu.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mast.eu.org'!important;}
.status__info a[href^='https://queer.party/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'queer.party'!important;}
.status__info a[href^='https://mao.daizhige.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mao.daizhige.org'!important;}
.status__info a[href^='https://the.goofs.space/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'the.goofs.space'!important;}
.status__info a[href^='https://witches.live/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'witches.live'!important;}
.status__info a[href^='https://social.targaryen.house/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'social.targaryen.house'!important;}
.status__info a[href^='https://social.homunyan.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'social.homunyan.com'!important;}
.status__info a[href^='https://toot.chat/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'toot.chat'!important;}
.status__info a[href^='https://uwu.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'uwu.social'!important;}
.status__info a[href^='https://donphan.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'donphan.social'!important;}
.status__info a[href^='https://mastd.racing/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastd.racing'!important;}
.status__info a[href^='https://die-partei.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'die-partei.social'!important;}
.status__info a[href^='https://en.osm.town/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'en.osm.town'!important;}
.status__info a[href^='https://noagendasocial.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'noagendasocial.com'!important;}
.status__info a[href^='https://nulled.red/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'nulled.red'!important;}
.status__info a[href^='https://toot-lab.reclaim.technology/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'toot-lab.reclaim.technology'!important;}
.status__info a[href^='https://kitty.town/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'kitty.town'!important;}
.status__info a[href^='https://social.wxcafe.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'social.wxcafe.net'!important;}
.status__info a[href^='https://infosec.exchange/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'infosec.exchange'!important;}
.status__info a[href^='https://computerfairi.es/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'computerfairi.es'!important;}
.status__info a[href^='https://social.imirhil.fr/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'social.imirhil.fr'!important;}
.status__info a[href^='https://birdsite.link/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'birdsite.link'!important;}
.status__info a[href^='https://animeisgay.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'animeisgay.com'!important;}
.status__info a[href^='https://deadinsi.de/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'deadinsi.de'!important;}
.status__info a[href^='https://comicscamp.club/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'comicscamp.club'!important;}
.status__info a[href^='https://banana.dog/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'banana.dog'!important;}
.status__info a[href^='https://fellies.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'fellies.social'!important;}
.status__info a[href^='https://mast.datamol.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mast.datamol.org'!important;}
.status__info a[href^='https://royalaid.me/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'royalaid.me'!important;}
.status__info a[href^='https://mstdn.quebec.gq/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mstdn.quebec.gq'!important;}
.status__info a[href^='https://mastodon.lubar.me/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.lubar.me'!important;}
.status__info a[href^='https://toot.devfs.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'toot.devfs.xyz'!important;}
.status__info a[href^='https://glasses.moe/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'glasses.moe'!important;}
.status__info a[href^='https://social.linux.pizza/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'social.linux.pizza'!important;}
.status__info a[href^='https://social.dropbear.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'social.dropbear.xyz'!important;}
.status__info a[href^='https://hellsite.tyronesama.moe/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'hellsite.tyronesama.moe'!important;}
.status__info a[href^='https://producers.masto.host/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'producers.masto.host'!important;}
.status__info a[href^='https://mastodon.macsnet.cz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.macsnet.cz'!important;}
.status__info a[href^='https://calc.news/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'calc.news'!important;}
.status__info a[href^='https://ramses.amicidelbaretto.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'ramses.amicidelbaretto.org'!important;}
.status__info a[href^='https://social.unextro.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'social.unextro.net'!important;}
.status__info a[href^='https://mastodon.barkshark.tk/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'mastodon.barkshark.tk'!important;}
.status__info a[href^='https://beach.city/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'beach.city'!important;}
.status__info a[href^='https://takeoverthe.world/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'takeoverthe.world'!important;}
.status__info a[href^='https://miaou.drycat.fr/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'miaou.drycat.fr'!important;}
.status__info a[href^='https://onster.farm/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'onster.farm'!important;}
.status__info a[href^='https://plush.city/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'plush.city'!important;}
.status__info a[href^='https://es.muy.moe/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'es.muy.moe'!important;}
.status__info a[href^='https://botsin.space/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'botsin.space'!important;}
.status__info a[href^='https://berries.space/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/2.png'),
linear-gradient(to left,transparent,#46a )!important;background-repeat:no-repeat,no-repeat!important;content:'berries.space'!important;}
.status__info a[href^='https://pleroma.soykaf.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'pleroma.soykaf.com'!important;}
.status__info a[href^='https://pleroma.gdgd.jp.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'pleroma.gdgd.jp.net'!important;}
.status__info a[href^='https://plrm.ht164.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'plrm.ht164.jp'!important;}
.status__info a[href^='https://pleroma.vocalodon.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'pleroma.vocalodon.net'!important;}
.status__info a[href^='https://pl.telteltel.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'pl.telteltel.com'!important;}
.status__info a[href^='https://shitposter.club/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'shitposter.club'!important;}
.status__info a[href^='https://plero.ma/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'plero.ma'!important;}
.status__info a[href^='https://pleroma.site/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'pleroma.site'!important;}
.status__info a[href^='https://3.distsn.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'3.distsn.org'!important;}
.status__info a[href^='https://kawen.space/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'kawen.space'!important;}
.status__info a[href^='https://ple.watachan.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'ple.watachan.net'!important;}
.status__info a[href^='https://talknet.akabe.co/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'talknet.akabe.co'!important;}
.status__info a[href^='https://plrm.beanlog.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'plrm.beanlog.xyz'!important;}
.status__info a[href^='https://pl.smuglo.li/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'pl.smuglo.li'!important;}
.status__info a[href^='https://sale.gauchiste.club/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'sale.gauchiste.club'!important;}
.status__info a[href^='https://weeaboo.space/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'weeaboo.space'!important;}
.status__info a[href^='https://the.hedgehoghunter.club/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'the.hedgehoghunter.club'!important;}
.status__info a[href^='https://social.sakamoto.gq/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'social.sakamoto.gq'!important;}
.status__info a[href^='https://letsalllovela.in/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'letsalllovela.in'!important;}
.status__info a[href^='https://iscute.moe/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'iscute.moe'!important;}
.status__info a[href^='https://social.beepboop.ga/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'social.beepboop.ga'!important;}
.status__info a[href^='https://pleroma.nakanod.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'pleroma.nakanod.net'!important;}
.status__info a[href^='https://pleroma.io/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'pleroma.io'!important;}
.status__info a[href^='https://rabbit.country/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'rabbit.country'!important;}
.status__info a[href^='https://pla.social/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'pla.social'!important;}
.status__info a[href^='https://pleroma7.pla1.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'pleroma7.pla1.net'!important;}
.status__info a[href^='https://pleroma.pla1.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'pleroma.pla1.net'!important;}
.status__info a[href^='https://soliton.nonlinear.zone/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'soliton.nonlinear.zone'!important;}
.status__info a[href^='https://social.toromino.de/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'social.toromino.de'!important;}
.status__info a[href^='https://social.libre.fi/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'social.libre.fi'!important;}
.status__info a[href^='https://p.a3.pm/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'p.a3.pm'!important;}
.status__info a[href^='https://tomo.airen-no-jikken.icu/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'tomo.airen-no-jikken.icu'!important;}
.status__info a[href^='https://cybre.club/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'cybre.club'!important;}
.status__info a[href^='https://pleroma.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'pleroma.xyz'!important;}
.status__info a[href^='https://nemoroma.ml/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#da5!important;padding-left:18px!important;background: url('https://wee.jp/2/3.png'),
linear-gradient(to left,transparent,#123 )!important;background-repeat:no-repeat,no-repeat!important;content:'nemoroma.ml'!important;}
.status__info a[href^='https://misskey.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'misskey.xyz'!important;}
.status__info a[href^='https://misskey.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'misskey.jp'!important;}
.status__info a[href^='https://msk.kirigakure.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'msk.kirigakure.net'!important;}
.status__info a[href^='https://misskey.m544.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'misskey.m544.net'!important;}
.status__info a[href^='https://misskey.xps2.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'misskey.xps2.net'!important;}
.status__info a[href^='https://mewl.me/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'mewl.me'!important;}
.status__info a[href^='https://xn--6r8h.tk/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'💛.tk'!important;}
.status__info a[href^='https://misskey.barippi.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'misskey.barippi.com'!important;}
.status__info a[href^='https://msky.tokyo/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'msky.tokyo'!important;}
.status__info a[href^='https://misskey.myhome.cx/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'misskey.myhome.cx'!important;}
.status__info a[href^='https://misskey.love/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'misskey.love'!important;}
.status__info a[href^='https://mk.kigurumi.fun/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'mk.kigurumi.fun'!important;}
.status__info a[href^='https://noir.pub/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'noir.pub'!important;}
.status__info a[href^='https://msky.naru.cafe/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'msky.naru.cafe'!important;}
.status__info a[href^='https://uselesslesbian.club/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'uselesslesbian.club'!important;}
.status__info a[href^='https://uhouho.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'uhouho.xyz'!important;}
.status__info a[href^='https://yuzulia.xyz/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'yuzulia.xyz'!important;}
.status__info a[href^='https://misskey.nokotaro.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'misskey.nokotaro.com'!important;}
.status__info a[href^='https://msk.kirigakure.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'msk.kirigakure.net'!important;}
.status__info a[href^='https://emoji.msky.work/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'emoji.msky.work'!important;}
.status__info a[href^='https://819.blue/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'819.blue'!important;}
.status__info a[href^='https://i.mi.xeltica.work/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/4.png'),
linear-gradient(to left,transparent,#17a )!important;background-repeat:no-repeat,no-repeat!important;content:'i.mi.xeltica.work'!important;}
.status__info a[href^='https://peertube.cpy.re/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#000!important;padding-left:18px!important;background: url('https://wee.jp/2/5.png'),
linear-gradient(to left,transparent,#fff, #fff, #fff )!important;background-repeat:no-repeat,no-repeat!important;content:'peertube.cpy.re'!important;}
.status__info a[href^='https://peertube.jp.net/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#000!important;padding-left:18px!important;background: url('https://wee.jp/2/5.png'),
linear-gradient(to left,transparent,#fff, #fff, #fff )!important;background-repeat:no-repeat,no-repeat!important;content:'peertube.jp.net'!important;}
.status__info a[href^='https://tube.h3z.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#000!important;padding-left:18px!important;background: url('https://wee.jp/2/5.png'),
linear-gradient(to left,transparent,#fff, #fff, #fff )!important;background-repeat:no-repeat,no-repeat!important;content:'tube.h3z.jp'!important;}
.status__info a[href^='https://video.blender.org/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#000!important;padding-left:18px!important;background: url('https://wee.jp/2/5.png'),
linear-gradient(to left,transparent,#fff, #fff, #fff )!important;background-repeat:no-repeat,no-repeat!important;content:'video.blender.org'!important;}
.status__info a[href^='https://tube.yukimochi.jp/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#000!important;padding-left:18px!important;background: url('https://wee.jp/2/5.png'),
linear-gradient(to left,transparent,#fff, #fff, #fff )!important;background-repeat:no-repeat,no-repeat!important;content:'tube.yukimochi.jp'!important;}
.status__info a[href^='https://peertube.mastodon.host/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#000!important;padding-left:18px!important;background: url('https://wee.jp/2/5.png'),
linear-gradient(to left,transparent,#fff, #fff, #fff )!important;background-repeat:no-repeat,no-repeat!important;content:'peertube.mastodon.host'!important;}
.status__info a[href^='https://peertube.video/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#000!important;padding-left:18px!important;background: url('https://wee.jp/2/5.png'),
linear-gradient(to left,transparent,#fff, #fff, #fff )!important;background-repeat:no-repeat,no-repeat!important;content:'peertube.video'!important;}
.status__info a[href^='https://peertube.live/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#000!important;padding-left:18px!important;background: url('https://wee.jp/2/5.png'),
linear-gradient(to left,transparent,#fff, #fff, #fff )!important;background-repeat:no-repeat,no-repeat!important;content:'peertube.live'!important;}
.status__info a[href^='https://juick.com/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/6.png'),
linear-gradient(to left,transparent,#000 )!important;background-repeat:no-repeat,no-repeat!important;content:'juick.com'!important;}
.status__info a[href^='https://info.ikebuku.ro/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#000!important;padding-left:18px!important;background: url('https://wee.jp/2/7.png'),
linear-gradient(to left,transparent,#eee, #eee, #fff )!important;background-repeat:no-repeat,no-repeat!important;content:'info.ikebuku.ro'!important;}
.status__info a[href^='https://pxlfd.me/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#000!important;padding-left:18px!important;background: url('https://wee.jp/2/8.png'),
linear-gradient(to left,transparent,#fff )!important;background-repeat:no-repeat,no-repeat!important;content:'pxlfd.me'!important;}
.status__info a[href^='https://plus.haruk.in/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/10.png'),
linear-gradient(to left,transparent,#448 )!important;background-repeat:no-repeat,no-repeat!important;content:'plus.haruk.in'!important;}
.status__info a[href^='https://osada.app/'] .display-name:after{font-size:12px!important;height:16px!important;animation:fade 1s;display:block!important;white-space:pre!important;text-overflow:ellipsis!important;color:#fff!important;padding-left:18px!important;background: url('https://wee.jp/2/11.png'),
linear-gradient(to left,transparent,#334,#334 )!important;background-repeat:no-repeat,no-repeat!important;content:'osada.app'!important;}
/* (;-;) */
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
// @resource     MASTODON https://raw.githubusercontent.com/weepjp/InstanceTicker/master/InstanceTicker1.css
// @resource     MISSKEY https://raw.githubusercontent.com/weepjp/InstanceTicker/master/InstanceTickerMisskey1.css
// @resource     PLEROMA https://raw.githubusercontent.com/weepjp/InstanceTicker/master/InstanceTickerPleroma1.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
//
//
/*****************************************************
 * Special Thanks: popn_ja                           *
 *                                                   *
 * InstanceTickerDX.user.js                          *
 * https://github.com/weepjp/InstanceTicker          *
 ****************************************************/
//
//
/****************************************************
 * match ガバガバだと、他サイトにアクセスするごとに     *
 * 処理するので、 match リスト化に変更しました。        *
 * match 周りに関しては各自でカスタマイズキボンヌ。     *
 ****************************************************/
//
//
// ==/UserScript==


// ここに処理を記載する
(function(){
  var mstdn = 'mastodon';
  var misky = 'Misskey|みすきーじぇーぴー';

  var appn = document.getElementsByName('application-name').item(0);
  var apph = document.getElementsByClassName('app-holder').item(0);

 if(apph != null && apph.id.match(mstdn)){
    GM_addStyle(GM_getResourceText('MASTODON'));
  }else if (appn != null && appn.content.match(misky)){
    GM_addStyle(GM_getResourceText('MISSKEY'));
  }else {
    GM_addStyle(GM_getResourceText('PLEROMA'));
    GM_addStyle(GM_getResourceText('MASTODON')); /* app-holder の宣言なしの場合(ユーザーページ等)もあったため。*/
  }

})();
