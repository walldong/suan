  function GetRandomNumE(Min,Max)
	{   
		var Range = Max - Min;   
		var Rand = Math.random();   
		return(Min + Math.round(Rand * Range));   
	}
	function max_numE(x,y) {
		var t;
		while (y) {
			t = x%y;
			x = y;
			y = t;
		}
		return x;
	}
	function fenshuE(a,b,p) {
		if (p==1) {
			if (a>b) {
				return a+"/"+b;
			}else if(a<b){
				return a+"/"+b;
			}else {
				return 1;
			}
		}else {
			var x=a/p;
			var y=b/p;
			if(y==1){
				return x;
			}else{
				return x+"/"+y;
			}
		}
	}
	function f_countE(a,b,c,d) {
			var Arr = ["+","-","*","/"];  
			var n = GetRandomNumE(0,3);
			switch(Arr[n]){
				case "+":{
				var sum_x=(a*d)+(b*c);
				var sum_y=b*d;
				max_x=max_numE(sum_x,sum_y);
				max_y=max_numE(sum_x,sum_y);
				var N=fenshuE(sum_x,sum_y,max_x);
				return a+"/"+b+"+"+c+"/"+d+"="+N;
				break;
				}
				case "-":{
				var sum_x=(a*d)-(b*c);
					while (sum_x<0) {
						var a = GetRandomNumE(1,30);    
						var b = GetRandomNumE(1,30);
						var c = GetRandomNumE(1,30);    
						var d = GetRandomNumE(1,30);
						var sum_x=(a*d)-(b*c);
					}
				var sum_y=b*d;
				max_x=max_numE(sum_x,sum_y);
				max_y=max_numE(sum_x,sum_y);
				var N=fenshuE(sum_x,sum_y,max_x);
				return a+"/"+b+"-"+c+"/"+d+"="+N;
				break;
				}
				case "*":{
				var sum_x=a*c;
				var sum_y=b*d;
				max_x=max_numE(sum_x,sum_y);
				max_y=max_numE(sum_x,sum_y);
				var N=fenshuE(sum_x,sum_y,max_x);
				return a+"/"+b+"*"+c+"/"+d+"="+N;
				break;
				}
				case "/":{
				var sum_x=a*d;
				var sum_y=b*c;
				max_x=max_numE(sum_x,sum_y);
				max_y=max_numE(sum_x,sum_y);
				var N=fenshuE(sum_x,sum_y,max_x);
				return a+"/"+b+"÷"+c+"/"+d+"="+N;
				break;
				}
			}
	}
	function countE(a,b){
			var Arr = ["+","-","*","/"];  
			var n = GetRandomNumE(0,3);
			switch(Arr[n]){
				case "+":{
				var sum=a+b;
				return a+"+"+b+"="+sum;
				break;
				}
				case "-":{
				var sum=a-b;
				while(sum<0){
					var a = GetRandomNumE(1,30);
					var b = GetRandomNumE(1,30);
					var sum=a-b;
				}
				return a+"-"+b+"="+sum;
				break;
				}
				case "*":{
				var sum=a*b;
				return a+"*"+b+"="+sum;
				break;
				}
				case "/":{
				var sum=a/b;
				while(a%b!==0){
					var max_x=max_numE(a,b);
					var N=fenshuE(a,b,max_x);
					return a+"÷"+b+"="+N;
				}
				return a+"÷"+b+"="+sum;
				break;
				}
			}
	}
	function pl_fE() {
		var son_a = GetRandomNumE(1,30);    
		var par_b = GetRandomNumE(1,30);
		var son_c = GetRandomNumE(1,30);    
		var par_d = GetRandomNumE(1,30);
		var suma=f_countE(son_a,par_b,son_c,par_d);
		return suma;
	}
	function plE() {
			var a = GetRandomNumE(1,30);   
			var b = GetRandomNumE(1,30);
			var sumb=countE(a,b);
			return sumb;
	}
	function play_allE() {
			document.getElementById("textE").innerHTML=null;
			document.getElementById("text2E").innerHTML=null;
			var S=document.getElementById("shu").value;
			for (i = 1; i <=S; i++) {
				var a = GetRandomNumE(0,1);
				document.getElementById("textE").innerHTML+=("<br>"+"第"+i+"题：");
				switch (a) {
					case 0:
						var A=plE();
						var strs = A.split("=");
						document.getElementById("textE").innerHTML+=(strs[0]+"="+"<br>");
						document.getElementById("text2E").innerHTML+=("<br>"+"第"+i+"题答案："+strs[1]+"<br>");
						break;
					case 1:
						var B=pl_fE();
						var strs = B.split("=");
						document.getElementById("textE").innerHTML+=(strs[0]+"="+"<br>");
						document.getElementById("text2E").innerHTML+=("<br>"+"第"+i+"题答案："+strs[1]+"<br>");
						break;
				}
			}
	}