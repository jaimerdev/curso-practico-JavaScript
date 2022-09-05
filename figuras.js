//Código del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm²");
console.groupEnd();

//Código del triángulo
console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
// );
// console.log("La altura del triángulo es: " + alturaTriangulo + "cm");
function  perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");
function areatriangulo(base, altura) {
    return (base * altura) / 2;
} 
// console.log("El área del triángulo es: " + areatriangulo + "cm²");
console.groupEnd();

//Código del círculo
console.group("Círculo");
//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
} 

//Pi
const PI = Math.PI;
// console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo() {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("La circunferencia del círculo es: " + perimetroCirculo + "cm");

//Área;
function areaCirculo(radio) {
    return radio * radio * PI;
} 
// console.log("El área del círculo es: " + areaCirculo + "cm²");
console.groupEnd();
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}