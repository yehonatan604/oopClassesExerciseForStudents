class Grade {
    id;
    subject;
    student;
    grade;

    static count = 0;

    constructor (subject, student, grade) {
        this.subject = subject;
        this.student = student;
        this.grade = grade;
        Grade.count++;
        this.id = Grade.count;
    }
}