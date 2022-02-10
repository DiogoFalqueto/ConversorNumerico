function start(){
	var inputValue = getInputValue()
	var resultadoValue = converter(inputValue, 2)
	responder(resultadoValue)
	}

function getInputValue(){
	var inputElement = document.getElementById('input')
	var decimalValue = new Number(inputElement.value)
	console.log('Input Value: '+decimalValue)
	return decimalValue
	}

function converter(value, base){
	return value.toString(base)
	}

function responder(returnValue){
	var ResponseElement = document.getElementById('Resposta')
	ResponseElement.value = returnValue
	}


