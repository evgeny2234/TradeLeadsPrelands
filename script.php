<?php

	$query="SELECT * FROM table ORDER BY RAND() LIMIT 0,2";

	$json = '{"src" : "../../main.js","eval" : "console.log(\"This is Eval function\")"}';

	echo json_encode($json);

?>