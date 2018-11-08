インスタンス・ティッカー - Mastodon #InstanceTicker
====

"Mastodon #InstanceTicker" とは、Mastodon Timeline 上の投稿者に所属インスタンス名を彩る "Custom CSS" です。

## 概要 - Description
- Mastodon #InstanceTicker とは、とにかく [Mastodon](https://github.com/tootsuite/mastodon) 用に使う "Custom CSS" です。
- この Custom CSS を Mastodon に、組み込むと Timeline 上の投稿者たちに、所属インスタンス名を彩ることができます。
- 彩ることができるインスタンスのリストは、[こちらのページ](https://cdn.weep.me/mastodon/)の下にあります。
- ご質問・ご連絡は、[@weep@weep.me](https://weep.me/@weep) に メーション or DM するか、#InstanceTicker のハッシュタグを付けてトゥートして下さい。

## デモ - Demo
[![](https://img.youtube.com/vi/Xl_lEjxE2Ow/0.jpg)](https://www.youtube.com/watch?v=Xl_lEjxE2Ow)

## 競合ツールとの比較 - VS. 
似たようなものあったら、むしろおせーてください。。。

## 要件 - Requirement
- 使用アイコンの全ては、weep が 1から打ち込んだ 16-128 x 16 ドット絵ですが、分散SNSロゴイラストおよび、各インスタンスさんで使用されてる看板イラストを基にして作成しており、少なくとも基になったイラスト著作者に著作権がありますので、[こちらのページ](https://cdn.weep.me/mastodon/)の下のリスト右側にある画像の title 属性に基になったイラストの著作者等の説明がありますので、それを参照して下さい（情報は随時更新されます）。
- イラスト著作者の方で使用が認められない際は、至急ご連絡下さい（連絡先は先述の概要を参照）。

## インストール - Install
- [Mastodon #InstanceTicker を Greasy Fork でインストールする方法](https://weep.qrunch.io/entries/jfVgou5Q0RcVUxVH)
### 一般ユーザー様用の導入方法 - For Mastodon user
[Tampermonkey](https://tampermonkey.net/) 推奨です。
（Violentmonkey では、正常に動作しないことを確認。）
- [Mastodon #InstanceTicker (GitHub Version)](https://github.com/weepjp/MastodonInstanceTicker/blob/master/MastodonInstanceTicker.user.js)
- [Mastodon #InstanceTicker (Greasy Fork Version)](https://greasyfork.org/ja/scripts/373630-mastodon-instanceticker-greasy-fork-version)


## 導入 - Usage
### インスタンス管理者様用の導入方法 - For Mastodon admin
#### カスタムCSS にコピペして直接入れる場合
※CSP (Content-Security-Policy) の対策ができない環境の方（masto.host や hostdon.jp 等の「ホスティング型」など）用。
※随時手動でコピペして更新する必要がありますが、この方法は確実に導入できます（おいらのCDN鯖が落ちても安心）。
- 通常版
-- [こちらのページからコードをコピペできます](https://cdn.weep.me/mastodon/css/html)
- 軽量版
-- [こちらのページからコードをコピペできます](https://cdn.weep.me/mastodon/css/lite.html)

#### ＜style＞～＜/style＞に CSS を入れる場合
※Mastodon Version 2.6.0 以降からは、 CSP (Content-Security-Policy) が導入されたため、その辺の対策が必須です。
※Mastodon Version 2.5.x では、CSP (Content-Security-Policy) が導入されてないため、その心配はありませんが。。。
※キャッシュが残ってる場合は ～.css?適当な英数字 にしてください。
- 通常版
```
@import url("https://cdn.weep.me/mastodon/css/InstanceTicker.css");
```
- 軽量版
※キャッシュが残ってる場合は ～.css?適当な英数字 にしてください。
```
@import url("https://cdn.weep.me/mastodon/css/lite.css");
```

#### ＜head＞～＜/head＞ に CSS を入れる場合
※Mastodon Version 2.6.0 以降からは、 CSP (Content-Security-Policy) が導入されたため、その辺の対策が必須です。
※Mastodon Version 2.5.x では、CSP (Content-Security-Policy) が導入されてないため、その心配はありませんが。。。
- 通常版
※キャッシュが残ってる場合は ～.css?適当な英数字 にしてください。
```
<link rel="stylesheet" media="all" href="https://cdn.weep.me/mastodon/css/InstanceTicker.css">
```
- 軽量版
※キャッシュが残ってる場合は ～.css?適当な英数字 にしてください。
```
<link rel="stylesheet" media="all" href="https://cdn.weep.me/mastodon/css/lite.css">
```

## 貢献について - Contribution
- weepjp は、からっきしの GitHub 初心者であり、あらゆる機能について網羅しておらず、右も左も分かりません。
- 少しずつ覚えていきますので、お手柔らかにお願いします。

## ライセンス - Licence
- ORIGINAL CSS © [小田急don](https://odakyu.app/about): [kyori19](https://github.com/kyori19)
- #InstanceTicker 2018 © [weep.me](https://weep.me/about): [weepjp](https://github.com/weepjp)
- Released under the [MIT License](https://opensource.org/licenses/mit-license.php)

## 謝辞 - Acknowledgements
- 当 CSS 作成・配信にあたり、きっかけとなり、基礎になったのは、「[小田急don](https://odakyu.app/about)」で使用されてる「カスタムCSS」であり、これがなければ、こんにちの「#InstanceTicker」は存在しえません。
- 「改造」から「CSS配信」「ブラウザ拡張用途」「GitHub での公開」に至るまで、快く了解してくださった「小田急don」の管理者の [きょり/わんせた](https://github.com/kyori19) さんには、この場を借りて感謝致します。

## 投稿者 - Author

- [weepjp](https://github.com/weepjp)

