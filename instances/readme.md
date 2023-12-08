# instances

- [InstanceTicker/InstanceTicker](https://github.com/InstanceTicker/InstanceTicker) で使ってるインスタンスリストです。

- **配布しているデータ内には、各SNSロゴの画像データ(14pxサイズ)を含みますので、取り扱い注意であることをご留意ください。**

- **2023/02/01(JST)より、個別インスタンスのアイコン画像データを同梱しないことにしましたので、ご了承下さい。**
  - 履歴に残っちゃってるのは、どうしようもない。

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

### 同梱されている Image Logo の提示

- Software define list

| ID    | Software Names| IMG                              |
| ----- | ------------- | -------------------------------- | 
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
|   17  | takahe        | ![Logo](https://34.si/h? "Logo") |
|   18  | Prismo        | ![Logo](https://34.si/i? "Logo") |
|   19  | Juick         | ![Logo](https://34.si/j? "Logo") |
|   20  | Mitra         | ![Logo](https://34.si/k? "Logo") |
|   21  | Lemmy         | ![Logo](https://34.si/l? "Logo") |
|   22  | Meow.fan      | ![Logo](https://34.si/m? "Logo") |
|   23  | Mostr         | ![Logo](https://34.si/n? "Logo") |
|   24  | HomeTown      | ![Logo](https://34.si/o? "Logo") |
|   25  | Notestock     | ![Logo](https://34.si/p? "Logo") |
|   26  | Foundkey      | ![Logo](https://34.si/q? "Logo") |
|   27  | Fedibird      | ![Logo](https://34.si/r? "Logo") |
|   28  | Soapbox       | ![Logo](https://34.si/s? "Logo") |
|   29  | BirdsiteLIVE  | ![Logo](https://34.si/t? "Logo") |
|   30  | Ohagi         | ![Logo](https://34.si/u? "Logo") |
|   31  | MISSINGNO.(v) | ![Logo](https://34.si/v? "Logo") |
|   32  | Wildebeest    | ![Logo](https://34.si/w? "Logo") |
|   33  | MISSINGNO.(x) |                                  |
|   34  | MISSINGNO.(y) |                                  |
|   35  | MISSINGNO.(z) |                                  |
|   36  | Akkoma        | ![Logo](https://34.si/A? "Logo") |
|   37  | micro.blog    | ![Logo](https://34.si/B? "Logo") |
|   38  | CherryPick    | ![Logo](https://34.si/C? "Logo") |
|   39  | MISSINGNO.(D) |                                  |
|   40  | Misskey v11 ↓ | ![Logo](https://34.si/E? "Logo") |
|   41  | Firefish      | ![Logo](https://34.si/F? "Logo") |
|   42  | Concurrent    | ![Logo](https://34.si/G? "Logo") |
|   43  | Hubzilla      | ![Logo](https://34.si/H? "Logo") |
|   44  | Iceshrimp     | ![Logo](https://34.si/I? "Logo") |
|   45  | Sharkey       | ![Logo](https://34.si/J? "Logo") |
|   46  | Kbin          | ![Logo](https://34.si/K? "Logo") |
|   47  | Mbin          | ![Logo](https://34.si/L? "Logo") |
|   48  | Mobilizon     | ![Logo](https://34.si/M? "Logo") |
|   49  | MISSINGNO.(N) |                                  |
|   50  | MISSINGNO.(O) |                                  |
|   51  | Fedipage      | ![Logo](https://34.si/P? "Logo") |
|   52  | MISSINGNO.(Q) |                                  |
|   53  | Ebisskey      | ![Logo](https://34.si/R? "Logo") |
|   54  | Snac2         | ![Logo](https://34.si/S? "Logo") |
|   55  | Threads       | ![Logo](https://34.si/T? "Logo") |
|   56  | MISSINGNO.(U) |                                  |
|   57  | MISSINGNO.(V) |                                  |
|   58  | MISSINGNO.(W) |                                  |
|   59  | MISSINGNO.(X) |                                  |
|   60  | Unknown       | ![Logo](https://34.si/Y? "Logo") |
|   61  | MISSINGNO.(Z) |                                  |

-  Other Image lists

| ID    | Explanations  | IMG                               |
| ----- | ------------- | --------------------------------- | 
|   63  | Calckey Logo  | ![Logo](https://34.si/11? "Logo") |
|   64  | Mastodon v2 ↓ | ![Logo](https://34.si/12? "Logo") |
|   66  | Mastodon v3 ↓ | ![Logo](https://34.si/14? "Logo") |


-  Instance Image lists

| ID    | Explanations                      | IMG                               |
| ----- | --------------------------------- | --------------------------------- | 
|  273  | [hostdon](https://hostdon.jp/)    | ![Logo](https://34.si/4p? "Logo") |
| 3026  | [masto.host](https://masto.host/) | ![Logo](https://34.si/MO? "Logo") |
|  436  | [＋Plustodon](plustodon.net)      | ![Logo](https://34.si/72? "Logo") |


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
