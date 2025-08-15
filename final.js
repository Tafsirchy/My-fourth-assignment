function totalFine( fare ) {
    if(fare <= 0 || typeof fare !== 'number'){
        return 'Invalid';
    }

    const fine = fare * (20/100);
    const extraFine = 30;
    const total = fare + fine + extraFine;
    return total;
}



function  onlyCharacter( str ) {
    if (typeof str !== 'string'){
        return 'Invalid';
    }
    let result = str.split(" ").join("").toUpperCase();
    
    return result;
}



function  bestTeam( player1, player2 ) {
    if(typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null){
        return 'Invalid';
    }

    const team1 = player1.foul + player1.cardY + player1.cardR;

    const team2 = player2.foul + player2.cardY + player2.cardR;

    if (team1 < team2){
        return player1.name;
    }
    else if (team1 > team2){
        return player2.name;
    }
    else{
        return 'Tie'
    }
    
}



function  isSame(arr1 , arr2 ) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return 'Invalid';
    }
    else if(arr1.length !== arr2.length){
        return false;
    }
    for (let i = 0 ; i < arr1.length ; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
    
}



function  resultReport( marks ) {
    if(!Array.isArray(marks)){
        return 'Invalid';
    }

    if(marks.length === 0){
        return {
            finalScore: 0, 
            pass: 0, 
            fail: 0
        }
    }

    let totalScore = 0;
    let pass = 0;
    let fail = 0;

    for(let i = 0; i < marks.length; i++){
        totalScore += marks[i];
        if(marks[i] >= 40){
            pass++;
        }
        else if(marks[i] < 40){
            fail++;
        }
    }

    let average = totalScore / marks.length;

    return {
        finalScore: Math.round(average),
        pass: pass,
        fail: fail
    }
}




/**--------------------cleaner then before for all test case--------------------*/

// 1. Total Fine Calculator
function totalFine(fare) {
    if (typeof fare !== 'number' || fare <= 0) return 'Invalid';
    return fare + fare * 0.2 + 30;
}

// 2. Remove Spaces & Uppercase
function onlyCharacter(str) {
    if (typeof str !== 'string') return 'Invalid';
    return str.replaceAll(' ', '').toUpperCase();
}

// 3. FIFA Best Team
function bestTeam(player1, player2) {
    if (typeof player1 !== 'object' || typeof player2 !== 'object' || !player1 || !player2) return 'Invalid';
    const score1 = player1.foul + player1.cardY + player1.cardR;
    const score2 = player2.foul + player2.cardY + player2.cardR;
    return score1 < score2 ? player1.name : score1 > score2 ? player2.name : 'Tie';
}

// 4. Compare Arrays
function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return 'Invalid';
    if (arr1.length !== arr2.length) return false;
    return arr1.every((val, i) => val === arr2[i]);
}

// 5. Exam Result Report
function resultReport(marks) {
    if (!Array.isArray(marks)) return 'Invalid';
    if (marks.length === 0) return { finalScore: 0, pass: 0, fail: 0 };

    let pass = 0, fail = 0, total = 0;
    marks.forEach(m => {
        total += m;
        m >= 40 ? pass++ : fail++;
    });

    return { finalScore: Math.round(total / marks.length), pass, fail };
}
