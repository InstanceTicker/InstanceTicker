<img src="https://res.cloudinary.com/weep/image/upload/v1551123733/it/InstanceTicker.png" title="#InstanceTicker" alt="#InstanceTicker" />

<img src="https://wee.jp/mastodon/tit.png" title="#InstanceTicker" alt="#InstanceTicker" />

#InstanceTicker　Github Version
====

- "#InstanceTicker" とは、投稿者に所属インスタンス名を彩る "Custom CSS" を発行・配信したり、そのためのインスタンス情報を取りまとめています。
- Github では、user.js を配布しています。 "Mastodon" のみならず、 "Misskey" "Pleroma" に対応しています。
- 有志の皆様の協力によって、"[Subway Tooter](https://github.com/tateisu/SubwayTooter)" や "[TheDesk](https://github.com/cutls/TheDesk)" さらには "[halcyon](https://github.com/kaias1jp/halcyon)" にも対応していってる昨今です。
- 仕様と使い方は「[InstanceTicker Wiki](https://github.com/weepjp/InstanceTicker/wiki)」で、まとめています。
- 本来は PHP で出力されますが、GitHub 上では、定期的にコピペ設置してログとって、PHP設置サーバー(wee.jp)障害時の予備としての役割にしています。

## ファイル - File
- [Type-0](https://github.com/weepjp/InstanceTicker/wiki/Type0) - 原則「代替アイコン」表示
- - #InstanceTicker.css
- - #InstanceTicker.tsv
- - #InstanceTicker.user.js
- [Type-1](https://github.com/weepjp/InstanceTicker/wiki/Type1) - 原則「Favicon」表示
- - #InstanceTicker1.css
- - #InstanceTicker1.tsv
- - #InstanceTicker1.user.js
- - - #InstanceTickerDX.user.js	- Mastodon, Misskey, Pleroma 対応版
- - - #InstanceTickerMisskey1.css - Misskey 版 の CSS (Type-1)

## 概要 - Description
- [こちらの解説ページ(Wiki)](https://github.com/weepjp/InstanceTicker/wiki) を参照下さい。
- - 表示変更依頼（非表示化も含みます）は、 <a target="_blank" rel="me" href="https://mastodon.social/@InstanceTicker">@InstanceTicker</a> にて、必ず公開投稿でメーションして下さい。（未収載・フォロワー限定・ダイレクトでのメーションにはお受けできません）
- - 開発に関するお問い合わせは 、[鯖缶工場 Discord](https://discord.gg/tCgghdP) まで。
- - その他のお問い合わせ（警告等も含みます）、 [メールフォーム](https://weep.jp/mail) から連絡下さい。

### 仕様
- .user.js 先は、GitHub 上の .css に向けています。
- 最新版でなく、安定版として機能しています（wee.jp 上の CSS に向けても、user.js が更新されない場合 CSS も更新されないための措置）。

## 予定
- "Pleroma" への対応について。
- - カスタムCSSさせるのが厳しい。
- - アプリ名を宣言している HTML タグがない。

## 謝辞 - Acknowledgements
- 当 CSS 作成・配信にあたり、きっかけとなり、基礎になったのは、「[小田急don](https://odakyu.app/about)」で使用されてる「カスタムCSS」であり、これがなければ、こんにちの「#InstanceTicker」は存在しえません。
- 「改造」から「CSS配信」「ブラウザ拡張用途」「GitHub での公開」に至るまで、快く了解してくださった「小田急don」の管理者の [きょり/わんせた](https://github.com/kyori19) さんには、この場を借りて感謝致します。

## 貢献について - Contribution
- weepjp は、からっきしの GitHub 初心者であり、あらゆる機能について網羅しておらず、右も左も分かりません。
- 少しずつ覚えていきますので、お手柔らかにお願いします。
- [Donation?](https://github.com/weepjp/InstanceTicker/wiki/ZENINAGE)

## スタッフ - Staff
適度に協議しながら、やっています。
- CSSオリジナル: [小田急don](https://odakyu.app/about) ( [kyori19](https://github.com/kyori19) )
- 企画・開発: [weep.me](https://weep.me/about) ( [weepjp](https://github.com/weepjp) )
- スペシャルサンクス: popn_ja さん ( #InstanceTickerMisskey1.css and #InstanceTickerDX.user.js )

## ライセンス - Licence
- ORIGINAL CSS © [小田急don](https://odakyu.app/about) ( [kyori19](https://github.com/kyori19) )
- #InstanceTicker 2018 © [weep.me](https://weep.me/about) ( [weepjp](https://github.com/weepjp) )
- Released under the [MIT License](https://opensource.org/licenses/mit-license.php)
