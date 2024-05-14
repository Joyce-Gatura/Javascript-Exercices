function checkGrade(totalMarks, examType) {
    let gradeMessage = "";

    switch (true) {
        case (examType === "Final" && totalMarks >= 90):
            gradeMessage = "Excellent job, you got an A+.";
            break;
        case (totalMarks >= 89 && totalMarks <= 100):
            gradeMessage = "Excellent job, you got an A+.";
            break;
        case (totalMarks >= 80 && totalMarks <= 88):
            gradeMessage = "Good job, you got an A.";
            break;
        case (totalMarks >= 75 && totalMarks <= 79):
            gradeMessage = "Well done, you got a B+.";
            break;
        case (totalMarks >= 70 && totalMarks <= 74):
            gradeMessage = "Nice work, you got a B.";
            break;
        case (totalMarks >= 60 && totalMarks <= 69):
            gradeMessage = "You got a C.";
            break;
        default:
            gradeMessage = "You need to improve.";
    }

    return gradeMessage;
}

let totalMarks = parseInt(prompt("Enteryour total marks:"));
let examType = prompt("Enter the type of examination (e.g., 'Final'):");

let result = checkGrade(totalMarks, examType);
console.log(result);
