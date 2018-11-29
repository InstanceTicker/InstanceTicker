インスタンス・ティッカー - Mastodon #InstanceTicker
====

"Mastodon #InstanceTicker" とは、Mastodon Timeline 上の投稿者に所属インスタンス名を彩る "Custom CSS" です。

## 概要 - Description
- Mastodon #InstanceTicker とは、とにかく [Mastodon](https://github.com/tootsuite/mastodon) 用に使う "Custom CSS" です。
- この Custom CSS を Mastodon に、組み込むと Timeline 上の投稿者たちに、所属インスタンス名を彩ることができます。
- 彩ることができるインスタンスのリストは「Mastodon」だけに限らず 500 種類あり、[こちらのインスタンスリストページ](https://cdn.weep.me/instance/)にてリアルタイムで更新されご覧になれます。
- ご質問・ご連絡は、[@weep@weep.me](https://weep.me/@weep) に メーション or DM するか、#InstanceTicker のハッシュタグを付けてトゥートし、「GitHub Version」に関しては、当レポジトリ上でなんか投げて下さい（その方が気づきます）。

## デモ - Demo
[![](https://img.youtube.com/vi/Xl_lEjxE2Ow/0.jpg)](https://www.youtube.com/watch?v=Xl_lEjxE2Ow)
- 映像で御覧ください！（ [mstdn.jp](https://mstdn.jp/about/) の連合タイムライン上での動作）
- [Vivaldi](https://vivaldi.com/ja/) + [Tampermonkey](https://tampermonkey.net/) の環境。

## 競合ツールとの比較 - VS. 
似たようなものあったら、むしろおせーてください。。。

## インストール - Install
- [Tampermonkey](https://tampermonkey.net/) 推奨です。（Violentmonkey では、正常に動作しないことを確認。）
### 一般ユーザー様用の導入方法 - For Mastodon user
- [Tampermonkey](https://tampermonkey.net/) をブラウザに入れたあと以下にアクセスし、インストールボタンを押下して下さい。
- [Mastodon #InstanceTicker (GitHub Version)](https://github.com/weepjp/MastodonInstanceTicker/raw/master/MastodonInstanceTicker.user.js)

## 導入 - Usage
### インスタンス管理者様用の導入方法 - For Mastodon admin
#### カスタムCSS にコピペして直接入れる場合 - to custom CSS
- ※CSP (Content-Security-Policy) の対策ができない環境の方（masto.host や hostdon.jp 等の「ホスティング型」など）用。
- ※随時手動でコピペして更新する必要があります。
-- [InstanceTicker.css (GitHub Version)](https://github.com/weepjp/MastodonInstanceTicker/blob/master/InstanceTicker.css)
-- [リアルタイム更新 通常版](https://cdn.weep.me/mastodon/css/html)
-- [リアルタイム更新 軽量版](https://cdn.weep.me/mastodon/css/lite.html)

#### ＜style＞～＜/style＞に CSS を入れる場合 - to Stylesheet (import)
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

#### ＜head＞～＜/head＞ に CSS を入れる場合 - to Stylesheet (Link Tag)
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
- [note.weep.jp](https://note.weep.jp/) の連載購読キボンヌ。
- [仮想通貨での投げ銭](https://weep.jp/tip)
- [Kyabi.net -Kyashで簡単に投げ銭しよう- ](https://kyabi.net/profiles/5bb09c67225539000f3770bd)
-- weepjp は、からっきしの GitHub 初心者であり、あらゆる機能について網羅しておらず、右も左も分かりません。
-- 少しずつ覚えていきますので、お手柔らかにお願いします。

## ライセンス - Licence
- ORIGINAL CSS © [小田急don](https://odakyu.app/about) ( [kyori19](https://github.com/kyori19) )
- #InstanceTicker 2018 © [weep.me](https://weep.me/about) ( [weepjp](https://github.com/weepjp) )
- Released under the [MIT License](https://opensource.org/licenses/mit-license.php)

## 使用アイコンについて - About Logo Images
- 使用アイコンの全ては、weep が 1から打ち込んだ 16-128 x 16 ドット絵ですが、分散SNSロゴイラストおよび、各インスタンスさんで使用されてる看板イラストを基にして作成しており、少なくとも基になったイラスト著作者に著作権がありますので、[こちらのページ](https://cdn.weep.me/instance/)内のリスト右側画像の title 属性に「基になったイラストの著作者等の説明」がありますので、それを参照して下さい（情報は随時更新されます）。
- イラスト著作者の方で使用が認められない際は、至急ご連絡下さい（連絡先は先述の概要を参照）。
- [きぼうソフト](https://kibousoft.co.jp/)様、[Hostodon](https://hostdon.jp/)様からは、ロゴの使用許諾を受けました（非営利用途に限ります）。
- なお、ピクシヴ様とドワンゴ様はロゴ使用について問い合わせても未回答でしたので、今後の動向次第です。

## 謝辞 - Acknowledgements
- 当 CSS 作成・配信にあたり、きっかけとなり、基礎になったのは、「[小田急don](https://odakyu.app/about)」で使用されてる「カスタムCSS」であり、これがなければ、こんにちの「#InstanceTicker」は存在しえません。
- 「改造」から「CSS配信」「ブラウザ拡張用途」「GitHub での公開」に至るまで、快く了解してくださった「小田急don」の管理者の [きょり/わんせた](https://github.com/kyori19) さんには、この場を借りて感謝致します。

## スタッフ - Staff
2名が適度に協議しながら、やっています。
- 企画・開発・投稿者: [weep.me](https://weep.me/about) ( [weepjp](https://github.com/weepjp) )
- 原作者: [小田急don](https://odakyu.app/about) ( [kyori19](https://github.com/kyori19) )
