<?





switch ($sex[0]){
    case '0': // GNU social
         $typc = '#a23';
         
         if(!$sex[3]){ $sex[3] = '#fff'; }
         if(!$sex[4]){ $sex[4] = '#a23'; }
         if(!$sex[5]){ $sex[5] = 'gnus.png'; }
         if(!$sex[7]){ $sex[7] = 'GNUsocial のアイコンを基に作成。'; }
    break;
    
    case '1': // Mastodon (Japan)
         $typc = '#27c';
         
         if(!$sex[3]){ $sex[3] = '#fff'; }
         if(!$sex[4]){ $sex[4] = '#27c'; }
         if(!$sex[5]){ $sex[5] = 'mstdn.png'; }
         if(!$sex[7]){ $sex[7] = 'Mastodon のアイコンを基に作成。'; }
         
    break;
    
    case '2': // Mastodon (abroad)
         $typc = '#49c';
         
         if(!$sex[3]){ $sex[3] = '#fff'; }
         if(!$sex[4]){ $sex[4] = '#49c'; }
         if(!$sex[5]){ $sex[5] = 'mstdn.png'; }
         if(!$sex[7]){ $sex[7] = 'Mastodon のアイコンを基に作成。'; }
         
    break;
    
    case '3': // Pleroma
         $typc = '#da5';
         
         if(!$sex[3]){ $sex[3] = '#da5'; }
         if(!$sex[4]){ $sex[4] = '#123'; }
         if(!$sex[5]){ $sex[5] = 'plrm.png'; }
         if(!$sex[7]){ $sex[7] = 'ロマネ・コンティっぽいアイコンを作成（みかん色なのは未完成だから）'; }
         
    break;
    
    case '4': // Misskey
         $typc = '#29b';
         
         if(!$sex[3]){ $sex[3] = '#fff'; }
         if(!$sex[4]){ $sex[4] = '#29b'; }
         if(!$sex[5]){ $sex[5] = 'msky2.png';}
         if(!$sex[6]){ $sex[6] = '36';       }
         if(!$sex[7]){ $sex[7] = '藍 https://github.com/syuilo/ai を基に作成';}
         if(!$sex[10]){ $sex[10] = 'https://github.com/syuilo/ai';}
         
    break;
    
    case '5': // PeerTube
         $typc = '#888';
         
         if(!$sex[3]){ $sex[3] = '#000'; }
         if(!$sex[4]){ $sex[4] = '#fff, #fff, #fff'; }
         if(!$sex[5]){ $sex[5] = 'peertube2.png';}
         if(!$sex[6]){ $sex[6] = '17';       }
         if(!$sex[7]){ $sex[7] = 'PeerTube のアイコンを基に作成。'; }
    break;
    
    case '6': // Juick
          $typc = '#000'; 
         
         if(!$sex[3]){ $sex[3] = '#fff'; }
         if(!$sex[4]){ $sex[4] = '#000'; }
         if(!$sex[5]){ $sex[5] = 'juick2.png';}
         if(!$sex[6]){ $sex[6] = '17';       }
         if(!$sex[7]){ $sex[7] = 'Juick のアイコンを基に作成。'; }
    break;
    
    case '7': // Write Freely
          $typc = '#bbb'; 
         
         if(!$sex[3]){ $sex[3] = '#000'; }
         if(!$sex[4]){ $sex[4] = '#bbb, #bbb, #bbb'; }
         if(!$sex[5]){ $sex[5] = 'wf.png';}
         if(!$sex[6]){ $sex[6] = '17';       }
         if(!$sex[7]){ $sex[7] = 'Write Freely のアイコンを基に作成。'; }
    break;
    
    case '8': // Pixelfed
          $typc = '#f55'; 
         
         if(!$sex[3]){ $sex[3] = '#000'; }
         if(!$sex[4]){ $sex[4] = '#fff'; }
         if(!$sex[5]){ $sex[5] = 'px.png';}
         if(!$sex[6]){ $sex[6] = '17';       }
         if(!$sex[7]){ $sex[7] = 'Pixelfed のアイコンを基に作成。'; }
    break;

    case '9': // NextCloud
          $typc = '#18c'; 
         
         if(!$sex[3]){ $sex[3] = '#000'; }
         if(!$sex[4]){ $sex[4] = '#fff'; }
         if(!$sex[5]){ $sex[5] = 'nextcloud.png';}
         if(!$sex[6]){ $sex[6] = '17';       }
         if(!$sex[7]){ $sex[7] = 'NextCloud のアイコンを基に作成。'; }
    break;


    default:
    
    break;
}


if($sex[3]=='#ffffff'){ $sex[3]='#fff';} //文字数削減
if($sex[4]=='#ffffff'){ $sex[4]='#fff';}

if($sex[3]=='#000000'){ $sex[3]='#000';}
if($sex[4]=='#000000'){ $sex[4]='#000';}


if(!$sex[1]){ $sex[1] = $sex[2];} // 名称が空っぽの場合はドメイン名を使う。
if( $sex[1] == '閉鎖'){ $sex[1] = '閉鎖済み';  $sex[3] = '#fff';  $sex[4] = '#666';}

if(!$sex[6]){//独自バナーサイズ
    $sex[6] = '18'; //デフォルト値
}

if($sex[6] >= 60){//独自バナーサイズを規定値を超すと
   $sex[1] = ''; //文字名を消しことにします。
   $sex[6] = 0;
}

$tit = @mb_strimwidth($sex[1],0,36,".."); //タイトル省略





?>