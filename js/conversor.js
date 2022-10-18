const baseName = {
	"Binario": 2,
	"Decimal": 10,
	"Octal": 8,
	"Hexadecimal": 16
}

function start(){
	const inputInt = getInput()
	const outputBase = getBaseOutput()
	const output = converter(inputInt, outputBase)
	setOutput(output)
	}

function getInput(){
	const inputNumber = document.getElementById('input').value
	const inputBaseName = document.getElementById("FormControlSelectInput").value
	const inputBase = baseName[inputBaseName]
	
	return Number.parseInt(inputNumber, inputBase)
	}

function getBaseOutput(){
	const outputBaseName = document.getElementById("FormControlSelectOutput").value
	return baseName[outputBaseName]
}

function converter(value, base){
	return value.toString(base)
	}

function setOutput(returnValue){
	const OutputElement = document.getElementById('output')
	OutputElement.value = returnValue
	}


