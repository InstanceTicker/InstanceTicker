<?php

//
// #InstanceTicker v.0.4.1 (2023-01-17)
// /index.php
// (C)2018-2023 weepjp. Released under the MIT license.
// https://github.com/InstanceTicker/InstanceTicker/
//

//Licence
$coy = '©2018-'.date('Y').' weepjp. Released under the MIT license. (#InstanceTicker is Based on custom.css of ©2018 odakyu.app and ©2019 kurage.cc)';



// 処理時間の測定スタート
$time_start = microtime(true);

//サイトタイトルを途中で変更できるようにするためのくだらん作戦
//ヘッダーを関数にしちゃう
function htmh($str, $tit, $msg ,$srv1, $srv2 ){
	$result = '<!DOCTYPE html>
<html lang="ja"><head><meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" type="image/webp" href="/favicon.webp" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta property="og:type" content="website" />
<meta property="og:title" content="'.$tit.'" />
<meta property="og:site_name" content="'.$tit.'" />
<meta property="og:description" content="#InstanceTicker is custom CSS of Mastodon that aims to display the ServerName(Instance)." />
<meta property="og:image" content="'.$srv2.'/img/og.webp" />

<meta itemprop="name" content="#InstanceTicker" />
<meta itemprop="description" content="#InstanceTicker is custom CSS of Mastodon that aims to display the ServerName(Instance)." />
<meta itemprop="image" content="'.$srv2.'/img/og.webp" />
<title>'.$tit.'</title>

<style>
#loading{
 width:90vw;
 height:90vh;
 position:relative;
 background:#223;
}

#loading div{
 position:absolute;
 top:50%;left:50%;
 transform:translate(-50%,-50%);
 border:solid 3px;
 border-image:linear-gradient(#bbb,#444) 30;
 background:#223;
 padding:3%;
 font:700 11px ui-rounded;
 text-align:center;
}

.hidden{display:none;}


body{
 color:#fff;
 background-color:#223;
}

a,a:link,a:visited,a:hover,a:active{color:#eee; font-weight:bold;}

#wrap{
 padding:0;
 width:480px;
 margin-left:auto;
 margin-right:auto;
}

table {
   border-collapse:collapse;
   margin:0; padding:0;
}

td {
   border:solid 6px #223;
   text-align:left;
   margin:0; padding:0;
   font:6px ui-rounded;
}
.box{
  padding:14px; margin:14px 0 14px 0;
  font-weight:bold;
  border:solid 3px;
  border-image:linear-gradient(#bbb,#444) 30;
}
.box2{
  padding:14px; margin:14px 0 14px 0;
  font-weight:bold;
  border:solid 3px;
  border-image:linear-gradient(#bbb,#444) 30;
  background:linear-gradient(90deg,#278,#346);
}

.box3{
  padding:14px; margin:14px 0 14px 0;
  font-weight:bold;
  border:solid 3px;
  border-image:linear-gradient(#bbb,#444) 30;
}
.box4{
  padding:14px; margin:14px 0 14px 0;
  font-weight:bold;
  border:solid 3px; color:#333;
  border-image:linear-gradient(#bbb,#444) 30;
  background:linear-gradient(90deg,#ddd,#888);
}

.box4 a{
  color:#333;background:#eee;
}

.box5{
  padding:14px; margin:14px 0 14px 0;
  font-weight:bold;
  border:solid 3px;
  border-image:linear-gradient(#bbb,#444) 30;
  background:linear-gradient(90deg,#040,#346);
}
.box6{
  padding:14px; margin:14px 0 14px 0;
  color:#ff785f; font-weight:bold; 
  border:solid 3px;
  border-image:linear-gradient(#ff785f,#444) 30;
}

.box6 a{
  color:#ff785f;
}

.box0{
  padding:14px; margin:14px 0 14px 0;
  font-weight:bold;
  border:solid 3px;
  border-image:linear-gradient(#bbb,#444) 30;
  background:linear-gradient(90deg,#059,#346);
}

.right{
  display:block;text-align:right; 
}
select{
  font-weight:bold; font-size:18px; width:100%;
}

.en{
  background-color:#444; margin:0 0 48px 8px;
}

</style>

</head><body>

<div id="loading"><div>
<p><img src="https://34.si/miyon/" alt="Now Loading......" title="Now Loading..."></p>
<script>document.write("<p>Now Loading...</p>");</script>
<noscript>
<p>おそれいりますが、"JavaScript" を有効にして下さい！ みよんみよん！ </p>
<p>Please enable "JavaScript" to run this Web App! Miyon-Miyon!</p>
<p>©2021 weepjp</p>
</noscript>
</div></div>

<div id="contents" class="hidden" style="background-color:#223;">
<div id="wrap">
<h2 class="box2" id="pagetop" style="font-size:13px;"><a href="'.$srv2.'/" target="_top">'.$tit.'</a></h2>';
	$result .= '<div class="box3">';
	$result .= '<div class="box3" style="font-size:11px; text-align:center;">';
	$result .= '<p><a href="'.$srv2.'/" target="_top"><img src="/tit.png?2022" alt="InstanceTicker" title="InstanceTicker"></a></p>';
	$result .= '<p> | ';
	$result .= '<a href="'.$srv2.'/about" target="_top">TOP</a> | ';
	$result .= '<a href="'.$srv2.'/about#about" target="_top">ABOUT</a> | ';
	$result .= '<a href="https://weep.jp/coin" target="_blank">DONATE</a> | ';
	$result .= '<a href="https://github.com/InstanceTicker/InstanceTicker" target="_blank">GitHub</a> | ';
	$result .= '<a href="https://github.com/InstanceTicker/InstanceTicker/wiki/History" target="_blank">History</a> | ';
	$result .= '<a rel="me" href="https://miyon.miyon.org/@weepjp" target="_blank">@weepjp</a>';
	$result .= ' | </p></div>';

	$result .= '<div class="box3"><p style="text-align:center;">';
	$result .= '<img width="64" src="https://34.si/miyon/" alt="Miyon-Miyon" title="Miyon-Miyon">';
	$result .= '</p><p style="text-align:center; font-size:10px;">Miyon-Miyon!</p>';
	$result .= '</div></div>';
	$result .= $str;
    return $result; 
}


function htmf($str, $tit, $msg, $srv1, $srv2 ){
	$result  = '<div class="box6">'.$msg.'</div>';
	$result .= '<h2 class="box2" id="pagebottom" style="font-size:13px;"><a href="'.$srv2.'/" target="_top">'.$tit.'</a></h2>';
	$result .= '</div></div><script>';
	$result .= "
var loading  = document.getElementById('loading');
var contents = document.getElementById('contents');

window.addEventListener('load', function () {
   loading.style.display = 'none';
   contents.classList.remove('hidden');
});
</script>
</body></html>";
	$result.= $str;
    return $result; 
}



// base-62 encode and decode
// 62進数にして画像パスの文字数を削減させるバカな作戦
$xchar = array_merge(range('0','9'), range('a', 'z'), range('A', 'Z'));
function encode($number, $xchar){
    $result = '';
    $base = count($xchar);
     
    while($number > 0){
        $result = $xchar[ fmod($number, $base) ] . $result;
        $number = floor($number / $base);
    }
    return ($result == '' ) ? 0 : $result;
}
//デコード
function decode($str, $xchar){
    $result = 0;
    $base = count($xchar);
    $table = array_flip($xchar);
    $digit = array_reverse(preg_split('//', $str, -1, PREG_SPLIT_NO_EMPTY));
    foreach($digit as $i => $value){
        if(!isset($table[$value])) return false;
        $result += pow($base, $i) * $table[$value];
    }
    return $result;
}


function byteco($bytes){//いわゆる「formatSizeUnits」って名前で広まってるやつ。
    if ($bytes >= 1073741824) {
        $bytes = number_format($bytes / 1073741824, 2) . ' GB';
    } elseif ($bytes >= 1048576) {
        $bytes = number_format($bytes / 1048576, 2) . ' MB';
    } elseif ($bytes >= 1024) {
        $bytes = number_format($bytes / 1024, 2) . ' KB';
    } elseif ($bytes > 1) {
        $bytes = $bytes . ' bytes';
    } elseif ($bytes == 1) {
        $bytes = $bytes . ' byte';
    } else {
        $bytes = '0 bytes';
    }
    return $bytes;
}





$get1 = @htmlentities($_GET['get'],ENT_QUOTES,mb_internal_encoding());                        // ?get= (ただのテスト)
$req1 = @htmlentities(substr($_SERVER['REQUEST_URI'],1), ENT_QUOTES, mb_internal_encoding()); // 現在地URLからドメイン以外の部分を割り出す
$srv1 = @htmlentities($_SERVER['SERVER_NAME'], ENT_QUOTES, mb_internal_encoding());           // 現在地URLからドメイン部分を割り出す

$ext0 = @explode('?', $req1);      // ?区切り(クエリ)      /$ext0[0]?$ext0[1]?$ext0[2]
$ext1 = @explode('.', $ext0[0]);   // .区切り(拡張子)      /$ext1[0].$ext1[1].$ext1[2]
$ext2 = @explode('/', $ext1[0]);   // /区切り(ディレクトリ)/$ext2[0]/$ext2[1]/$ext2[2]

$ext20 = mb_strlen($ext2[0], 'utf-8'); // URLからドメイン以外の部分の文字数。

$tit = '#InstanceTicker';
$wtf = '//'.$srv1.'/'; // アイコンの絶対パス。wtf なのは「34.wtf」を使っていた名残です。


$hub = 'https://github.com/InstanceTicker/InstanceTicker';

$vck = "v?";

//ヘッダーメッセージ（広告とか置けるスペース？）
$msg = '<p><a href="https://34.si" target="_blank">34.si</a> は <img src="/img/mh.png?" title="mixhost"><a href="https://accounts.mixhost.jp/refer/561722" target="_blank" rel="nofollow">mixhost</a> を使ってるです。。。</p>';


// アクセスしたドメイン判定でSQLiteファイルパスや
// 現在地のドメインやタイトルなどを差し替えなどします。
// 使用するときは必ず設定しといてください。
switch ($srv1){

    case '34.si':  //メインサイト
      $tit = ''.$srv1.' ( #InstanceTicker Folk )';
      $srv2 = 'https://'.$srv1.'';
      $sql_path= '../instances.db';
    break;
    
    case 'inst.ance.tk': //旧サイト
      $tit = '#InstanceTicker ( inst.ance.tk )';
      $srv1 = '34.si';
      $srv2 = 'https://34.si';
      $sql_path= '../../34.si/instances.db';
    break;

    case 'localhost': // ローカルホスト
    case '127.0.0.0': // ロイヤルホスト
      $srv2 = 'http://'.$srv1.'';
      $sql_path= '../instances.db';
    break;
    
    default:
      $err1 = 403; // 設定外のドメインは403出しとこうぜ。
    break;
}


















//HTML Test Set
$htmt  = '<div class="box3">';
$htmt .= '$ext0[0] == '.$ext0[0].'<br>';
$htmt .= '$ext0[1] == '.$ext0[1].'</div><div class="box3">';
$htmt .= '$ext1[0] == '.$ext1[0].'<br>';
$htmt .= '$ext1[1] == '.$ext1[1].'</div><div class="box3">';
$htmt .= '$ext2[0] == '.$ext2[0].'<br>';
$htmt .= '$ext2[1] == '.$ext2[1].'</div>';






$mod_dir = './mod/';// mod Directory Path ※ mod ファイルは3文字以上必須
$mod_ext = '.php';// mod Extension Path

$mod_file = $mod_dir.$ext2[0].$mod_ext;// mod file path
$moc_file = $mod_dir.'css'.$mod_ext;// mod (css) file path ※バージョン日時用


$version =  @date("YmdHi", @filemtime( $sql_path )).''; //ログのほうのバージョン
$version2 = @date("dHis",  @filemtime( $sql_path )).''; //ログのほうのバージョン2
$version3 = encode($version , $xchar);                // mversion  の文字数削減版
$version4 = encode($version2, $xchar);                // mversion2 の文字数削減版


$err_webp = 'UklGRugAAABXRUJQVlA4WAoAAAACAAAADQAADQAAQU5JTQYAAAD/////AABBTk1GVgAAAAAAAAAAAA0AAA0AAGQAAAJWUDggPgAAALABAJ0BKg4ADgAJgLIlpAAwv4PHJAAAzUbqHSP3TToyfkcOGicfMrLTsKBfTuXdJBSOWOvsvLFxy2DPgwAAQU5NRl4AAAAAAAAAAAANAAANAABQAAAAVlA4IEYAAABUAQCdASoOAA4AAACyJaQAAAAAAPryLWbJVFgnxCXjZvn2JDzQ0iftLOZuujNag7QVMw9vyVT+6RCIhfUU2IbHhAj64AAA';

$top_webp = 'UklGRjQAAABXRUJQVlA4ICgAAACQAQCdASoQABAAD8D+JZgCdABgcAAAybN0KrrsUpWAAclIatH40AAA';



if(is_file($sql_path)){//SQLiteファイルが存在すると～き


	if(!empty($ext2[0]) or $ext2[0]=='0'){ //URLが空の状態ではない

	        // 62進数を数値にデコード
	        $que = decode($ext2[0], $xchar);
	        
	        // mod file 使いましたテイ。
	        $mod = 1;
	        
	        // Initialize
	        $db  = null;
	        $sql = null;
	        $res = null;
	        $con = null;

	        if($ext20 === 1 or $ext20 === 2 and empty($ext2[1])){// 2文字以下のときにアイコン画像に判定
	            
	            
	            
	            if($ext2[0] === '0'){ //0 のときは、ロゴ画像を表示。キャッシュコントロール。
	                header('Cache-Control: public,must-revalidate,max-age=6000');
	                
	                //昔使ってたノーキャッシュくん。
	                //header('Cache-Control:no-cache,no-store,must-revalidate,max-age=0,post-check=0,pre-check=0');
	                //header('Pragma:no-cache');
	                
	                //base64 を 画像ファイルにさせる表示。exit してこれでおわり。
	                header('Content-Type: image/webp');
	                header('Access-Control-Allow-Origin: *');
	                echo base64_decode($top_webp);
	                exit;
	            }
	            
	            
	            
	            //  SQLite を使って格納されたアイコン画像を参照。
	            $db = new SQLite3($sql_path);
	            $stmt = $db->prepare('SELECT * FROM `instances` WHERE id = :id');
				$stmt->bindValue(':id', $que, SQLITE3_TEXT);
	            $res = $stmt->execute();
	            
	            
	            /////////
	            // /while
	            while( $row = $res->fetchArray() ) {  

	                header('Cache-Control: public,must-revalidate,max-age=6000');
	                
	                //header('Cache-Control:no-cache,no-store,must-revalidate,max-age=0,post-check=0,pre-check=0');
	                //header('Pragma:no-cache');
	                
	                header('Content-Type: image/webp');
	                header('Access-Control-Allow-Origin: *');

	                if(!empty($row['webp'])){// webp 格納があるものに限る
	                    $ico2 = @explode(',', $row['webp']);
	                    if($ico2[0] == 'data:image/webp;base64'){//先頭に webp MINE がある場合のみ。
	                        echo base64_decode($ico2[1]); exit;
	                        
	                    }else{// ない場合。
	                        echo base64_decode($err_webp); exit;
	                    }
	                }else{// そもそも webp 格納がない場合。。
	                    echo base64_decode($err_webp); exit;
	                }
	            }// while
	            //////////
	            
	        }else{// 2文字以下のときにアイコン画像に判定はここまで！
	    
	            if(is_file($mod_file)) {// mod file が存在する場合。
	                
	                // Initialize
	                $db  = null;
	                $sql = null;
	                $res = null;
	                $con = null;
	                
	                // mod file が存在してるときのみ SQLite を使う。
	                $db = new SQLite3($sql_path);
	                
	                $mversion  = @date("YmdHi", @filemtime( $moc_file )).'';  // mバージョン年月日時分
	                $mversion2 = @date("dHis",  @filemtime( $moc_file )).'';  // mバージョン日時分秒
	                $mversion3 = encode($mversion , $xchar);                  // mversion  の文字数削減版
	                $mversion4 = encode($mversion2, $xchar);                  // mversion2 の文字数削減版
	                
	                //mod file
	                $mod = 1; // mod file 使いましたっと。
	                include($mod_file);
	            }else{
	                
	                $mod = ''; //mod file がそもそもない。
	                $err1 = '404'; // それすなわち404エラーっすね。
	                
	            }
	        }
	        
	        
	    
	    
	    
	    
	}else{ // 空の場合はマストドン並みに /about に転送する。
	    header("Location: ".$srv2."/about");
	    exit;
	}

}else{//SQLiteファイルが存在しないと～き

    $err1 = '5004';
    

}

if(empty($mod)){ // mod file がない or ページがないときは拡張子ごとにエラーを返す。
        
    //たしかなるエラーページであるフラグ
    switch ($err1){
        
        
        case 403: //403
          $err2 = '403 Forbidden';
          $tit .= ' - '.$err2;
        break;
        
        case 500: //500
          $err2 = '500 Internal Server Error';
          $tit .= ' - '.$err2;
        break;
		
        case 5004: //5004
          $err2 = 'establishing a database connection';//WordPressでおなじみの「データベース確立エラー」
          $err1 = 500; //500 扱い
          $tit .= ' - '.$err2;
        break;
        
        case 404: //404
        default: //変な値だったときも 404
          $err2 = '404 Not Found';
          $tit .= ' - '.$err2;
        break;
        
        
    }
        
    switch ($ext1[1]){ // 形式別で 404 表示。
        case 'webp': // .webp
        header('HTTP', true, 404);
        header("Content-Type: image/webp"); 
        echo base64_decode('UklGRugAAABXRUJQVlA4WAoAAAACAAAADQAADQAAQU5JTQYAAAD/////AABBTk1GVgAAAAAAAAAAAA0AAA0AAGQAAAJWUDggPgAAALABAJ0BKg4ADgAJgLIlpAAwv4PHJAAAzUbqHSP3TToyfkcOGicfMrLTsKBfTuXdJBSOWOvsvLFxy2DPgwAAQU5NRl4AAAAAAAAAAAANAAANAABQAAAAVlA4IEYAAABUAQCdASoOAA4AAACyJaQAAAAAAPryLWbJVFgnxCXjZvn2JDzQ0iftLOZuujNag7QVMw9vyVT+6RCIhfUU2IbHhAj64AAA');
        exit;
        break;



        case 'avif': // .avif
        header('HTTP', true, 404);
        header("Content-Type: image/avif"); 
        echo base64_decode('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');
        exit;
        break;




        case 'png': // .png
        header('HTTP', true, 404);
        header("Content-Type: image/png"); 
        echo base64_decode('iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAACGFjVEwAAAACAAAAAPONk3AAAADnUExURUxMTHZ2dmxsbGhoaJSUlGFhYWtra4+Pj56enlxcXICAgIGBgXl5eX19faCgoFVVVXJycqKioqurq7CwsEFBQYmJiZOTk0dHR1dXV2ZmZnp6epKSkq+vr8fHx09PT1paWoWFhY2NjZmZmaSkpKWlpaysrL29vTExMXFxcYaGhpqamrOzs7S0tLm5uTo6OkhISFBQUH9/f4iIiKmpqcLCwsnJySYmJi8vLzAwMDk5OVJRUsTExMvLy9PT09TU1Nra2hsbGygoKDQ0ND8/P0RERFhYWLa2tru7u87OztfX193d3eDg4P///wuqRxQAAAABdFJOUwBA5thmAAAAGmZjVEwAAAAAAAAADgAAAA4AAAAAAAAAAAAKAGQAAHjxsrgAAACxSURBVAjXDcexCsMgEADQMxhPOVQQFeIQRLEEkpAMobS0dCjt0P//oeZtD3bsjawoHo4mNoE2ZUVBB6F0owe7k1ZyRieRkgDq1zJjYhO55+8FMUYeSdjno5vRQneqkqNMG2MezOnbdyxuuw0WtNZs0sXNYx6OAN2QUibeDmFMjNC4v9OlqVVzJwQsy9Xzlq3jejkb1ntqymrjxBIC5Kpuw1uM1/qqiJCLutkP85u8lBD+wmoRo3n4eqsAAAAaZmNUTAAAAAEAAAAOAAAADgAAAAAAAAAAAAgAZAAAmUILDAAAALNmZEFUAAAAAgjXJcrRCoIwFADQe3c3cGMPGws22aYIouiDoBJBEBVBRfX/3xPW44ED4eh3eBiaEqU0Gk5ulpzGrj1UjiuQgtgyzFmIUzQDLOY41cavgT6jvwHl1qkp5DsVFhFUPBcrqpxbb1L6cRZBuKaXff/LbaGEmogxBv3FoF4tNXvFiMBQGjCOjbM19x6eD3dlJnYbtYY67iuql/eWQ4BS8Bcx1CJpbS0khbwby92fX/saEpHAAVK8AAAAAElFTkSuQmCC');
        exit;
        break;



        case 'gif': // .gif
        header('HTTP', true, 404);
        header("Content-Type: image/gif"); 
        echo base64_decode('R0lGODlhDgAOAPYKAEFBQU9PT1xcXGFhYWZmZmxsbHZ2dpSUlJ6enr29vSYmJjAwMDQ0NDk5OUREREhISFBQUFVVVVhYWGtra3FxcXp6en19fYGBgYWFhYmJiY+Pj5OTk5mZmaCgoKSkpKurq6ysrLOzs7S0tLm5ucLCwsTExMvLy9TU1NfX1xsbGygoKC8vLzExMTo6Oj8/P0dHR1JRUldXV1paWmhoaHJycnl5eX9/f4CAgIaGhoiIiI2NjZKSkpqamqKioqWlpampqa+vr7CwsLa2tru7u8fHx8nJyc7OztPT09ra2t3d3eDg4P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAADgAOAAAGokCIZtBBeDST0udCMVAsHc4IeSFdNIhPABCBXCwCREjzQWi+k8tgxBlXnJePCXXa2A+byyRiKhXGEQWCBR4IeAgVDwYGAEVFEgMFBhsPEBEZERaacBwfIQEYBCQZBQRvGBcHICQTRXYgBwANFwkgAiMWqhMTIiIKAKoYER8HFiK7GSMNFbaZHR+8GdIeAgsEDBMBCh4nR2cc1REOjA8ICRzSQQAh+QQFCAAKACwAAAAADgAOAAAHsIAxMC8ABis4OgQGAgI0NUdBNgIHMzwJPisBQQc3AgMzBTk4NkQDA0c7NDg5NDAtMjQvPzEzSzyEM0Q+ka9EQpU9BgY3O0gIP8NEui80QEDExjYDMQNBOiwCLCy5uz4INwM3LaAFBSwpjjU/PTM6RTflMzQzQDgGOzw6QT0yBy8vRoYEUVGAxo4E+/rVqNGvSIAZMnIocQcvBq0BB5KAElZtYY8ez+4l4EEAQMcaHwMBADs=');
        exit;
        break;


        case 'jpg': // .jpg
        case 'jpeg': // .jpeg
        header('HTTP', true, 404);
        header("Content-Type: image/jpeg"); 
        echo base64_decode('/9j/4AAQSkZJRgABAQEAYABgAAD/4QBoRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAARAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMy4xMAAA/9sAQwAUDg8SDw0UEhASFxUUGB4yIR4cHB49LC4kMklATEtHQEZFUFpzYlBVbVZFRmSIZW13e4GCgU5gjZeMfZZzfoF8/9sAQwEVFxceGh47ISE7fFNGU3x8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8/8AAEQgADgAOAwEhAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8Acp2IEHzN2BAwfy/DrTbh433ZinkZG2kqduf5+hoAgluPJuZgi43AEc8KNvOPQ8Vcf95FG+WUuN+Aeme1AH//2Q==');
        exit;
        break;




        case 'svg': // .svg
        header('HTTP', true, 404);
        header('Content-Type: image/svg+xml');
        header('Access-Control-Allow-Origin: *');
        echo ('<!-- #InstanceTicker SVG --><svg version="1.1" id="Tic_a" xmlns="http://www.w3.org/2000/svg" x="0" y="0"><style>#Tic_d{fill:#fff; font:bolder 11px Arial; text-shadow:##278 1px 1px,#278 -1px 1px,#278 1px -1px,#278 -1px -1px;}</style><g id="Tic_b"><linearGradient id="Tic_B" gradientUnits="userSpaceOnUse" x1="1" y1="1" x2="240" y2="20"><stop offset="0" stop-color="#278"/><stop offset=".65" stop-color="#278"/><stop offset="1" stop-color="#278" stop-opacity="0"/></linearGradient><path fill="url(#Tic_B)" d="M0 0H240V20H0Z" /></g><g id="Tic_c"><image class="Tic_i" x="2" y="2" width="16px" height="16px" href="data:image/webp;base64,UklGRugAAABXRUJQVlA4WAoAAAACAAAADQAADQAAQU5JTQYAAAD/////AABBTk1GVgAAAAAAAAAAAA0AAA0AAGQAAAJWUDggPgAAALABAJ0BKg4ADgAJgLIlpAAwv4PHJAAAzUbqHSP3TToyfkcOGicfMrLTsKBfTuXdJBSOWOvsvLFxy2DPgwAAQU5NRl4AAAAAAAAAAAANAAANAABQAAAAVlA4IEYAAABUAQCdASoOAA4AAACyJaQAAAAAAPryLWbJVFgnxCXjZvn2JDzQ0iftLOZuujNag7QVMw9vyVT+6RCIhfUU2IbHhAj64AAA"></image></g><text id="Tic_d" transform="translate(22 14)">#InstanceTicker: 404;</text></svg>');
        exit;
        break;

        case 'js': // .js
        case 'user': // .user.js
        header('HTTP', true, 404);
        header('Content-Type: text/plain');
        header('Access-Control-Allow-Origin: *');
        echo ('//404 Not Found');
        exit;
        break;

        case 'css': // .css
        header('HTTP', true, 404);
        header('Content-Type: text/css');
        header('Access-Control-Allow-Origin: *');
        echo ('//404 Not Found');
        exit;
        break;


        case 'tsv': // .tsv
        header('HTTP', true, 404);
        header('Content-Type: text/plain');
        header('Access-Control-Allow-Origin: *');
        echo ('404 Not Found');
        exit;
        break;


        default: // html 表示の場合はエラーメッセージを出す。
        header('HTTP', true, $err1);
        $con  = htmh('', $tit, $msg ,$srv1, $srv2);
        $con .= '<div class="box"><p>'.$err2.'</p></div>';
        
        $con .= "<!--\n";
        $con .= '$ext0[0] == '.$ext0[0]."\n";
        $con .= '$ext0[1] == '.$ext0[1]."\n";
        
        $con .= '$ext1[0] == '.$ext1[0]."\n";
        $con .= '$ext1[1] == '.$ext1[1]."\n";
        
        $con .= '$ext2[0] == '.$ext2[0]."\n";
        $con .= '$ext2[1] == '.$ext2[1]."\n";
        $con .= "-->\n";
        
        $con .= htmf('', $tit, $msg, $srv1, $srv2);
                    
        echo ($con);
        exit;
        break;
    }

}else{

    ?><?=$con?><?

}

?>