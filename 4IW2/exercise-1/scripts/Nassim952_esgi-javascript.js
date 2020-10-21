// UCFIRST FUNCTION
function ucfirst(chaine){
    if (typeof chaine !== "string" || chaine === "" ) return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

console.log(ucfirst("nassim"));

// Capitalize Function
const chaine = "hello world";

function capitalize(chaine){
    if (typeof chaine !== "string" || chaine === "" ) return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

const caps = chaine.split(' ').map(capitalize).join(' ');

console.log(caps);

// camelCase function
const chaine2 = "hello world";

function camelCase(chaine2){
    if (typeof chaine2 !== "string" || chaine2 === "" ) return "";
    return chaine2.charAt(0).toUpperCase() + chaine2.slice(1);
}

const caps2 = chaine2.split(' ').map(camelCase).join(' ');
const string_join = caps2.replace(/ +/g, "");

console.log(string_join);

// SnakeCase Function

function snakeCase(chaine){
    if (typeof chaine !== "string" || chaine === "" ) return "";
    return chaine.replace(" ", "_");
}

console.log(snakeCase("hello world"));

// function leet

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function leet(chaine){
    var newStr = "";
    if (typeof chaine !== "string" || chaine === "" ) return "";
    for (let i = 0; i <= chaine.length; i++){
        if(chaine.indexOf(i) == "a"){
            newStr = chaine.replaceAt(i, 4);
        }
        if(chaine.indexOf(i) == "e"){
            newStr = chaine.replaceAt(i, 3);
        }
        if(chaine.indexOf(i) == "o"){
            newStr = chaine.replaceAt(i, 0);
        }
        if(chaine.indexOf(i) == "u"){
            newStr = chaine.replaceAt(i, "(_)");
        }
        if(chaine.indexOf(i) == "i"){
            newStr = chaine.replaceAt(i, 1);
        }
        if(chaine.indexOf(i) == "y"){
            newStr = chaine.replaceAt(i, 7);
        }
    }
    return newStr;
}

// console.log(leet("anaconda"));

// function prop_access

function prop_access(obj, prop) {
    if (obj === "undefined") return obj
    if (typeof prop !== "string" && prop !== "") return obj
  
    let access = prop.split(".")
    let propPath = access[0]
    let value = obj
  
    for (let i = 0; i < access.length; i++) {
        propPath += `.${access[i]}`
        if (!value[access[i]]) {
            return `${obj} n'existe pas`
        }
        value = value[access[i]]
    }
    return value
  }

var car = {
    voiture: {
        Type: {
            Name: "mercedes"
        }
    }
}

console.log(prop_access(car, "voiture.type"));

// function verlan

function verlan(str){
    if (typeof str !== "string" || str === "" ) return "";
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join(""); 

    return joinArray;
}

console.log(verlan("hello world"));

// function yoda

function yoda(str){
    if (typeof str !== "string" || str === "" ) return "";
    var splitString = str.split(" ");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join(" "); 

    return joinArray;
}

console.log(yoda("hello world"));


// VIGENERE

var VigenereCipher = {

    _tabCipher: {
      a: "abcdefghijklmnopqrstuvwxyz",
      b: "bcdefghijklmnopqrstuvwxyza",
      c: "cdefghijklmnopqrstuvwxyzab",
      d: "defghijklmnopqrstuvwxyzabc",
      e: "efghijklmnopqrstuvwxyzabcd",
      f: "fghijklmnopqrstuvwxyzabcde",
      g: "ghijklmnopqrstuvwxyzabcdef",
      h: "hijklmnopqrstuvwxyzabcdefg",
      i: "ijklmnopqrstuvwxyzabcdefgh",
      j: "jklmnopqrstuvwxyzabcdefghi",
      k: "klmnopqrstuvwxyzabcdefghij",
      l: "lmnopqrstuvwxyzabcdefghijk",
      m: "mnopqrstuvwxyzabcdefghijkl",
      n: "nopqrstuvwxyzabcdefghijklm",
      o: "opqrstuvwxyzabcdefghijklmn",
      p: "pqrstuvwxyzabcdefghijklmno",
      q: "qrstuvwxyzabcdefghijklmnop",
      r: "rstuvwxyzabcdefghijklmnopq",
      s: "stuvwxyzabcdefghijklmnopqr",
      t: "tuvwxyzabcdefghijklmnopqrs",
      u: "uvwxyzabcdefghijklmnopqrst",
      v: "vwxyzabcdefghijklmnopqrstu",
      w: "wxyzabcdefghijklmnopqrstuv",
      x: "xyzabcdefghijklmnopqrstuvw",
      y: "yzabcdefghijklmnopqrstuvwx",
      z: "zabcdefghijklmnopqrstuvwxy"
    },
  
    encrypt: function(plainText, keyword){
      if( typeof(plainText) !== "string" ){
        return "invalid plainText. Must be string, not " + typeof(plainText);
      }
      if( typeof(keyword) !== "string" ){
        return "invalid keyword. Must be string, not " + typeof(keyword);
      }
  
      plainText = plainText.toLowerCase();
      keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
      var encryptedText = "";
      var specialCharacterCount = 0;
  
      for( var i = 0; i < plainText.length; i++ ){
        var keyLetter = (i - specialCharacterCount) % keyword.length;
        var keywordIndex = VigenereCipher._tabCipher.a.indexOf(keyword[keyLetter]);
  
        if( VigenereCipher._tabCipher[plainText[i]] ){
          encryptedText += VigenereCipher._tabCipher[plainText[i]][keywordIndex];
        }else{
          encryptedText += plainText[i];
          specialCharacterCount++;
        }
      }
      return encryptedText;
    },
  
  };
  
  module.exports = VigenereCipher;

  console.log(VigenereCipher.encrypt("wikipedia", "crypto"));


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.prop_access = prop_access;
