<?php

$length = strlen($input);
$str = getInput($input,$length);

function getInput($input, $length){
	$j=0;
	for($i=0;$i<$length;$i++){
		switch ($input[$i]) {
			case '<':
			$inputString[$j] = "&";
			$inputString[++$j]="l";
			$inputString[++$j]="t";
			$inputString[++$j]=";";
			$j++;
			break;
			
			case '>':
			$inputString[$j] = "&";
			$inputString[++$j]="g";
			$inputString[++$j]="t";
			$inputString[++$j]=";";
			$j++;
			break;

			case ' ':
			$inputString[$j] = "&";
			$inputString[++$j]="n";
			$inputString[++$j]="b";
			$inputString[++$j]="s";
			$inputString[++$j]="p";
			$inputString[++$j]=";";
			$j++;
			break;

			case '&':
			$inputString[$j] = "&";
			$inputString[++$j]="a";
			$inputString[++$j]="m";
			$inputString[++$j]="p";
			$inputString[++$j]=";";
			$j++;
			break;


			default:
			$inputString[$j]=$input[$i];
 			$j++;
		}
		
	}

	$inputString = implode("",$inputString);
	return $inputString;
	}


?>









