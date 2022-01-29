
const sumTwoNumberString = (string1, string2) => {

    const length1 = string1.length;
    const length2 = string2.length;
    if (length1 > length2) {
        var sum = calculateSum(string2, string1, length2, length1);
    }
    else {
        var sum = calculateSum(string1, string2, length1, length2);
    }
    return sum;

}

const calculateSum = (smallString, largeString, smallLength, largeLength) => {

    var sum = '';
    var carry = 0;
    var temp = 0
    var j = smallLength-1;

    for (let i = largeLength-1; i >= 0; i--) { 
        temp = +largeString.charAt(i) + +smallString.charAt(j)+ carry;
        j--;

        if(temp >= 10){
            sum =temp%10 + sum;
            carry = Math.floor(temp/10);
        }
        else{
            sum = temp + sum;
            carry= 0;
        }

    }

    return sum;

}


const sum = sumTwoNumberString('12345688888888888888888', '123498888888887777777777');
console.log(sum);