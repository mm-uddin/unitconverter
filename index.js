/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeet = 3.281
const literToGallon = 0.264 
const kiloToPound = 2.204



let displayLengthElement = document.getElementById("display-length")
let displayVolume = document.getElementById("display-volume")
let displayMass = document.getElementById("display-mass")

let convertBtn = document.getElementById("convert-btn")



function lengthConversion(){

let inputValue = Number(document.getElementById("input-box").value)
displayLengthElement.textContent = `${inputValue} meters = ${(inputValue * meterToFeet).toFixed(2)} feet | ${inputValue} feet = ${(inputValue / meterToFeet).toFixed(2)} meters`
displayVolume.textContent = `${inputValue} liters = ${(inputValue * literToGallon).toFixed(2)} gallons | ${inputValue} gallons = ${(inputValue / literToGallon).toFixed(2)} liters`
displayMass.textContent = `${inputValue} kilos = ${(inputValue * kiloToPound).toFixed(2)} pounds | ${inputValue} pounds = ${(inputValue / kiloToPound).toFixed(2)} kilos`

}

convertBtn.addEventListener("click", function(){
  lengthConversion();
})