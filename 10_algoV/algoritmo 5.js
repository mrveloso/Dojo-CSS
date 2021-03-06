function resetNegatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

console.log(resetNegatives([1, 2, -1, -3]));


function moveForward(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i + 1 < arr.length) {
            arr[i] = arr[i + 1];
        }
    }
    arr[arr.length - 1] = 0;
    return arr;
}

console.log(moveForward([1, 2, -1, -3]));


function returnReversed(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(returnReversed([1, 2, 3]));


function repeatTwice(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(repeatTwice([4, "Ulysses", 42, false]));
// by felipe veloso inforcap 2021 //