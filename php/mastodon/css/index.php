<?php




$lnk = '../../set.txt';//データファイル先。
$set = file($lnk);

$ver = date("YmdHi", filemtime( $lnk ));//YYYYmmddHHii

$ppp = 'https://cdn.weep.me/img/';//パス。



   @header('Content-type: text/css;charset=utf-8');
   @header('Access-Control-Allow-Origin: *');
   @header('Access-Control-Allow-Methods: GET, POST, PUT');
   @header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');


   $con = "@charset 'utf-8';";




$con .= "
/*-----------------------------------------*/
/* #InstanceTicker URL:                    */
/* #InstanceTicker ".$ver.".css        */
/*    https://cdn.weep.me/mastodon/        */
/*-----------------------------------------*/
/* ORIGINAL CSS    (C) 2018 kyori19        */
/*    https://github.com/kyori19           */
/* #InstanceTicker (C) 2018 weepjp         */
/*    https://github.com/weepjp            */
/* Released under the MIT license          */
/*    https://opensource.org/licenses/MIT  */
/*-----------------------------------------*/
";


$n = 0;

for($i = 1; $i < count($set); $i++){

	$sex = explode("\t",$set[$i]);
	
/************************
	
$sex[0]タイプ
$sex[1]インスタンス名 (ドメイン)
$sex[2]ドメイン
$sex[3]独自文字色
$sex[4]独自背景色
$sex[5]独自画像URL
$sex[6]独自画像URLの横幅
$sex[7]独自アイコン・画像権利者情報


*************************/
	
               if($sex[0] or $sex[0]=='0'){
               
               
               
               
               
               switch ($sex[0]){
                    case '0':// GNU social
                         if(!$sex[3]){ $sex[3] = '#fff';}
                         if(!$sex[4]){ $sex[4] = '#a22430';}
                         if(!$sex[5]){ $sex[5] = 'gnus.png';}
                         
                    break;
                    case '1':// Mastodon (Japan)
                         if(!$sex[3]){ $sex[3] = '#fff';}
                         if(!$sex[4]){ $sex[4] = '#2574b9';}
                         if(!$sex[5]){ $sex[5] = 'mstdn.png';}
                         
                    break;
                    case '2':// Mastodon (abroad)
                         if(!$sex[3]){ $sex[3] = '#fff';}
                         if(!$sex[4]){ $sex[4] = '#4491c3';}
                         if(!$sex[5]){ $sex[5] = 'mstdn.png';}
                         
                    break;
                    case '3':// Pleroma
                         if(!$sex[3]){ $sex[3] = '#d8a05b';}
                         if(!$sex[4]){ $sex[4] = '#182230';}
                         if(!$sex[5]){ $sex[5] = 'plrm.png';}
                         
                    break;
                    case '4':// Misskey
                         if(!$sex[3]){ $sex[3] = '#fff';}
                         if(!$sex[4]){ $sex[4] = '#2e9fb9';}
                         if(!$sex[5]){ $sex[5] = 'msky2.png';}
                         if(!$sex[6]){ $sex[6] = '36';       }
                         
                    break;
                    case '5': // PeerTube
                         if(!$sex[3]){ $sex[3] = '#000'; }
                         if(!$sex[4]){ $sex[4] = '#fff, #fff, #fff'; }
                         if(!$sex[5]){ $sex[5] = 'peertube2.png';}
                         if(!$sex[6]){ $sex[6] = '17';       }
                    break;
                    case '6': // Juick
                         if(!$sex[3]){ $sex[3] = '#fff';}
                         if(!$sex[4]){ $sex[4] = '#000';}
                         if(!$sex[5]){ $sex[5] = 'juick2.png';}
                         if(!$sex[6]){ $sex[6] = '17';       }
                    break;
                    
                    default:
                    
                    break;
}


if($sex[3]=='#ffffff'){ $sex[3]='#fff';}
if($sex[4]=='#ffffff'){ $sex[4]='#fff';}

if($sex[3]=='#000000'){ $sex[3]='#000';}
if($sex[4]=='#000000'){ $sex[4]='#000';}


if(!$sex[1]){ $sex[1] = $sex[2];}
if( $sex[1] == '閉鎖'){ $sex[1] = '閉鎖済み';  $sex[3] = '#fff';  $sex[4] = '#666';}

if(!$sex[6]){//独自バナーサイズ
$sex[6] = '18'; //デフォルト値
}

if($sex[6] >= 60){//独自バナーサイズを規定値を超すと
   $sex[1] = ''; //文字名を消しことにします。
   $sex[6] = 0;
}

$tit = @mb_strimwidth($sex[1],0,36,"..");

$con .= ".status a[href^='https://".$sex[2]."/'] ";
$con .= ".display-name:after{";
$con .= "color:".$sex[3]."!important;padding-left:".$sex[6]."px!important;";
$con .= "font-size:12px!important;height:16px!important;";
if($sex[5]){//アイコン
$con .= "background:url('".$ppp."".$sex[5]."'),";
}
$con .= "linear-gradient(to left,transparent,".$sex[4]." 92%)!important;";
$con .= "background-repeat:no-repeat,no-repeat!important;";
$con .= "content:'".$tit."'!important;";
$con .= "display:block!important;";
$con .= "white-space:pre!important;";
$con .= "text-overflow:ellipsis!important;";


$con .= "}\n";
                    
                    /*
                    $con .= '<td>'.$sex[0].'</td>';
                    $con .= '<td>'.$sex[1].'</td>';
                    $con .= '<td>'.$sex[2].'</td>';
                    $con .= '<td>'.$sex[3].'</td>';
                    $con .= '<td>'.$sex[4].'</td>';
                    $con .= '<td>'.$sex[5].'</td>';
                    $con .= '<td>'.$sex[6].'</td>';
                    $con .= '<td>'.$sex[7].'</td>';
                    $con .= '</tr>';
               */

              }

	$n++;
}




$con .= '@keyframes fadein{';
$con .= '0%{opacity:0}';
$con .= '100%{opacity:1}';
$con .= "}\n";

$con .= '@-webkit-keyframes fadein{';
$con .= '0%{opacity:0}';
$con .= '100%{opacity:1}';
$con .= "}\n";

$con .= ".compose-form:after{";
$con .= "color:#ffffff!important;padding-left:18px!important;";
$con .= "font-size:12px!important;height:96px!important;";
$con .= "background:url('".$ppp."it5.png'),";
$con .= "linear-gradient(to left,transparent,#01579b 96%)!important;";
$con .= "background-repeat:no-repeat,no-repeat!important;";
$con .= "content:'";
$con .= "#InstanceTicker ".$ver.".css";

$con .= "\AURL: https://cdn.weep.me/mastodon/ \A";
$con .= "(C) weep https://github.com/weepjp \A";
$con .= "Orig.(C) https://github.com/kyori19 \A";
$con .= "';";
$con .= "display:block !important;";
$con .= "white-space:pre !important;";
$con .= "text-overflow:ellipsis !important;";

$con .= "animation:fadein 1.2s ease 0s 1 normal;";
$con .= " -webkit-animation:fadein 1.2s ease 0s 1 normal;";

$con .= "}\n";




  $con .= "/* (;-;) */";








?><?=$con?>
