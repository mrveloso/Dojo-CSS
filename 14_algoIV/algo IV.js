//1.- Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y. 

function a(arr, y) {
    var cont = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            cont++;

        }
    }
    console.log(cont);
}

a([1, 3, 9, 5, 2, 7], 2);


//2.- Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array. 

function a(arr) {
    var min = arr[0];
    var max = arr[0];
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
        sum = sum + arr[i];
        // sum += arr[i]; // OPCIONAL AL SUMAR DE LA LINEA ANTERIOR
    }
    var avg = sum / arr.length;
    var z = [max, min, avg]
    return z;
}

console.log(a([3, 5, 4, 6, 11, 8]));


//3.- Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].

function reemplazoNeg(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}
a = reemplazoNeg([1, 2, -3, -5, 5]);
console.log(a)


//4.- Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].

function Rem(arr, inicio, fin) {
    if (inicio < 0 || inicio > fin || fin > arr.length || arr.length < inicio || arr.length <= fin) { return } //ALGUNAS VALIDACIONES
    var new_arr = [];
    for (var i = 0; i < arr.length; i++) {
        if (i < inicio || i > fin) {
            new_arr.push(arr[i]);
        }
    }
    return new_arr
}
console.log(Rem([10, 20, 30, 40], 2, 3));