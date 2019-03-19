<hr>

# #InstanceTicker Github Version

<hr>

<img src="https://res.cloudinary.com/weep/image/upload/v1551123733/it/InstanceTicker.png" title="#InstanceTicker" alt="#InstanceTicker" />
<hr>



# **[#InstanceTicker Wiki](https://github.com/fedpla/InstanceTicker/wiki) をお読み下さい**

<hr>

- "#InstanceTicker" とは、投稿者に所属インスタンス名を彩る "Custom CSS" を発行・配信したり、そのためのインスタンス情報を取りまとめています。
- Github では、user.js を配布しています。 "Mastodon" のみならず、 "Misskey" "Pleroma" に対応しています。
- 有志の皆様の協力によって、"[Subway Tooter](https://github.com/tateisu/SubwayTooter)" や "[TheDesk](https://github.com/cutls/TheDesk)" さらには "[halcyon](https://github.com/kaias1jp/halcyon)" にも対応していってる昨今です。
- 仕様と使い方は「[InstanceTicker Wiki](https://github.com/fedpla/InstanceTicker/wiki)」で、まとめています。
- 本来は PHP で出力されますが、GitHub 上では、定期的にコピペ設置してログとって、PHP設置サーバー(wee.jp)障害時の予備としての役割にしています。

<hr>

<img src="https://wee.jp/mastodon/tit.png" title="#InstanceTicker" alt="#InstanceTicker" />

<hr>

## ファイル - File
### [Type-0](https://github.com/fedpla/InstanceTicker/wiki/Type0) - 原則「代替アイコン」表示
- **Mastodon**
- - #InstanceTicker.user.js
- - #InstanceTicker.css
- - #InstanceTicker.tsv
### [Type-1](https://github.com/fedpla/InstanceTicker/wiki/Type1) - 原則「Favicon」表示
- **Mastodon**
- - #InstanceTicker1.user.js
- - #InstanceTicker1.css
- - #InstanceTicker1.tsv
- **Mastodon / Misskey**
- - #InstanceTickerDX.user.js
- - #InstanceTickerMisskey1.css - Misskey 版 の CSS
- **Pleroma - Pleroma FE(旧バージョンのみ) / Mastodon FE 対応**
- - #InstanceTickerFE.user.js - Pleroma FE(旧バージョンのみ) / Mastodon FE 対応
- - #InstanceTickerPleroma1.css - Pleroma FE 版 の CSS(旧バージョンのみ)
- - #InstanceTickerPleroma11.css - Mastodon FE 版 の CSS

<hr>

## 概要 - Description
- [こちらの解説ページ(Wiki)](https://github.com/fedpla/InstanceTicker/wiki) を参照下さい。
- - 表示変更依頼（非表示化も含みます）は、 <a target="_blank" rel="me" href="https://mastodon.social/@InstanceTicker">@InstanceTicker</a> にて、必ず公開投稿でメーションして下さい。（未収載・フォロワー限定・ダイレクトでのメーションにはお受けできません）
- - 開発に関するお問い合わせは 、[鯖缶工場 Discord](https://discord.gg/tCgghdP) まで。
- - その他のお問い合わせ（警告等も含みます）、 [メールフォーム](https://weep.jp/mail) から連絡下さい。

<hr>

### 仕様
- .user.js 先は、GitHub 上の .css に向けています。
- 最新版でなく、安定版として機能しています（wee.jp 上の CSS に向けても、user.js が更新されない場合 CSS も更新されないための措置）。

<hr>

## 予定
- "Pleroma" への対応について。
- - カスタムCSSさせるのが厳しい。
- - アプリ名を宣言している HTML タグがない。

<hr>

## 謝辞 - Acknowledgements
- 当 CSS 作成・配信にあたり、きっかけとなり、基礎になったのは、「[小田急don](https://odakyu.app/about)」で使用されてる「カスタムCSS」であり、これがなければ、こんにちの「#InstanceTicker」は存在しえません。
- 「改造」から「CSS配信」「ブラウザ拡張用途」「GitHub での公開」に至るまで、快く了解してくださった「小田急don」の管理者の [きょり/わんせた](https://github.com/kyori19) さんには、この場を借りて感謝致します。

<hr>

## 貢献について - Contribution
- weepjp は、からっきしの GitHub 初心者であり、あらゆる機能について網羅しておらず、右も左も分かりません。
- 少しずつ覚えていきますので、お手柔らかにお願いします。
- [Donation?](https://github.com/fedpla/InstanceTicker/wiki/ZENINAGE)

<hr>

## スタッフ - Staff
適度に協議しながら、やっています。
- CSSオリジナル: [小田急don](https://odakyu.app/about) ( [kyori19](https://github.com/kyori19) )
- 企画・開発: [weep.me](https://weep.me/about) ( [weepjp](https://github.com/weepjp) )
- スペシャルサンクス: popn_ja さん ( #InstanceTickerMisskey1.css and #InstanceTickerDX.user.js )

## ライセンス - Licence
- ORIGINAL CSS © [小田急don](https://odakyu.app/about) ( [kyori19](https://github.com/kyori19) )
- #InstanceTicker 2018 © [weep.me](https://weep.me/about) ( [weepjp](https://github.com/weepjp) )
- Released under the [MIT License](https://opensource.org/licenses/mit-license.php)
