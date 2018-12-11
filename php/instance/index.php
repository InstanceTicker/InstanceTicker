<?php


$lnk = '../set.txt';//データファイル先。
$set = file($lnk);
$ver = date("YmdHi", filemtime( $lnk ));// YYYYmmddHH
$verd = date("Y/m/d H:i", filemtime( $lnk ));// YYYY/mm/dd/HH

$con = '<table class="l"><tbody>';

$con .= '<tr>';


$con .= '<td>連番</td>';
$con .= '<td>分類</td>';
$con .= '<td style="width:16px !important;">導入インスタンス認定証</td>';
$con .= '<td style="width:136px !important;">ティッカー再現</td>';
$con .= '<td>余白数</td>';
$con .= '<td style="width:152px !important;">名称<br>(画像横長の場合はナシ)</td>';
$con .= '<td style="width:152px !important;">ドメイン</td>';
$con .= '<td style="width:46px !important;">詳細URL</td>';
$con .= '<td style="width:64px !important;">文字色</td>';
$con .= '<td style="width:64px !important;">背景グラデ</td>';
$con .= '<td style="width:130px !important;">画像<br>(title属性に著作権情報)</td>';
$con .= '<td></td>';

$con .= '</td><tr>';

$n = 1;

for($i = 1; $i < count($set); $i++){

	$sex = explode("\t", $set[$i]);
	
/************************
	
[0]タイプ
[1]インスタンス名（ドメイン
[2]ドメイン
[3]独自文字色
[4]独自背景色
[5]独自アイコンURL
[6]独自アイコン横幅
[7]独自アイコン・画像権利者情報


.status a[href^='https://weep.me/'] 
.display-name:after {
    color: #ffffff !important ; font-weight:bold !important ;
    font-size: 12px !important; height: 16px !important;
    font-family: 'migu' !important; padding-left:18px !important;
    background: url('https://res.cloudinary.com/weep/image/upload/v1538659368/mstdn/icon/mstdn.png'),
                linear-gradient(to left, transparent, #01579b ) !important ;
    background-repeat: no-repeat, no-repeat !important ;
    content: 'weep.me' !important ;
    display: block !important ;
    white-space: pre !important ;
    text-overflow: ellipsis !important ;
}
	
	
.status a[href^='https://mstdn.nil.nu/'] 
.display-name:after {
    color: #ffffff !important ; font-weight:bold !important ;
    font-size: 12px !important; height: 16px !important;
    font-family: 'migu' !important; padding-left:0px !important;
    background-color: #c27526 !important ;
    background: linear-gradient(to left, transparent, #c27526 ) !important ;
    content: url('https://res.cloudinary.com/weep/image/upload/v1538575025/mstdn/icon/mstdn_nil_nu.png') !important ;
    display: block !important ;
    white-space: pre !important ;
    text-overflow: ellipsis !important ;
}
	
	
*************************/
	
               if($sex[0] || $sex[0]=='0'){



               @require('../ins.php');











                    $con .= '<tr>';
                    
                    
                    $con .= '<td style="height:15px !important;"><a title="この連番で固定ではありません。" href="#no'.$n.'" id="no'.$n.'">'.$n.'</a></td>';
                    
                    
                    
                    
                    $con .= '<td style="height:15px !important; background-color:'.$typc.';">'.$sex[0].'</td>';//分類
                    
                    if($sex[9]){
                    $con .= '<td style="height:15px !important; ">';
                                 $con .= '<a href="'.$sex[9].'" target="_blank"><img src="https://cdn.weep.me/img/star2.gif" title="貴インスタンスにて Mastodon #InstanceTicker を導入したことを確認した認定証のスター。" alt="★" width="16" height="16"></a>';
                    $con .= '</td>';
                    
                    }else{
                    
                    $con .= '<td style="height:15px !important; background-color:#334;">';
                    $con .= ' </td>';
                    }
                    
                    
                    
                    $con .= "<td style=\" \n";
                    
$con .= 'height:15px !important; width:128px !important; color: '.$sex[3].' !important; padding:0px 0px 0px '.$sex[6].'px !important;';
$con .= "font-size: 12px !important;\n";
if($sex[5]){//アイコン
$con .= "background: url('https://cdn.weep.me/img/".$sex[5]."'),\n";
}
$con .= "linear-gradient(to left, #000 , ".$sex[4]." 96%) !important; \n";
$con .= "background-repeat: no-repeat, no-repeat !important;  \n";

                    
                    $con .= '">'.$tit.'</td>';
                    
                    $con .= '<td style="height:15px !important;">'.$sex[6].'</td>';
                    
                    $con .= '<td style="height:15px !important;">'.$sex[1].'</td>';
                    
                    
                    $sex2 = @mb_strimwidth($sex[2],0,16,"..");
                    $con .= '<td style="height:15px !important;"><a href="#'.$sex[2].'" name="'.$sex[2].'">#</a> <a href="https://'.$sex[2].'" target="_blank" title="'.$sex[2].'">'.$sex2.'</a></td>';
                    
                    if($sex[8]){
                         $con .= '<td style="height:15px !important;">[<a href="'.$sex[8].'" target="_blank">詳細</a>]</td>';
                    }else{
                         $con .= '<td style="height:15px !important; background-color:#334;"> </a></td>';
                    }
                    
                    $con .= '<td style="height:15px !important; font-size:8px;">'.$sex[3].'</td>';
                    $sex4 = @mb_strimwidth($sex[4],0,24,"..");
                    $con .= '<td style="height:15px !important; font-size:8px; width:180px;">'.$sex4.'</td>';
                    $con .= '<td style="height:15px !important; background-color:#2574b9;">';
                    
                    if($sex[10]){
                          $con .= '<a href="'.$sex[10].'" target="_blank">';
                    }
                    
                    $con .= '<img src="https://cdn.weep.me/img/'.$sex[5].'" title="'.$sex[7].'" alt="画像">';
                    
                    if($sex[10]){
                          $con .= '</a>';
                    }
                    
                    $con .= '</td>';

                    
                    

                    
                    

                    $con .= '<td style="height:15px !important;"></td>';
                    
                    
                    $con .= '</tr>';
                    
                    
                    $n++;
               }

	
}


$con .= '</tbody></table>';

?><!DOCTYPE html>
<html lang="ja"><head>
<meta charset="UTF-8" />
<title>Mastodon #InstanceTicker List</title>
<link rel="icon" sizes="16x16" href="./favicon.ico" />
<link rel="icon" sizes="320x320" href="./favicon320.png" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Mastodon #InstanceTicker" />
<meta property="og:description" content="#InstanceTicker 対応インスタンスリスト" />
<meta property="og:url" content="./mastodon/" />
<meta property="og:image" content="./favicon320.png" />

<meta itemprop="name" content="Mastodon #InstanceTicker" />
<meta itemprop="description" content="#InstanceTicker 対応インスタンスリスト" />
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



<h1 id="subject">Mastodon <a href="../mastodon/" name="top" target="_top">#InstanceTicker</a> List</h1>



<h2 id="list">ティッカーが表示できる「インスタンス」のリスト　＆　その表示の再現</h2>


<div class="desc">

<p><?=$verd?> 更新</p>

<?=$con?>

<p><?=$verd?> 更新</p>

<p class="ue"><a href="#top">▲</a></p>

</div>



<h2 id="list">©</h2>

<div class="desc">
   <div style=" height:96px !important; width:380px !important; color: #fff !important; padding:0px 0px 0px 18px !important;font-size: 12px !important;background: url('https://cdn.weep.me/img/it5.png'),linear-gradient(to left, transparent , #01579b 96%) !important; background-repeat: no-repeat, no-repeat !important; ">
#InstanceTicker <br>URL: https://cdn.weep.me/mastodon/ <br>(C) weep <a rel="me" href="https://github.com/weepjp" target="_blank">https://github.com/weepjp</a> <br>Orig.(C) <a href="https://github.com/kyori19" target="_blank">https://github.com/kyori19</a> <br></div>

<p class="ue"><a href="#top">▲</a></p>

</div>


</body></html>