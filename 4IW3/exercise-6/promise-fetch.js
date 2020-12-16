function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}

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
    const timeout = randomIntFromInterval(7, 9);
    console.log("mapping:" + timeout);
    setTimeout(
      () =>
        resolve(
          students.map((student) => {
            student.cours = student.cours.map((id) =>
              courses.find((cours) => cours.id === id)
            );
            return student;
          })
        ),
      timeout
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
