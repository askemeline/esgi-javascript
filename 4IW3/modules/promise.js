function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}

var getStudents = function getStudents(resolve) {
  const timeout = randomIntFromInterval(1, 2);
  console.log("getStudents:" + timeout);
  setTimeout(() => {
    resolve([
      { name: "Dupont", cours: [1, 3, 5] },
      { name: "Lea", cours: [2, 4] },
      { name: "Charles", cours: [1] },
    ]);
  }, timeout);
};

var getCourses = function getCourses(resolve) {
  const timeout = randomIntFromInterval(2, 4);
  console.log("getCourses:" + timeout);
  setTimeout(() => {
    resolve([
      { id: 1, name: "JS" },
      { id: 2, name: "PHP" },
      { id: 3, name: "C#" },
      { id: 4, name: "F#" },
      { id: 5, name: "CSS" },
    ]);
  }, timeout);
};
var mapping = function mapping(resolve) {
  Promise.all([new Promise(getStudents), new Promise(getCourses)]).then(
    (results) => {
      const students = results[0],
        courses = results[1];
      const timeout = randomIntFromInterval(1, 4);
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
    }
  );
};

var timer = function (_, reject) {
  setTimeout(() => {
    reject();
  }, 7000);
};

Promise.race([new Promise(mapping), new Promise(timer)])
  .then(() => console.log("Merge OK"))
  .catch(() => console.error("Timeout"));
