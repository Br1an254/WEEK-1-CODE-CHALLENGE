//*********** Challenge 1: Student Grade Generator (Toy Problem) ******************
studentMarks = (grade) => {
    if(grade >= 0 && grade <= 100) { // This line of code checks of the input is between 0 and 100
        if(grade > 79)    { //***START*** This block of if and else will grade students to their appropriate scored
            return 'A'
        } else if(grade >= 60 && grade <= 79) {
            return 'B -'
        } else if(grade >= 59 && grade <= 49) {
            return 'C -'
        } else if(grade >= 40 && grade <= 49) {
            return 'D -'
        } else {
            return 'E'
        }//***END***
    } // END
}
// console.log(studentMarks(80));
