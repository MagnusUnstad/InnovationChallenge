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


const doc = document.documentElement;

function scrollFunc() {
	let intensity = Math.round(doc.scrollTop);
	if (intensity > 100) {
		intensity = 99;
	}
	let transparency = Math.round(doc.scrollTop  / 4);
	if (transparency > 98) {
		transparency = 98;
	}
	console.log(transparency);
	
	document.getElementById("navBarScr").style.backgroundColor = 'rgba(169,169,169,0.' + transparency + ')';

}