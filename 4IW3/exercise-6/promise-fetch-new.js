function getStudents() {
  return fetch("http://localhost:3000/students").then((response) =>
    response.json()
  );
}

function getCourses() {
  return fetch("http://localhost:3000/courses").then((response) =>
    response.json()
  );
}

var mapping = function mapping(resolve) {
  Promise.all([getStudents(), getCourses()]).then((results) => {
    const students = results[0],
      courses = results[1];
    resolve(
      students.map((student) => {
        student.cours = student.cours.map((id) =>
          courses.find((cours) => cours.id === id)
        );
        return student;
      })
    );
  });
};

var timer = function (_, reject) {
  setTimeout(() => {
    reject();
  }, 7000);
};

Promise.race([new Promise(mapping), new Promise(timer)])
  .then(() => console.log("Merge OK"))
  .catch(() => console.error("Timeout"));
