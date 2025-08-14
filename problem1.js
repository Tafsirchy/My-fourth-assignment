
function totalFine( fare ) {
    if(fare <= 0 || typeof fare !== 'number'){
        return 'Invalid';
    }

    const fine = fare * (20/100);
    const extraFine = 30;
    const total = fare + fine + extraFine;
    return total;
}

console.log(totalFine("Gorib tai ticket katinai")); // 130
