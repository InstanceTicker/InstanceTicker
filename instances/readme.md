# instances

- [InstanceTicker/InstanceTicker](https://github.com/InstanceTicker/InstanceTicker) で使ってるインスタンスリストです。

- **配布しているデータ内には、各SNSロゴや各インスタンスの favicon の画像データ(14px か 16px などの小さいサイズ)を含みますので、取り扱い注意であることをご留意ください。**

- SNS (Social networking service) means "social media" in Japanglish...

## instances.tsv

- TSV で管理している感じです。

- Google Spreadsheet で作成しています。

- SNS番号 が `0` である場合は、SNS の種類とそのデフォルトのデータとなっており、空欄の場合は無視され、注釈がかけるようになります。 

- webp / avif 画像データは、Data URI Schemeを入れます。`deta:` から入力します。

- 2022/11/21 から sname (スクリーンネーム用ドメイン)を追加。これは host が スクリーンネームと一致しない場合に記述します。
  - 例： https://social.v.st は v.st 
  - 例： https://social.vivaldi.net は vivaldi.net


| id | sns | sc | fav | lang | host | domain | sname | text | width | tcolor | bcolor | scolor | bicon | sicon | iicon | entry | exity | webp | avif |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 連番号 | SNS<br>番号 | スケール（収容人数など） | 優先値（値がある場合除外しない） | メイン言語（サポートアカウント及び説明文の使用言語など） | ホスト名 | ドメイン名（リスト索引用） | ホスト名（v4.0.2用のスクリーンネーム用） | 表示名 | 画像の横幅 | 表示名色 | 背景色 | 表示名影色 | 画像領域の背景色 | 同一画像をIDで指定 | 画像情報（ライセンス）など | エントリー日時および開設日時 | 非表示日時 | webp（データURIスキーマ） | avif（データURIスキーマ） |
| ID Num | Social Media Num | Scale Score | Favorite Score | Main Language | Host Name | Domain Name | Host Screen Name<br>(For v4.0.2) | Screen Text | Icon Width | Text Color | Back Color | Text Shadow Color | Icon Back Color | Same Icon of ID Num | Icon Information<br>(Image Licence) | Entry Day | Exit Day | webp<br>(Data URI Schema) | avif<br>(Data URI Schema) |



## instances.db

- `table: instances` に instances.tsv を格納したものです。
- 気まぐれで更新しないかもです。




<hr>

<hr>

# Issue にて要望を受け付けます。



## うちのインスタンスがねえじゃん or 入れてくれるな！
- 手動更新なので許してください。追加や抹消の依頼は Issue してください。
- 開設や閉鎖のご報告 Issue ありましたら助かります。

<hr>


## 各サーバーの favicon の 画像データについて

### favicon はキャッシュプロキシにするか、Google か Hatena の favicon ツールをフリーライドすればいいのではないですか？
- それもいい手ですが、Google 側では、近年仕様変更があったため、使わないようにしています。
- Hatena も表示速度がよくないので、使うにしても申し訳ない感じです。
- 使わない理由としては、アニメーション favicon にも対応させたかったためで、手動且つ個別で変換させています。
- 稀に、SVG 形式の favicon を設定するインスタンスが存在し、それにも対応させるためには、そら手動にでもなります。
- またサイズも異なるため（16x16 ではなく 14x14 となっています）、逐一手動で変換しています。（16x16 のまま放置にしてるケースもあります）
- ある Misskey サーバーでは、縦横 1000px を超える尋常じゃない画像サイズで favicon にしてるケースもあり、信用ならねえ。

<hr>

### Misskey みたいに favicon 直リン参照にすれば？
- まったく無関係の外部サイトの画像を link rel="icon" で設定するお行儀の悪い サーバーが数件ありました（誰だよ！某Wikiサイトの画像直リンしてる不届き者は！）。
- このようなケースについて、疑問はあるし軽蔑もする。
  - このように、無関係の外部サイトの画像を favicon として参照するようなお行儀の悪いサーバーへの対策だと思ってください。
  - このようなケースであっても、14x14 の画像に手動変換し格納していきますが、著作権をないがしろにする意図ではないので、問題があれば Issue ください。

<hr>

### とりあえず、うちの favicon やロゴを無許可で使わないでくれます？
- 画像作者名を明記することなくこのような公開の形となってしまい、申し訳ない気持ちでいっぱいです。
- とりあえず Issue してください。すぐにデフォルトに戻します。。
- SNS開発者さんも、ロゴ画像使用についてなにかあれば、Issue してくだされば、対処していきます。

<hr>

### SNS Logo の Difference を提示しなさい！

- 以下のとおりです。
- 抹消線はリストから除外にされたものです。

| SNS   | SNS Class Name| Logo                              |
| ----- | ------------- | --------------------------------- | 
|   1   | Mastodon (jp) | ![Logo](https://34.si/1? "Logo") |
|   2   | Mastodon      | ![Logo](https://34.si/2? "Logo") |
|   3   | Pleroma       | ![Logo](https://34.si/3? "Logo") |
|   4   | Misskey       | ![Logo](https://34.si/4? "Logo") |
|   5   | PeerTube      | ![Logo](https://34.si/5? "Logo") |
|   6   | GNU Social    | ![Logo](https://34.si/6? "Logo") |
|   7   | Write Freely  | ![Logo](https://34.si/7? "Logo") |
|   8   | Pixelfed      | ![Logo](https://34.si/8? "Logo") |
|   9   | Microblog.pub | ![Logo](https://34.si/9? "Logo") |
|   10  | GoToSocial    | ![Logo](https://34.si/a? "Logo") |
|   11  | Bookwyrm      | ![Logo](https://34.si/b? "Logo") |
|   12  | Socialhome    | ![Logo](https://34.si/c? "Logo") |
|   13  | Dolphin       | ![Logo](https://34.si/d? "Logo") |
|   14  | Plume         | ![Logo](https://34.si/e? "Logo") |
|   15  | Friendica     | ![Logo](https://34.si/f? "Logo") |
|   16  | Guppe Groups  | ![Logo](https://34.si/g? "Logo") |
|   17  |<s> Hubzilla </s>| ![Logo](https://34.si/h? "Logo") |
|   18  | Prismo        | ![Logo](https://34.si/i? "Logo") |
|   19  | Juick         | ![Logo](https://34.si/j? "Logo") |
|   20  |               |                                   |
|   21  | Lemmy         | ![Logo](https://34.si/l? "Logo") |
|   22  | Meow.fan      | ![Logo](https://34.si/m? "Logo") |
| 23-28 |               |                                   |
|   29  | Birdsitelive  | ![Logo](https://34.si/t? "Logo") |
| 30-59 |               |                                   |
|   60  | Unknown       | ![Logo](https://34.si/Y? "Logo") |
|   61  |               |                                   |

<hr>

### アニメーション favicon の Difference を提示しなさい！

- アニメーション favicon が確認できたのは以下のとおりです。
- われわれが、アニメーション favicon が確認できず気づいてない場合は Issue でおせーてください。
- アニメーションスピードが異なるのは、縮小したときの見栄えと容量削減のためです。

| Server (Instance) | Original<br>(16x16) | Using<br>(14x14) |
| :---         |     :---:      |     :---:      |
| qoto.org   | <img src="https://res.cloudinary.com/miy/a/2959.gif" title="画像" alt="画像" width="16" height="16">           | <img src="https://34.si/LJ" title="画像" alt="画像" width="14" height="14"> |
| freecumextremist.com | <img src="https://res.cloudinary.com/miy/a/1271.png" title="画像" alt="画像" width="16" height="16"> | <img src="https://34.si/kv" title="画像" alt="画像" width="14" height="14"> |
| freespeech.group | <img src="https://res.cloudinary.com/miy/a/894.png" title="画像" alt="画像" width="16" height="16">      | <img src="https://34.si/eq" title="画像" alt="画像" width="14" height="14"> |
| waifuism.life | <img src="https://res.cloudinary.com/miy/a/1287.png" title="画像" alt="画像" width="16" height="16">        | <img src="https://34.si/kL" title="画像" alt="画像" width="14" height="14"> |
| jigglypuff.club | <img src="https://res.cloudinary.com/miy/a/1496.gif" title="画像" alt="画像" width="16" height="16">      | <img src="https://34.si/o8" title="画像" alt="画像" width="14" height="14"> |
| fedi.nullob.si | <img src="https://res.cloudinary.com/miy/a/1484.gif" title="画像" alt="画像" width="16" height="16">       | <img src="https://34.si/nW" title="画像" alt="画像" width="14" height="14"> |
| kittycat.homes | <img src="https://res.cloudinary.com/miy/a/3221.gif" title="画像" alt="画像" width="16" height="16">       | <img src="https://34.si/PX" title="画像" alt="画像" width="14" height="14"> |

<hr>

## Hay, Speak in English!
- ごめん。おいらは英語まったくわからん。
- Google or Deeple の翻訳サイト使ってください。

<hr>

<hr>




# Licence

## EN
- (c)2021 #InstanceTicker Released under the MIT license.
- *The favicon image is copyrighted by each image creator.

## JA
- (c)2021 #InstanceTicker Released under the MIT license.
- ※favicon 画像は、それぞれの画像作者様に著作権があります。
