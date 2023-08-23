var text = "THE QUICK BROWN FOX JUMP FOR LAZY DOG"

function capitalizestartnumbers(text) {
    text = text.toLowerCase();
    let sptext = text.split(" ");
    for(let i = 0; i < sptext.length; i++) {
        sptext[i] = sptext[i].split('');
        sptext[i][0] = sptext[i][0].toUpperCase();
        sptext[i] = sptext[i].join('');
    }
    for(let j = 0; j < sptext.length; j++) {
        if(j % 2 == 0) {
            sptext.splice(j , 0, " ");
        }
    }
    return sptext.join('');
}

text = capitalizestartnumbers(text);
console.log(text);
