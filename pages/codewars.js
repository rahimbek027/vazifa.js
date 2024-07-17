// masala 1
// son beerilgan berilgan sonning teskarisini qaytarish agar berilgan son 100 yoki 1000 va shunga o'xshash bo'lsa 1 qaytarilsin

function reverseNumber(n) {
    function reverse(num) {
        const isNegative = num < 0;
        let reversedNum = 0;
        let absoluteNum = Math.abs(num);

        while (absoluteNum > 0) {
            reversedNum = reversedNum * 10 + (absoluteNum % 10);
            absoluteNum = Math.floor(absoluteNum / 10);
        }

        if (isNegative) {
            reversedNum = -reversedNum;
        }

        return reversedNum;
    }

    
    return reverse(n);
}


console.log(reverseNumber(123)); 
console.log(reverseNumber(-456)); 
console.log(reverseNumber(100));
console.log(reverseNumber(0)); 


//masala 2
// massivdagi juft o'rinda turgan elementni o'chirish
/*
function removeEveryOther(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    return result;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const resultArray = removeEveryOther(array);
console.log(resultArray);
*/

// masala 3
// berilgan 2 ta sonning yig'indisini hisoblash
/*
function sumStrings(a, b) {
    const num1 = BigInt(a);
    const num2 = BigInt(b);
   
   const sum = num1 + num2;
   
   
   return sum.toString();
}


console.log(sumStrings("123", "456")); 
console.log(sumStrings("999999999999999999999999999999999999999999999999999999", "1")); 
*/