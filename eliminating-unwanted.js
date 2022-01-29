const eliminatingTheUnwanted = (inputStrng, unwant) => {

    const unwantLength = unwant.length;
    var newString = inputStrng;

    do {
        var textSearch = newString.search(unwant);
        const temp1= newString.slice(0, textSearch);
        const temp2 = newString.slice(textSearch + unwantLength, newString.length);
        newString = temp1+ temp2;
        textSearch = newString.search(unwant);
    } while (textSearch > 0);

    return newString;

}

const output = eliminatingTheUnwanted('daabcbaabcbc', 'abc');
console.log(output);