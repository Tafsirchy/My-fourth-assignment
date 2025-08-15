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

console.log(resultReport(100));
