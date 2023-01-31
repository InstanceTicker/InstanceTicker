# #InstanceTicker - インスタンス・ティッカー

<img src="https://raw.githubusercontent.com/InstanceTicker/InstanceTicker/master/InstanceTicker.svg" alt="logo" title="logo" width="64">

<img src="https://user-images.githubusercontent.com/3696720/172076193-cf461d70-3833-4435-b799-c2196123c943.png" title="#InstanceTicker" alt="#InstanceTicker" width="640" />

# Description - 概要
<img src="https://raw.githubusercontent.com/InstanceTicker/InstanceTicker/master/InstanceTicker.svg" alt="logo" title="logo" width="64">

- "#InstanceTicker" とは、Mastodon 上で、投稿者に所属インスタンス名を彩る "Custom CSS" を発行・配信したり、そのためのインスタンス情報を取りまとめています。
- 「 [34.si](https://34.si) 」では、そのフォークを稼働させています。

## Appearance 見た目
![image](https://user-images.githubusercontent.com/3696720/213913597-5484c239-add8-4a32-b8c2-7788f081da81.png)

## Usage - 使い方
- [Wiki](https://github.com/InstanceTicker/InstanceTicker/wiki/) を参照ください。

## Setup - 設置方法
- 特に説明しません。サポートもしません。自己責任で設置してください。
- instances.db のパスを設置先のパスへ適切に書き換えて下さい(public_html 内に設置しないほうがいいかも)。
- php 7.4 でうごきます。それ以外は知りません。
- 不具合があったらフォークして直しといてください。

## instances/instances.db - データーベース(インスタンスリスト)
- [instances/instances.db 's Readme](https://github.com/InstanceTicker/InstanceTicker/tree/master/instances)
  - （明確にライセンスが異なるため分割しています）。

## 更新履歴 - History
- [こちら](https://github.com/InstanceTicker/InstanceTicker/wiki/History) を参照ください。

# 代替品 - Replacement
- 以下もお使いいただけたらなぁと（丸投げ）。
  - 「[OpenSticker](https://github.com/cutls/OpenSticker)」 - 最強の代替です(2020/07/28)。
    - 「[SubyayToorer](https://github.com/tateisu/SubwayTooter)」 - #InstanceTicker API 廃止にともない、[OpenSticker](https://github.com/cutls/OpenSticker)に移行(2020/09/30)。
  - 「[めいすきー](https://github.com/mei23/misskey)」 - Misskey のフォーク。本家より先行して代替機能（インスタンス情報として）が導入されました(2020/07/30)。
  - 「[Misskey](https://github.com/syuilo/misskey)」 - 本家。代替機能（インスタンス情報として）が導入されましたが、めいすきーとは同一機能名ながら仕様が全く異なります(2020/10/27)。

# 謝辞 - Acknowledgements
- 当 CSS 作成・配信にあたり、きっかけとなり、基礎になったのは、「[小田急don](https://odakyu.app/about)」で使用されてる「カスタムCSS」であり、これがなければ、こんにちの「#InstanceTicker」は存在しえません。
- 「改造」から「CSS配信」「ユーザースクリプト」に快く了解してくださり、「GitHub での公開」を提案してくださいました「小田急don」の管理者 [きょり/わんせた](https://github.com/kyori19) さんには、この場を借りて感謝致します。
- 「kurage.cc」の管理者 [ぜま](https://github.com/yi0713) さんからは、通知表示時のCSSソース使用の提案と許可を快くしてくださり感謝しております。


# ライセンス - license
<img src="https://raw.githubusercontent.com/InstanceTicker/InstanceTicker/master/InstanceTicker.svg" alt="logo" title="logo" width="64">

- ©2018-2023 #InstanceTicker Released under the MIT license. 
- (#InstanceTicker is Based on custom.css of ©2018 odakyu.app and ©2019 kurage.cc)
