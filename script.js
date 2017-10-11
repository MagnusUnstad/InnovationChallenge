let currentWord = "";

let tekstArr = ["fremtiden", "medisin", "førstehjelp", "mat"];
interval(tekstArr);
let i = 0;


//Index for textArr
let k = 0;

function interval(tekstArr) {
	let i = 0;


	let intervall =	setInterval(function(){
		
		document.getElementById("logotekst").innerHTML += tekstArr[k][i];

		i++;
		if (i > tekstArr[k].length) {
			clearInterval(intervall);
			document.getElementById("logotekst").innerHTML = tekstArr[k];
			setTimeout(function(){
				k++;
				if (k >= tekstArr.length) {
					k = 0;
				}
				
				
				document.getElementById("logotekst").innerHTML = "";
				interval(tekstArr);
				
			}, 2000 );

		}
		
	}, 150 );
}