const eliminatingTheUnwanted = (inputStrng, unwant) => {

    const unwantLength = unwant.length;
    var newString = inputStrng;

    do {
        var textSearch = newString.search(unwant);
        console.log(textSearch);
        newString = newString.slice(textSearch, textSearch + unwantLength);
        console.log(newString);
        textSearch = newString.search(unwant);
    } while (textSearch > 0);




}

const output = eliminatingTheUnwanted('daabcbaabcbc', 'abc');
console.log(output);