<?php

//
// #InstanceTicker v.0.4.1 (2023-01-17)
// /mod/about.php
// (C)2018-2023 weepjp. Released under the MIT license.
// https://github.com/InstanceTicker/InstanceTicker/
//

function svg_err($str){ // エラー表示用のSVG（不採用になったSVGの再利用）
    $result = "";
    $result = '<!-- #MiyonTicker SVG --><svg version="1.1" id="Tic_a" xmlns="http://www.w3.org/2000/svg" x="0" y="0"><style>#Tic_d{fill:#fff; font:bolder 11px Arial; text-shadow:#278 1px 1px,#278 -1px 1px,#278 1px -1px,#278 -1px -1px;}</style><g id="Tic_b"><linearGradient id="Tic_B" gradientUnits="userSpaceOnUse" x1="1" y1="1" x2="240" y2="20"><stop offset="0" stop-color="#278"/><stop offset=".65" stop-color="#278"/><stop offset="1" stop-color="#278" stop-opacity="0"/></linearGradient><path fill="url(#Tic_B)" d="M0 0H240V20H0Z" /></g><g id="Tic_c"><image class="Tic_i" x="2" y="2" width="16px" height="16px" href="data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAwAgCdASoQABAAAcAsJbACdAEPAQ6bGLc/gADifmmXhpJcLash8Wqby8ByuWe9UYA7J9yUJHKDuIOtzuQz9UXMASfw7x6yloPSIrv/2cdfnkEc5+5X/ipivwbP2lEVdnAAAA=="></image></g><text id="Tic_d" transform="translate(22 14)">#MiyonTicker:'.$str.';</text></svg>';
    return $result;
}









if($mod==1){// 不正なURLかcheck


    $tit .= ' - About';


    $htmh.= '<div class="box3"><h2 class="box4" id="types">mod330 Types!</h2>';
    $htmh.= '<div class="box3" style="font-size:12px;text-align:center;">';
    $htmh.= '<p> | type0 | ';
    $htmh.= '<a href="'.$srv2.'/330/0.htm#css" target="_top">CSS</a> | ';
    $htmh.= '<a href="'.$srv2.'/330/0.htm#userjs" target="_top">USER.JS</a> | ';
    $htmh.= '<a href="'.$srv2.'/330/0.php" target="_top">LIST</a> |</p>' ;

    $htmh.= '<p> | type1 | ';
    $htmh.= '<a href="'.$srv2.'/330/1.htm#css" target="_top">CSS</a> | ';
    $htmh.= '<a href="'.$srv2.'/330/1.htm#userjs" target="_top">USER.JS</a> | ';
    $htmh.= '<a href="'.$srv2.'/330/1.php" target="_top">LIST</a> |</p>' ;

    $htmh.= '<p> | type2 | ';
    $htmh.= '<a href="'.$srv2.'/330/2.htm#css" target="_top">CSS</a> | ';
    $htmh.= '<a href="'.$srv2.'/330/2.htm#userjs" target="_top">USER.JS</a> | ';
    $htmh.= '<a href="'.$srv2.'/330/2.php" target="_top">LIST</a> |</p>' ;

    $htmh.= '<p> | type3 | ';
    $htmh.= '<a href="'.$srv2.'/330/3.htm#css" target="_top">CSS</a> | ';
    $htmh.= '<a href="'.$srv2.'/330/3.htm#userjs" target="_top">USER.JS</a> | ';
    $htmh.= '<a href="'.$srv2.'/330/3.php" target="_top">LIST</a> |</p>' ;
    $htmh.= '</div>';
    
    
    $htmh.= '<h2 class="box4" id="types">mod402 Types!</h2>';
    $htmh.= '<div class="box3" style="font-size:12px;text-align:center;">';
    $htmh.= '<p> | type0 | ';
    $htmh.= '<a href="'.$srv2.'/402/0.htm#css" target="_top">CSS</a> | ';
    $htmh.= '<a href="'.$srv2.'/402/0.htm#userjs" target="_top">USER.JS</a> | ';
    $htmh.= '<a href="'.$srv2.'/402/0.php" target="_top">LIST</a> |</p>' ;

    $htmh.= '<p> | type1 | ';
    $htmh.= '<a href="'.$srv2.'/402/1.htm#css" target="_top">CSS</a> | ';
    $htmh.= '<a href="'.$srv2.'/402/1.htm#userjs" target="_top">USER.JS</a> | ';
    $htmh.= '<a href="'.$srv2.'/402/1.php" target="_top">LIST</a> |</p>' ;

    $htmh.= '<p> | type2 | ';
    $htmh.= '<a href="'.$srv2.'/402/2.htm#css" target="_top">CSS</a> | ';
    $htmh.= '<a href="'.$srv2.'/402/2.htm#userjs" target="_top">USER.JS</a> | ';
    $htmh.= '<a href="'.$srv2.'/402/2.php" target="_top">LIST</a> |</p>' ;

    $htmh.= '<p> | type3 | ';
    $htmh.= '<a href="'.$srv2.'/402/3.htm#css" target="_top">CSS</a> | ';
    $htmh.= '<a href="'.$srv2.'/402/3.htm#userjs" target="_top">USER.JS</a> | ';
    $htmh.= '<a href="'.$srv2.'/402/3.php" target="_top">LIST</a> |</p>' ;
    $htmh.= '</div></div>';
    
    $con = htmh($htmh , $tit, $msg ,$srv1, $srv2);


    $con .= '<div class="box3"><h2 class="box2" id="about">About #InstanceTicker</h2>';
    $con .= '<div class="box2" style="font-size:12px;">';

    $con .= '<p><img src="'.$srv2.'/img/it.png?" title="#InstanceTicker"><a href="https://github.com/InstanceTicker/InstanceTicker/" target="_blank">#InstanceTicker</a> は、<img src="'.$srv2.'/img/mstdn.png" title="Mastodon"><a href="https://github.com/tootsuite/mastodon" target="_blank">Mastodon</a> に対応するカスタムCSSで、投稿者のサーバー名（インスタンス）を表示する目的のものです。</p>';
    $con .= '<div class="en"><p><img src="'.$srv2.'/img/it.png?" title="#InstanceTicker"><a href="https://github.com/InstanceTicker/InstanceTicker/" target="_blank">#InstanceTicker</a> is custom CSS of <img src="'.$srv2.'/img/mstdn.png" title="Mastodon"><a href="https://github.com/tootsuite/mastodon" target="_blank">Mastodon</a> that aims to display the server name (Instance).</p></div>';



    $con .= '<p>当サイトでは、#InstanceTicker の <img src="'.$srv2.'/img/ccss.png?" title="#InstanceTicker CustomCSS"><a href="'.$srv2.'/css/0.htm#css" target="_top">カスタムCSSの配信および発行</a> と <img src="'.$srv2.'/img/itjs.png?" title="#InstanceTicker .user.js"><a href="'.$srv2.'/css/0.htm#userjs" target="_top">ユーザースクリプト(.user.js) </a> の開発を行っています。</p>';
    $con .= '<div class="en"><p>#InstanceTicker is publishes and develops <img src="'.$srv2.'/img/ccss.png?" title="#InstanceTicker CustomCSS"><a href="'.$srv2.'/css/0.htm#css" target="_top">custom CSS</a>  and <img src="'.$srv2.'/img/itjs.png?" title="#InstanceTicker .user.js"><a href="'.$srv2.'/css/0.htm#userjs" target="_top">user scripts(.user.js)</a>.</p></div>';


    
    $con .= '</div>';
    
    
    $con .= '<p class="box2">License:<span class="right">'.$coy.'</span></p></div>';























    $con .= '<div class="box3"><h2 class="box6" id="members">#InstanceTicker Members!</h2>';
    $con .= '<div class="box6" style="font-size:12px;">';

    $con .= '<p><img src="https://res.cloudinary.com/weep/ext/weep.gif" height="48" title="weepjp"></p>';
    $con .= '<p>コミッター: <a href="https://miyon.miyon.org/@weepjp" target="_blank">weepjp</a>';
    $con .= '<div class="en"><p>Committer: <a href="https://miyon.miyon.org/@weepjp" target="_blank">weepjp</a></p></div>';

    $con .= '<p><img src="https://34.si/miyon/" height="48" title="Miyon-Miyon"></p>';
    $con .= '<p>看板娘: みよんみよん';
    $con .= '<div class="en"><p>Mascot: Miyon-Miyon</p></div>';

    $con .= '<p><img src="'.$srv2.'/img/it.png" height="32" title="#InstanceTicker"></p>';
    $con .= '<p>つかってくださってるみなさま！<br>';
    $con .= '<div class="en"><p>and Users!</p></div>';


    
    $con .= '</p></div></div>';
    $con .= htmf($str, $tit, $msg, $srv1, $srv2 );



}else{


    //不正なURL。例：/mod/**.php に直接アクセスした場合など。
    $con = svg_err('ERROR');
    
    header('Content-Type: image/svg+xml');
    header('Access-Control-Allow-Origin: *');
    echo ($con);
    exit;

}// URL check おわり
?>
