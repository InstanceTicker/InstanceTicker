<?php
// #InstanceTicker icon path (C)2022 weepjp
// アイ・コンパス・アンダスコアー
// 62進数指定用（英数字で指定できるやつ。）
//
// 公開ソース用に作成。




$err_webp = base64_decode('UklGRqAAAABXRUJQVlA4IJQAAAAwAgCdASoQABAAAMASJbACdLoAAwkQSPVIwAD5fjDjb8CP0pwSXrxjRBRZbrMFTXBQS7yI/9OVafkn+aL/+6/m2+ngtqteihm9jBhMc9P1U9nmqcca/2VSJrMvCFYOqM1bB2vynR9Mn59ISMz135/v/gyS4hAirb2+yWddMG/+p9hVB1EAY4Ic/6n3VUHUX47hTQAA');

$top_webp = base64_decode('UklGRooAAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSDYAAAABDzD/ERGCTWxbjT4VyEgdLSYYRCCECnlRBDigjLvfRkT/gz4SGW/Gaad9sDIpAOgwFy4cSBFWUDggLgAAALABAJ0BKhAAEAAPwP4lpAABegb+UAAA4fc3b1MPDYBD5imPBbxfQ214AixgAAA=');


// 数値にデコード
$que = decode($ext2[1], $xchar);


if($ext1[1]=='webp' || $ext1[1]=='' && preg_match("/^[0-9]+$/", $que) && $que > 0){// 数字判定
    // SQLite
    $sql = 'SELECT * FROM `instances` WHERE id = '.$que.' ';
    $res = $db->query($sql);
    
    ///////
    //while
    while( $row = $res->fetchArray() ) {  
        if(!empty($row['webp'])){// webp 値があるものに限る
            header('Cache-Control: public,must-revalidate,max-age=6000');
            header('Content-Type: image/webp');
            header('Access-Control-Allow-Origin: *');
            $ico2 = @explode(',', $row['webp']);
            if($ico2[0] == 'data:image/webp;base64'){
                $con = base64_decode($ico2[1]);
                echo $con; exit;
            }else{
                header('Cache-Control: public,must-revalidate,max-age=6000');
                header('Content-Type: image/webp');
                header('Access-Control-Allow-Origin: *');
                echo $err_webp; exit;
            }
        }
    }
    //while
    ///////
    
    if($que=='0'){ // トップページは .webp しか吐き出さないクソサイト。
        header('Content-Type: image/webp');
        header('Access-Control-Allow-Origin: *');
        echo $top_webp; exit;
    }
}








switch ($dot[1]){ //404 (拡張子通りに)
    case 'webp': // .webp
    default:
    header('Content-Type: image/webp');
    header('Access-Control-Allow-Origin: *');
    header('Cache-Control: max-age=21600');
    echo $err_webp; exit;
    break;

    case 'png': // .png
    header("HTTP/1.0 404 Not Found");
    header("Content-Type: image/png"); 
    echo base64_decode('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyElEQVQ4y2NgYGD4D8PqlfsYdGoPM+i3XWQw6LgCx6qVhxiQ1aFhhv/IivFhkMH6LefgGGwATBLMAwIGLAAkDFLjOOk6mP0fAiCGwAz4DxNFaEIHyJrhfLhmdBdgMQwbTboBIGdjNQDFrfhdgKoUVyDiMADZQgaCBiADt6k3GYy7ruI3ABdASQvQNIBhALoiXOLwBATDyAr0ms/iTIU6jacwNaMbgCe948aa1QcpMwBEgJwHM0Sr5hADyQbAsG7jCVS/t18iaBgA4b63IojDq34AAAAASUVORK5CYII=');
    exit;
    break;

    case 'gif': // .gif
    header("HTTP/1.0 404 Not Found");
    header("Content-Type: image/gif"); 
    echo base64_decode('R0lGODlhEAAQAJEAAAAAACVX/////wAAACH5BAEAAAEALAAAAAAQABAAAAIwhIMZxqevQBJwKkEDxoh3/YFUJoYj2G3oqFqr624kWdV25NxN0vQ74gtKeMLeQ1gAADs=');
    exit;
    break;

    case 'jpg': // .jpg jpeg
    case 'jpeg': // .jpg jpeg
    header("HTTP/1.0 404 Not Found");
    header("Content-Type: image/jpeg"); 
    echo base64_decode('/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAQABADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCz4c/Z78C+GvAPgqbT4oZdPnt9VvdSl0jVrZbi5eDR4L2OEJiQxNG4khkZ0d8jc5AliUVPE/7Mfw21jwZ481tNMsb/AFEaJZX9tDquo2q3tikkOlzM7ECN5i6Xk8UbqqhTBtAaSSPb85T/AB78T+GF0vUvA9vqWtafAzy299ompvHJaXEqBZQI41Lxs0aRhjgZG1T0Aryzx1+15418XTXNzbXt7Y318qx6je3V6b2a8jUoUjdpF5UGOM4YHmNMY28/0bmea5flqjSxFfmhHVRUJNS9/m926VNrldrxklb3UuXR/B4fDV695QhZvd3Wmltftb66q/Xc/9k=');
    exit;
    break;

    case 'svg': // .svg
    header("HTTP/1.0 404 Not Found");
    header('Content-Type: image/svg+xml');
    header('Access-Control-Allow-Origin: *');
    echo ('<!-- #InstanceTicker SVG --><svg version="1.1" id="Tic_a" xmlns="http://www.w3.org/2000/svg" x="0" y="0"><style>#Tic_d{fill:#fff; font:bolder 11px Arial; text-shadow:##278 1px 1px,#278 -1px 1px,#278 1px -1px,#278 -1px -1px;}</style><g id="Tic_b"><linearGradient id="Tic_B" gradientUnits="userSpaceOnUse" x1="1" y1="1" x2="240" y2="20"><stop offset="0" stop-color="#278"/><stop offset=".65" stop-color="#278"/><stop offset="1" stop-color="#278" stop-opacity="0"/></linearGradient><path fill="url(#Tic_B)" d="M0 0H240V20H0Z" /></g><g id="Tic_c"><image class="Tic_i" x="2" y="2" width="16px" height="16px" href="data:image/webp;base64,UklGRj4BAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSDYAAAABDzD/ERGCTWxbjT4VyEgdLSYYRCCECnlRBDigjLvfRkT/gz4SGW/Gaad9sDIpAOgwFy4cSBFWUDgg4gAAALAEAJ0BKhAAEAAAwBIlpAAdLNTgP7B5+XwB5gtQD9J/7f+XncA9AAv8MO3c4AAA/vhG/8/H/wgPYTR7/+TM+7fTyhFc9SUPzuR7rpSj/kf/Wnh38/83n/lv8k0oPR7O5rieduAutpbD8D6kf29N07/4qjD4DsITvGJzxhXlMzT+lzOp+bA4CCYwn5c/ktQ/hKA56Y7/id/98tP4U9MFt6TbdcdSr3/8PPH98fvI92k76mgPRg/nDZTGnlaM5FoxJett+aY3tdP7+QChlf/wL5O47FkgN7aCkRVTXNZkoZ3fQAA="></image></g><text id="Tic_d" transform="translate(22 14)">404</text></svg>');
    exit;
    break;
}

?>
