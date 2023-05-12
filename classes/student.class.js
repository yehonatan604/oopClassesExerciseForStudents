class Student extends Person {
    subjects;
    constructor(name, email, ...subjects) {
        super(name, email);
        this.subjects = subjects;
    }
}