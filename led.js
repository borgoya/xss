
var t_url = window.location.href;
//var t_url = "http://localhost/projects/xss/attack/search_r.php";

var s_url = new Array(
"http://localhost/projects/xss/attack/home.php",
"http://localhost/projects/xss/attack/qform.php", 
"http://localhost/projects/xss/attack/info.php",
"http://localhost/projects/xss/attack/info_put.php",
"http://localhost/projects/xss/attack/search.php",
"http://localhost/projects/xss/attack/signin.php",
"http://localhost/projects/xss/attack/signup.php",
"http://localhost/projects/xss/attack/error.php");

var i=0;
var n=s_url.length;
var dist = new Array(); 
for(i=0;i<n;i++){
	dist[i] = led(s_url[i],t_url);
	//console.log(dist[i]);
}
var temp = Math.min.apply(Math,dist);
//console.log(temp);

	if(temp==0){
		//document.getElementById('mid').innerHTML = "<h1>Rule Set Matches</h1>";
		console.log("Matched");
	}
	else{
		//console.log("Not Matched");
		window.location = "http://localhost/projects/xss/attack/signin.php";
		
	}



function led(s,t){
	
	s = s.toLowerCase();
    	t = t.toLowerCase();
	
	// source and target string length
	var slen = s.length;
	var tlen = t.length;
	var i,j=0,d=0;
	
	if(s==t) return 0;
	if(slen==0) return tlen;
	if(tlen==0) return slen;
    
        var costs = [];


  	for(i=0;i<=slen;i++){
  		costs[i]=[i];
  	}
	
  	for(j=0;j<=tlen;j++){
  	 	costs[0][j]=j;
  	}

 	for (j = 1; j <= tlen; j++){
     	for (i = 1; i <= slen; i++){
 	 		if(s.charAt(i-1)==t.charAt(j-1)){
 	 			costs[i][j]=costs[i-1][j-1];
 	 		}
 	 		else{
 	 			var del=costs[i-1][j]+1;
 	 			var insert=costs[i][j-1]+1;
 	 			var sub=costs[i-1][j-1]+1;
 	 			var temp=Math.min(del,insert);
 	 			costs[i][j]=Math.min(temp,sub);
 	 			d=costs[i][j];
 			}		
  		}	
	}
	
 	return d;
}

