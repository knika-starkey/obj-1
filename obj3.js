let arr = new Array(1, -2, 3);
let arr1 = [4, 5, 6];
// alert(arr[0]);
// arr.is_positive = function () {
//     for (let i = 0; i < this.length; i++) {
//         if (this[i] < 0)
//             return false;
//     }
//     return true;


// };
// alert(arr.is_positive());

Array.prototype.is_positive = function () {
    for (let i = 0; i < this.length; i++) {
        if (this[i] < 0)
            return false;
    }
    return true;
}

alert(arr.is_positive());
alert(arr1.is_positive());