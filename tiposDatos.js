//Tipo de Datos

//Undefined: Si a una variable no se le asigna un valor esta por defecto sera "Undefined"
let cliente;
console.log(cliente);
console.log(typeof cliente);
//typeof es una variable para ver que tipo de dato tiene una variable

//Boolean: true or false ejemplo:usuario autentificado: "si" o "no"
const descuento = true;
console.log(descuento);

//Number: tenemos enteros,flotantes,etc en otros lenguajes PEROOO a la final todos son numeros y en JS solo utilizamos number
const num1 = 22.2;
const num2 = 470;
const num3 = -10;
console.log(num1);
console.log(num2);
console.log(num3);

//Strings o Cadenas de Texto: se utilizan cuando vayamos a represnetar algun texto en pantalla : string significa comillas dobles
const alumno = "Majos";
let producto = "computadora";
let producto2 = "radio";
const num = "30";
console.log(typeof num);
console.log("el numero es", num, producto2);

//Big Int: constructor para represnetar numeros muy grandes en JavaScript-> para usar este tipo de dato debemos agregar "BigInt"antes del numero
const numGrande =
  BigInt(
    15888888888884544444444444444444444444444555555555556666666666666777777777777778888888888889999999999999991001010011
  );
console.log(typeof numGrande);
console.log(numGrande);
//no se mezclan con numeros normales
const nume = 10;
const nume2 = 20;
//console.log(nume + numGrande) NOS VA DAR ERROR si tenemos este caso podemos cambiar el tipo de dato Number()
console.log(nume + Number(numGrande));

//Symbol: e sun dato UNICO
const primSymbol = Symbol(30);
const sprimSymbol = Symbol(30);
//console.log(primSymbol===sprimSymbol)
console.log(primSymbol.valueOf());

//Null: es un valor  vacio
const deescuento = null;
console.log(typeof deescuento);
