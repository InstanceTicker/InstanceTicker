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



@require('../../ins.php');



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
