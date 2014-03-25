<?php

$url = $_GET['url'] ;
$file_headers = @get_headers($url);

if($file_headers[0] == 'HTTP/1.1 404 Not Found' || !$file_headers) {
  $status = '404' ; 
} else {
  $status = '200' ;
}

echo "{ \"status\": $status }" ;

?>


