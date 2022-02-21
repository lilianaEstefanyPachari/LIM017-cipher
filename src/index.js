import cipher from "./cipher.js";
//cipher.encode();
//cipher.decode();

//mostrar u ocultar secciones
const encodePage = document.getElementById("encodePageBtn");
encodePage.addEventListener("click", showEncodePage);
function showEncodePage() {
  document.getElementById("homeBtn").style.display = "block";
  document.getElementById("encodePage").style.display = "block";
  document.getElementById("homepage").style.display = "none";
  document.getElementById("pageMessage").style.display = "block";
  document.getElementById("pageMessage").innerHTML = "CREA TU CLAVE CIFRADA!";
}

const decodePage = document.getElementById("decodePageBtn");
decodePage.addEventListener("click", showDecodePage);
function showDecodePage() {
  document.getElementById("homeBtn").style.display = "block";
  document.getElementById("decodePage").style.display = "block";
  document.getElementById("homepage").style.display = "none";
  document.getElementById("pageMessage").style.display = "block";
  document.getElementById("pageMessage").innerHTML = "DESCIFRA TU CLAVE!";
}

const toHomepage = document.getElementById("homeBtn");
toHomepage.addEventListener("click", showHomepage);
function showHomepage() {
  document.getElementById("homepage").style.display = "block";
  document.getElementById("encodePage").style.display = "none";
  document.getElementById("decodePage").style.display = "none";
  document.getElementById("pageMessage").style.display = "none";
  document.getElementById("homeBtn").style.display = "none";
}

//poner en mayuscula todo el texto del input ENCODE
document.getElementById("originalKey").onkeyup = function(){myFunctionToUpperCase()};

function myFunctionToUpperCase() {
  var theInput = document.getElementById("originalKey");
  theInput.value = theInput.value.toUpperCase();
}
//obtener datos del input text y number ENCODE
const start = document.getElementById("cipherButton");
start.addEventListener("click", functionSaveData);

function functionSaveData() {
  let stringValue = document.getElementById("originalKey").value;
  let offsetValue = parseInt(document.getElementById("offset").value);
  if (stringValue == "") {
    return alert("ingresa la clave que deseas cifrar");
  }
  if (isNaN(offsetValue) == true) {
    return alert("ingresa el desplazamiento para el cifrado");
  }
  let stringCipher = cipher.encode(offsetValue, stringValue);
  document.getElementById("cipherKey").value = stringCipher;
}

// poner en mayuscula todo el texto del input DECODE
document.getElementById("decodeKey").onkeyup = function(){myFunctionToUpperCaseDecode()};

function myFunctionToUpperCaseDecode() {
  let theInput = document.getElementById("decodeKey");
  theInput.value = theInput.value.toUpperCase();
}
//  obtener datos del input text y number DECODE
const startDecode = document.getElementById("decodeBtn");
startDecode.addEventListener("click", functionSaveDecodeData);

function functionSaveDecodeData() {
  let stringValue = document.getElementById("decodeKey").value;
  let offsetValue = parseInt(document.getElementById("offsetDecode").value);
  if (stringValue == "") {
    return alert("ingresa la clave que deseas descifrar");
  }
  if (isNaN(offsetValue) == true) {
    return alert("ingresa el desplazamiento para el descifrado");
  }
  let stringDecode = cipher.decode(offsetValue, stringValue);
  document.getElementById("myDecodeKey").value = stringDecode;
}

//limpiar campos
const clearBtn = document.getElementById("clearButtonEnc");
clearBtn.addEventListener("click",clearEncode);
function clearEncode(){
  document.getElementById("originalKey").value="";
  document.getElementById("offset").value="";
  document.getElementById("cipherKey").value ="";
}

const decodeClearBtn = document.getElementById("clearButtonDec");
decodeClearBtn.addEventListener("click",clearDecode);
function clearDecode(){
  document.getElementById("decodeKey").value="";
  document.getElementById("offsetDecode").value="";
  document.getElementById("myDecodeKey").value ="";
}
