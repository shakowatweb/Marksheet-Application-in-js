function gpaCalculate(marks){
	var marks = parseInt(marks);

	if(marks >=80 && marks <=100){
		return 5 +'@ A+';
	}else if(marks >=70 && marks <=79){
		return 4 +'@ A';
	}
	else if(marks >=60 && marks <=69){
		return 3.5 +'@ A-';
	}
	else if(marks >=50 && marks <=59){
		return 3 +'@ B';
	}
	else if(marks >=40 && marks <=49){
		return 2 +'@ C';
	}
	else if(marks >=33 && marks <=39){
		return 1 +'@ D';
	}else{
		return 0 +'@ F';
	}
}

function Shakowat(value, LG, GP){
	var get_result = gpaCalculate(value); 
	var result = get_result.split("@"); //[Note: we break (@) the return value and it's an array now and it's index is two (0, 1)]
	document.getElementById(GP).innerHTML = result[0];
	document.getElementById(LG).innerHTML = result[1];
}

function total(){
	var ba = document.getElementById('gpa_bangla').innerHTML;
	var en = document.getElementById('gpa_english').innerHTML;
	var ma = document.getElementById('gpa_math').innerHTML;
	var ph = document.getElementById('gpa_physices').innerHTML;
	var ch = document.getElementById('gpa_chemistry').innerHTML;
	var bi = document.getElementById('gpa_biology').innerHTML;
	var re = document.getElementById('gpa_religion').innerHTML;
	var co = document.getElementById('gpa_computer').innerHTML;

	var gpa = (parseFloat(ba) + parseFloat(en) + parseFloat(ma) + parseFloat(ph) + parseFloat(ch) + parseFloat(bi) + parseFloat(re) + parseFloat(co))/8;


	if(ba==0 ||en==0||ma==0||ph==0||ch==0||bi==0||re==0||co==0){
		 gpa = 0;
		}

	document.getElementById("total_GPA").innerHTML = gpa;

	document.getElementById("AVG_GP").innerHTML=Finalgpa(gpa);

	
	var ban = parseInt(document.getElementById('ban').value);
	var ean = parseInt(document.getElementById('ean').value);
	var mat = parseInt(document.getElementById('mat').value);
	var phy = parseInt(document.getElementById('phy').value);
	var che = parseInt(document.getElementById('che').value);
	var bio = parseInt(document.getElementById('bio').value);
	var rel = parseInt(document.getElementById('rel').value);
	var com = parseInt(document.getElementById('com').value);

	
	var total_marks = ((ban)+(ean)+(mat)+(phy)+(che)+(bio)+(rel)+(com));
	document.getElementById('total_m').innerHTML = total_marks;
}	

function Finalgpa(marks){
	if(marks == 5){
		return 'A+';
	}else if(marks >= 4 && marks <= 4.99){
		return 'A';
	}else if(marks >= 3.5 && marks  <= 3.99){
		return 'A-';
	}else if(marks >= 3 && marks  <= 3.49){
		return 'B';
	}else if(marks >= 2 && marks  <= 2.99){
		return 'C';
	}else if(marks >= 1 && marks  <= 1.99){
		return 'D';
	}else{
		return 'F';
	}


}
//----------------------------------------------Department Change ------------------------------------------------------------

// function science(id){

// }