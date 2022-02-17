const cipher = {
  encode: function (offsetValue, stringValue) {
    if(isNaN(offsetValue) == true || typeof offsetValue == "object"){
      throw new TypeError ("no hay un numero");   
    }
    if(offsetValue == "0"){
      throw new TypeError ("no hay un numero");   
    }
    if(typeof stringValue !== "string"){
     throw new TypeError ("el valor no es una cadena de texto");
    }
    let theCipherKey = "";
    //obteniendo num ascii
    for (let i = 0; i < stringValue.length; i++) {
      let getAsciiNumbers = stringValue.charCodeAt(i);
      //aplicando la formula para el cifrado
      let startCipher = ((getAsciiNumbers - 65 + offsetValue) % 26) + 65;
      //obteniendo la letra
      let newKey = String.fromCharCode(startCipher);
      theCipherKey += newKey;
    }

    console.log(theCipherKey);
    return theCipherKey;
  },

  decode: function (offsetValue, stringValue) {
    if(isNaN(offsetValue) == true || typeof offsetValue == "object"){
      throw new TypeError ("no hay un numero");   
    }
    if(offsetValue == "0"){
      throw new TypeError ("no hay un numero");   
    }
    if(typeof stringValue !== "string"){
     throw new TypeError ("el valor no es una cadena de texto");
    }

    let theDecodeKey = "";
    //obteniendo num ascii
    for (let i = 0; i < stringValue.length; i++) {
      let getAsciiNumbers = stringValue.charCodeAt(i);
      //aplicando la formula para el descifrado
      let startDecode = ((getAsciiNumbers + 65 - offsetValue) % 26) + 65;
      if (startDecode < 65) {
        //si la nueva letra es menor que 65 o sea A
        startDecode += 26;
      }
      if (startDecode > 90) {
        //si la nueva letra es mayor que 90 o sea Z
        startDecode -= 26;
      }
      //obteniendo la letra
      let originalKey = String.fromCharCode(startDecode);
      theDecodeKey += originalKey;
    }
    console.log(theDecodeKey);
    return theDecodeKey;
  },
};

export default cipher; //exportando el objeto cipher
