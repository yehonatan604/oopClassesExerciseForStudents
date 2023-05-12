class Teacher extends Person {
    subjects;
    constructor(name, email, ...subjects) {
        super(name, email);
        this.subjects = subjects;
    }

    addLastName(lastName) {
        let reverse = str => [...str].reverse().join('');
        this.name += ` ${reverse(lastName)}`;
    }
}