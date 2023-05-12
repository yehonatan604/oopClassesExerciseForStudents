const subjects = {
  "C#": new Subject("C#"),
  JavaScript: new Subject("JavaScript"),
  HTML: new Subject("HTML"),
  SQL: new Subject("SQL"),
};

const students = {
  Yuri: new Student("Yuri", "yuri@email.com", [subjects["C#"]]),
  Dean: new Student("Dean", "dean@email.com", [subjects["JavaScript"]]),
  Agam: new Student("Agam", "agam@email.com", [subjects["JavaScript"], subjects["HTML"]]),
  Lisa: new Student("Lisa", "lisa@email.com", { ...subjects }),
};

// exercise 1
const grades = [
  new Grade(subjects["C#"], students["Yuri"], 100),
  new Grade(subjects["JavaScript"], students["Dean"], 80),
  new Grade(subjects["JavaScript"], students["Agam"], 95),
  new Grade(subjects["HTML"], students["Agam"], 75),
  new Grade(subjects["C#"], students["Lisa"], 100),
  new Grade(subjects["JavaScript"], students["Lisa"], 70),
  new Grade(subjects["HTML"], students["Lisa"], 88),
  new Grade(subjects["SQL"], students["Lisa"], 90),
];

console.log("exercise 1");
console.log(grades);

//exercise 2
const top90 = grades.filter((grade) => {
    return grade.grade > 90 && grade.subject.name == "JavaScript"
});

console.log("exercise 2");
console.log(top90);

//exercise 3

const gradesAvg = grades.reduce((sum, value) => {
    return sum + value.grade;
}, 0) / grades.length;

console.log("exercise 3");
console.log(gradesAvg);

// exercise 4,5
const names = ["Navnikov", "Shemesh", "Aviv", "Zax"];
const studentsEntries = Object.entries(students);

for (let [index, [key, value]] of studentsEntries.entries()) {
  value.addLastName(names[index]);
}

console.log("exercise 4,5");
console.log(students);

// exercise 6,7,8,9

const teachers = {
  Jeremy: new Teacher("Jeremy", "jeremy@email.com", [subjects["C#"]]),
  Joe: new Teacher("Joe", "joe@email.com", [subjects["SQL"]]),
  Tzipi: new Teacher("Tzipi", "tzipi@email.com", [subjects["JavaScript"], subjects["HTML"]]),
};

console.log("exercise 6,7,8,9");
console.log(teachers);

// exercise 10
let singleSubjectTeachers = [];

Object.keys(teachers).forEach((key) => {
  if (teachers[key].subjects[0].length === 1) {
    singleSubjectTeachers.push(teachers[key].email);
  }
});

console.log("exercise 10");
console.log(singleSubjectTeachers);

// exercise 11

let onlyJS = [];
let people = {...students, ...teachers };

Object.keys(people).forEach((key) => {
    for (sub in people[key].subjects[0]) {
        if (people[key].subjects[0][sub].name === "JavaScript"){
            onlyJS.push(people[key].name);
        }
    }
});

console.log("exercise 11");
console.log(onlyJS);

//exercise 12

const teachersEntries = Object.entries(teachers);

for (let [index, [key, value]] of teachersEntries.entries()) {
  value.addLastName(names[index]);
}

console.log("exercise 12");
console.log(teachers);