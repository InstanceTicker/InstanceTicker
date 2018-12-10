<?



?><!DOCTYPE html>
<html lang="ja"><head>
<meta charset="UTF-8" />
<title>Mastodon #InstanceTicker</title>
<link rel="icon" sizes="16x16" href="./favicon.ico" />
<link rel="icon" sizes="320x320" href="./favicon320.png" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Mastodon #InstanceTicker" />
<meta property="og:site_name" content="Mastodon #InstanceTicker" />
<meta property="og:description" content="#InstanceTicker のアナウンスサイト" />
<meta property="og:image" content="./mastodon/favicon320.png" />

<meta itemprop="name" content="Mastodon #InstanceTicker" />
<meta itemprop="description" content="#InstanceTicker のアナウンスサイト" />
<meta itemprop="image" content="./favicon320.png" />

<style>
body{background-color:#282c37; color:#efefef; margin: 0; padding:0; font-size:12px;}

a,a:link,a:visited,a:hover,a:active{color:#efefef; font-weight:bold;}

table, th, td {
  border-collapse: collapse;
}

td{
  
  border: 1px solid #ccc;
  background: #000;
  height:15px !important;
 }

.wrap{ width:960px; margin-left:auto; margin-right:auto; }

.menu{ width:960px; margin-left:auto; margin-right:auto;  font-size:16px !important; text-align:center;}

.desc{ width:960px; background-color:#000; border-radius:3px; box-shadow:3px 3px 5px rgba(51, 51, 51, 0.7) inset, 0 0 2px 3px #000, 0 0 0 6px #fff, 0 0 2px 8px #000; letter-spacing:0px; margin:0px auto 32px auto; padding:16px; text-align:left; color:#ffffff;
}

textarea{ color: #ff785f; background-color: #000000;}


.foot{ width:512px; margin-left:auto; margin-right:auto;  font-size:12px !important; text-align:center;}

.ue{ text-align:right; }

h1{ width:100%; text-align:center; }
h2{ width:100%; text-align:center; }

ul{ text-align:center;}
li{ text-align:left;}

</style>
</head>
<body>

<h1 id="subject">Mastodon <a href="/mastodon/" name="top" target="_top">#InstanceTicker</a></h1>




<div class="menu">
<div class="desc" style="text-align:center;">

<img src="https://res.cloudinary.com/weep/image/upload/v1540817245/InstanceTicker_title_3_xv0kzc.png" alt="InstanceTicker" title="InstanceTicker">

</div>


<h2 id="toc">もくじ</h2>

<div class="desc" style="text-align:center;">
<ul>
<li><a href="#subject">タイトル</a></li>
<li><a href="#top">もくじ</a></li>
<li><a href="#video">動作確認動画</a></li>
<li><a href="#summary">概要</a></li>
<li><a href="#user">導入（一般ユーザー様用）</a></li>
<li><a href="#admin">導入（インスタンス管理者様用）</a></li>
<li><a href="#spthx">謝辞</a></li>
<li><a href="#license">License</a></li>
<li><a href="../instance/">表示できるインスタンスのリスト</a></li>
</ul>
</div>

<h2 id="video">動作確認した模様の動画（音が出ますぜ）</h2>

<div class="desc" style="text-align:center;">
<iframe width="900" height="506" src="https://www.youtube.com/embed/Xl_lEjxE2Ow?rel=0&autoplay=0&controls=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<p class="ue"><a href="#top">▲</a></p>

</div>


<h2 id="summary">概要</h2>

<div class="desc">
<ul>
   <li>#InstanceTicker とは、とにかくマストドン用に使うやつです。</li>
   <li>Mastodon タイムライン上の投稿者たちに、所属インスタンス名を彩ります。</li>
   <li>彩ることができるインスタンスリストは、このページの下にあります。</li>
   <li>使用アイコンの全ては、 weep が 1から打ち込んだドット絵ですが、それぞれのインスタンスさんで使用されてるイラストを基にして描かれたものもありますので、以下のリストの右の画像の title 属性に著作者やその説明がその都度書いてあります。</li>
   <li>ご質問があれば、<a href="https://weep.me/@weep" target="_blank">@weep@weep.me</a> に メーション or DM するか、#InstanceTicker のハッシュタグを付けてトゥートして下さい。</li>
</ul>

<p class="ue"><a href="#top">▲</a></p>
</div>

<h2 id="user">一般ユーザー様用の導入方法</h2>

<div class="desc">
<ol>
   <li>まずは、ブラウザ拡張（アドオン）を入れて下さい。<br />これしないと、意味ありません。</li>

   <ul>
     <li>Chrome(Chromium), Vivaldi: <a href="https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo">Tampermonkey</a>, <a href="https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag">Violentmonkey</a></li>
     <li>Firefox: <a href="https://addons.mozilla.org/firefox/addon/greasemonkey/">Greasemonkey</a>, <a href="https://addons.mozilla.org/firefox/addon/tampermonkey/">Tampermonkey</a>, <a href="https://addons.mozilla.org/firefox/addon/violentmonkey/">Violentmonkey</a> </li>
     <li>Safari: <a href="http://tampermonkey.net/?browser=safari">Tampermonkey</a></li>
     <li>Microsoft Edge: <a href="https://www.microsoft.com/store/p/tampermonkey/9nblggh5162s">Tampermonkey</a></li>
     <li>Opera: <a href="https://addons.opera.com/extensions/details/tampermonkey-beta/">Tampermonkey</a>, <a href="https://addons.opera.com/extensions/details/violent-monkey/">Violentmonkey</a></li>
   </ul>

   <li>とまぁ、いろいろとあるんですが、おいらは「Tampermonkey」を推奨してます。<br />（Violentmonkey では、正常に動作しないことを確認しました。）</li>

   <li>#InstanceTicker の UserScript(user.js)インストールして下さい。（2つとも同一のものです）<li>
   
   <ul>
     <li><a href="https://greasyfork.org/ja/scripts/373630-mastodon-instanceticker-greasy-fork-version" target="_blank">Mastodon #InstanceTicker (Greasy Fork Version)</a> にアクセスして、インストールボタン押す。</li>
     <li><a href="https://github.com/weepjp/MastodonInstanceTicker/blob/master/MastodonInstanceTicker.user.js" target="_blank">Mastodon #InstanceTicker (GitHub Version)</a> にアクセスして、インストールボタン押す。</li>
   </ul>
   
   
   <li><a href="https://weep.qrunch.io/entries/jfVgou5Q0RcVUxVH" target="_blank">導入する方法はコチラ</a>にあります。</li>
</ol>

<p class="ue"><a href="#top">▲</a></p>

</div>


<h2 id="admin">インスタンス管理者様用の導入方法</h2>

<div class="desc">
<ul>

<li>鯖缶の方は、以下を使って下さい。</li>

 <ul>
   
   <li>＜style＞～＜/style＞に入れる場合。
       <ul><li style="padding-bottom:16px;"><textarea onclick='this.focus(); this.select();' wrap='on' rows='1' cols='80'>@import url("/mastodon/css/InstanceTicker.css");</textarea></li></ul>
   </li>
   
   <li>＜head＞～＜/head＞ に入れる場合。
       <ul><li style="padding-bottom:16px;"><textarea onclick='this.focus(); this.select();' wrap='on' rows='2' cols='80'><link rel="stylesheet" media="all" href="/mastodon/css/InstanceTicker.css"></textarea></li></ul>
   </li>
 </ul>

<li>しかし、上の方法だと、Mastodon のバージョンが 2.6.x 以降の「CSP (Content-Security-Policy)」という 壁が立ちはだかりますので、その問題はご自身で解決下さい。しかし奥の手があります。
  <ul>
   <li>カスタムCSSにコードをコピペして使う方法（CSP や CDN鯖落ち の影響を受けませんのでオススメ）。
       <ul><li style="padding-bottom:16px; font-size:24px;">この方法は、おいらも使ってます。<a href="/mastodon/css/html" target="_blank">コチラからコピペできます</a>。。うへへ。</li></ul>
   </li>
  </ul>
</li>

<li>インスタンス管理者が導入することで、スマホブラウザでは対応できないアドオンの方法とは異なり、スマホブラウザにも対応できることです。</li>

   
</ul>

<p class="ue"><a href="#top">▲</a></p>

</div>




<h2 id="spthx">貢献について</h2>

<div class="desc">
<ul>
   <li>「<a href="https://note.weep.jp/" target="_blank">note.weep.jp</a>」 の連載購読キボンヌ。</li>
   <li>「<a href="https://weep.jp/tip" target="_blank">仮想通貨</a>」での投げ銭。</li>
   <li>「<a href="https://kyabi.net/profiles/5bb09c67225539000f3770bd" target="_blank">Kyabi.net -Kyashで簡単に投げ銭しよう-</a>」での投げ銭。</li>
</ul>

<p class="ue"><a href="#top">▲</a></p>

</div>




<h2 id="spthx">謝辞</h2>

<div class="desc">
<ul>
   <li>当 CSS 作成・配信にあたり、きっかけとなり、基礎になったのは、「<a href="https://odakyu.app/about" target="_blank">小田急don</a>」で使用されてる「カスタムCSS」であり、これがなければ「#InstanceTicker」は存在しません。</li>
   <li>「改造」から「CSS配信」「ブラウザ拡張用途」に至るまで、快く了解してくださった「<a href="https://odakyu.app/about" target="_blank">小田急don</a>」の管理者の <a href="https://odakyu.app/@ars42525" target="_blank">きょり/わんせた</a> さんには、この場を借りて感謝致します。</li>
</ul>

<p class="ue"><a href="#top">▲</a></p>

</div>

<h2 id="license">License</h2>

<div class="desc">

<p>
ORIGINAL CSS © 小田急don <a href="https://odakyu.app/@ars42525" target="_blank">https://odakyu.app/@ars42525</a><br />
#InstanceTicker © weep.me <a rel="me" href="https://weep.me/@weep" target="_blank">https://weep.me/@weep</a><br />
Released under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a></p>

<p class="ue"><a href="#top">▲</a></p>

</div>





<h2 id="list">ティッカーが表示できる「インスタンス」のリスト　＆　その表示の再現</h2>


<div class="desc">

<ul>
   <li>ページを移転しました。。。</li>
   <ul><li style="padding-bottom:16px; font-size:24px;"><a href="/instance/">こちらに移動しました</a></li></ul>
</ul>

<p class="ue"><a href="#top">▲</a></p>

</div>


<h2 id="list">©</h2>

<div class="desc">
   <div style=" height:96px !important; width:380px !important; color: #fff !important; padding:0px 0px 0px 18px !important;font-size: 12px !important;background: url('https://cdn.weep.me/img/it5.png'),linear-gradient(to left, transparent , #01579b 96%) !important; background-repeat: no-repeat, no-repeat !important; ">
#InstanceTicker <br>URL: https://cdn.weep.me/mastodon/ <br>(C) weep <a rel="me" href="https://github.com/weepjp" target="_blank">https://github.com/weepjp</a> <br>Orig.(C) <a href="https://github.com/kyori19" target="_blank">https://github.com/kyori19</a> <br></div>

<p class="ue"><a href="#top">▲</a></p>

</div>




</body></html>