<?php

/*$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $_GET['uri']);
curl_setopt($ch, CURLOPT_HEADER, 1);
curl_setopt($ch, CURLOPT_NOBODY, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);

$result = curl_exec($ch);

echo $_GET['uri'];
echo $result ;
*/

$uri = $_GET['uri'] ;
$file_headers = @get_headers($uri);

if($file_headers[0] == 'HTTP/1.1 404 Not Found' || !$file_headers) {
  $status = '404' ; 
} else {
  $status = '200' ;
}

echo "{ \"status\": $status }" ;

/*echo "URI: " . $uri . PHP_EOL ;
if (!$fp = curl_init($uri)) {
 // return false;
echo "URI not good" . PHP_EOL ;

} else {
//  return true;
echo "URI good" . PHP_EOL ;
}*/
?>


