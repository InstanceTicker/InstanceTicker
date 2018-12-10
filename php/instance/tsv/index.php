<?php




$lnk = '../../set.txt';//データファイル先。
$set = file($lnk);

$con = '';



   @header('Content-Type: text/plain; charset=utf-8');
   @header('Access-Control-Allow-Origin: *');
   @header('Access-Control-Allow-Methods: GET, POST, PUT');
   @header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');




$n = 0;

for($i = 0; $i < count($set); $i++){

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


    if($sex[0] or $sex[0] == '0' or $sex[0] == '[0]タイプ'){
        $con .= "".$sex[0];
        $con .= "\t".$sex[1];
        $con .= "\t".$sex[2];
        $con .= "\t".$sex[3];
        $con .= "\t".$sex[4];
        $con .= "\t".$sex[5];
        $con .= "\t".$sex[6];
        $con .= "\t".$sex[7];
        $con .= "\t".$sex[8];
        $con .= "\t".$sex[9];
        
        $con .= "\t\t\n";
        
   }


}








?><?=$con?>