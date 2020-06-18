function getHistory(num){
	return document.getElementById("hvalues").innerText;
}
function printHistory(num) {
	document.getElementById("hvalues").innerText=num;
}
function getOutput(num){
	return document.getElementById("outvalues").innerText;
}
function printOutput(num){
	if(num==""){      //if-else for treatinfg empty output 
	document.getElementById("outvalues").innerText=num; 
	}else{
		document.getElementById("outvalues").innerText=getformatedNumber(num);
	}
}
function getformatedNumber(num){
	var n = Number(num)
	var value=n.toLocaleString("en"); //to have comma separated o/p toLocaleString
	return value; 
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
for(var i=0; i<operator.length; i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("")
			printOutput("")
		}else if(this.id=='backspace'){
			var output=reverseNumberFormat(getOutput()).toString()
			if(output){
				output=output.substr(0,output.length-1)
				printOutput(output)
			}
		}
		else{
			var output = getOutput()
			var history = getHistory()
			if(output=="" && history !=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output != "" || history != ""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}	
	})
}
var n = document.getElementsByClassName("number");
for(var i=0; i<n.length; i++){
	n[i].addEventListener('click',function(){
		var output = reverseNumberFormat(getOutput());
		if(output!=NaN){
			output=output+ this.id
			printOutput(output)
		}
	})
}