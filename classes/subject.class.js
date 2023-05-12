class Subject {
    id;
    name;
    static count = 0;

    constructor(name) {
        this.name = name;
        Subject.count++;
        this.id = Subject.count;
    }
}