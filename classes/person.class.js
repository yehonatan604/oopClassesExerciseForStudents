class Person {
  id;
  name;
  email;
  static count = 0;

  constructor(name, email) {
    this.name = name;
    this.email = email;
    Person.count++;
    this.id = Person.count;
  }

  addLastName(lastName) {
    this.name += ` ${lastName}`;
  }
}
