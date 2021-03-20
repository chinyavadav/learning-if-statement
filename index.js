// Zimsec
//0-100%
//75-100: A
//60-74: B
//50-59:C
//40:49:D
//0-39: U

//if, else statement // else if

function gradeMark(mark) {
    var grade; //50
    if (mark >= 75 && mark <= 100) {
        grade = "A";
    } else if (mark >= 60 && mark <= 74) {
        grade = "B";
    } else if (mark >= 50 && mark <= 59) {
        grade = "C";
    } else if (mark >= 40 && mark <= 49) {
        grade = "D";
    } else if (mark >= 0 && mark <= 39) {
        grade = "U";
    } else {
        console.log("Mark should be between 0 and 100!");
    }
    // TODO
    return grade
}

var grade = gradeMark(754);
console.log(grade);