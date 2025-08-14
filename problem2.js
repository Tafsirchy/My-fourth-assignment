function  onlyCharacter( str ) {
    if (typeof str !== 'string'){
        return 'Invalid';
    }
    let result = str.split(" ").join("").toUpperCase();
    
    return result;
}

console.log(onlyCharacter("  h e llo wor   ld"));