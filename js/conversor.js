function start(){
	var inputValue = getInput()
	var base = getBaseChecked()
	var returnValue = converter(inputValue, base)
	setOutput(returnValue)
	}

function getInput(){
	var inputElement = document.getElementById('input')
	var decimalValue = new Number(inputElement.value)
	//console.log('Input Value: '+decimalValue)
	return decimalValue
	}

function getBaseChecked(){
	var binario = document.getElementById("binario")
	var octal = document.getElementById("octal")
	var hexadecimal = document.getElementById("hexadecimal")
	var checked
	if(binario.checked){
		checked = binario
	}else if(octal.checked){
		checked = octal
	}else if(hexadecimal.checked){
		checked = hexadecimal
	}
	return checked.value
}

function converter(value, base){
	return value.toString(base)
	}

function setOutput(returnValue){
	var OutputElement = document.getElementById('output')
	OutputElement.value = returnValue
	}


