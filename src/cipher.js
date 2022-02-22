const cipher = {
  encode: function (offsetValue, stringValue) {
    if (isNaN(offsetValue) == true || typeof offsetValue == "object") {
      throw new TypeError("no hay un numero");
    }
    if (offsetValue == "0") {
      throw new TypeError("no hay un numero");
    }
    if (typeof stringValue !== "string") {
      throw new TypeError("el valor no es una cadena de texto");
    }
    let theCipherKey = "";  //obteniendo num ascii

    for (let i = 0; i < stringValue.length; i++) {
      let getAsciiNumbers = stringValue.charCodeAt(i);
      let startCipher = ((getAsciiNumbers - 65 + offsetValue) % 26) + 65;
      let newKey = String.fromCharCode(startCipher);
      theCipherKey += newKey;
    }
    //console.log(theCipherKey);
    return theCipherKey;
  },

  decode: function (offsetValue, stringValue) {
    if (isNaN(offsetValue) == true || typeof offsetValue == "object") {
      throw new TypeError("no hay un numero");
    }
    if (offsetValue == "0") {
      throw new TypeError("no hay un numero");
    }
    if (typeof stringValue !== "string") {
      throw new TypeError("el valor no es una cadena de texto");
    }

    let theDecodeKey = ""; //obteniendo num ascii
    
    for (let i = 0; i < stringValue.length; i++) {
      let getAsciiNumbers = stringValue.charCodeAt(i);
      let startDecode = ((getAsciiNumbers + 65 - offsetValue) % 26) + 65;  //aplicando la formula para el descifrado
      if (startDecode < 65) { startDecode += 26;}
      if (startDecode > 90) {startDecode -= 26;}        
      let originalKey = String.fromCharCode(startDecode);   //obteniendo la letra
      theDecodeKey += originalKey;
    }
    //console.log(theDecodeKey);
    return theDecodeKey;
  },
};

export default cipher;
