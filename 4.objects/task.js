function Student(name, gender, age) {
  this.marks = [];
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.excluded || this.marks === undefined) {
    return;
  }
  this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  } else {
    return this.marks.reduce((sum, mark) => sum + mark) / this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;
  console.log("Плохая учеба")
}
