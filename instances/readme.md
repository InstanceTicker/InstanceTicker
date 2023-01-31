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
- 手動更新なので許してください。追加や抹消の依頼は [Issue してください。](https://github.com/InstanceTicker/InstanceTicker/issues)
- [開設や閉鎖のご報告 Issue](https://github.com/InstanceTicker/InstanceTicker/issues) ありましたら助かります。

<hr>


## 各サーバーの favicon の 画像データについて

- 2023/02/01(JST) より、SNS画像のみの格納となります。

### とりあえず、うちの favicon を無許可で使わないでくれます？
- とりあえず [Issue してください。](https://github.com/InstanceTicker/InstanceTicker/issues) すぐにデフォルト設定に戻します。。
- SNS開発者さんも、ロゴ画像使用についてなにかあれば、[Issue](https://github.com/InstanceTicker/InstanceTicker/issues) してくだされば、対処していきます。

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

## Hay, Speak in English!
- ごめん。おいらは英語まったくわからん。
- Google or Deeple の翻訳サイト使ってください。

<hr>

<hr>




# Licence

## EN
- (c)2021 #InstanceTicker Released under the MIT license.
- The favicon image is copyrighted by each image creator.

## JA
- (c)2021 #InstanceTicker Released under the MIT license.
- favicon 画像は、それぞれの画像作者様に著作権があります。
