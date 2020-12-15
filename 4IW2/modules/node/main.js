const randomIntFromInterval = require("./utils").randomIntFromInterval;
const apis = require("./api");
const timer = require("./timer");

const mapping = function (resolve) {
  const timeout = randomIntFromInterval(1, 4);

  Promise.all([
    new Promise(apis.getStudents),
    new Promise(apis.getCourses),
  ]).then((results) => {
    setTimeout(() => {
      console.log(`mapping:${timeout}`);
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
    }, timeout);
  });
};

Promise.race([new Promise(mapping), new Promise(timer)])
  .then(() => console.log("Merge OK"))
  .catch(() => console.error("Timeout"));
